import { useEffect, useRef, useState } from "react";
import {
  X,
  FileText,
  MessagesSquare,
  Target,
  ArrowUpRight,
  RefreshCw,
} from "lucide-react";
import { DIPUTADOS, getMetas } from "../data";
import { loadText, parseChat } from "../content";
import Portrait from "./Portrait";
const empty = { status: "loading", text: "" };
function State({ value, onRetry, label }) {
  if (value.status === "ready") return null;
  return (
    <div className="empty-state">
      <FileText size={30} />
      <h3>
        {value.status === "loading"
          ? "Cargando información…"
          : value.status === "error"
            ? "No pudimos cargar el archivo"
            : `${label} pendiente`}
      </h3>
      <p>
        {value.status === "loading"
          ? "Un momento, por favor."
          : value.status === "error"
            ? "Comprueba tu conexión e inténtalo nuevamente."
            : "Todavía no se ha incorporado este documento a la consulta."}
      </p>
      {value.status === "error" && (
        <button className="secondary" onClick={onRetry}>
          <RefreshCw size={16} /> Volver a intentar
        </button>
      )}
    </div>
  );
}
export function Goals({ person }) {
  const metas = getMetas(person.id);
  return (
    <div className="goals">
      {metas.length ? (
        metas.map((m, i) => (
          <article className="goal" key={m[1]}>
            <div className="goal-top">
              <span className="goal-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={`goal-tag ${m[3].toLowerCase()}`}>{m[3]}</span>
            </div>
            <h3>{m[1]}</h3>
            <p>{m[2]}</p>
            <footer>
              <span>Eje {m[0]}</span>
              <span>ODS {m[5].split(" ").join(" · ")}</span>
            </footer>
          </article>
        ))
      ) : (
        <div className="no-goals">
          <Target size={26} />
          <p>No hay metas asociadas en el catálogo cargado.</p>
          <small>
            Esto no significa que la dependencia carezca de metas oficiales.
          </small>
        </div>
      )}
    </div>
  );
}
export default function Detail({ person, onClose }) {
  const dialog = useRef(null),
    [tab, setTab] = useState("summary"),
    [summary, setSummary] = useState(empty),
    [chat, setChat] = useState(empty),
    [retry, setRetry] = useState(0);
  useEffect(() => {
    const previous = document.activeElement,
      previousOverflow = document.body.style.overflow;
    dialog.current.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      previous?.focus();
    };
  }, []);
  useEffect(() => {
    const controller = new AbortController();
    setSummary(empty);
    setChat(empty);
    const read = (folder, set) =>
      loadText(folder, person.id, controller.signal)
        .then(set)
        .catch((error) => {
          if (error.name !== "AbortError") set({ status: "error", text: "" });
        });
    read("resumen", setSummary);
    read("pregyresp", setChat);
    return () => controller.abort();
  }, [person.id, retry]);
  const messages = parseChat(chat.text),
    tabs = [
      ["summary", "Resumen ejecutivo", FileText],
      ["chat", "Preguntas y respuestas", MessagesSquare],
      ["goals", "Metas del PED", Target],
    ];
  function tabKey(event, index) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? 2
          : (index + (event.key === "ArrowRight" ? 1 : -1) + 3) % 3;
    setTab(tabs[next][0]);
    document.getElementById(`tab-${tabs[next][0]}`)?.focus();
  }
  return (
    <dialog
      ref={dialog}
      className="detail"
      aria-labelledby="detail-title"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === dialog.current) onClose();
      }}
    >
      <div className="detail-inner">
        <header className="detail-header">
          <div className="detail-identity">
            <Portrait person={person} />
            <div>
              <span className="eyebrow">COMPARECENCIA · {person.id}</span>
              <h2 id="detail-title">{person.name}</h2>
              <p>{person.holder}</p>
            </div>
          </div>
          <button
            className="icon-button"
            onClick={onClose}
            aria-label="Cerrar comparecencia"
            autoFocus
          >
            <X />
          </button>
        </header>
        <div
          className="tabs"
          role="tablist"
          aria-label="Contenido de la comparecencia"
        >
          {tabs.map(([id, label, Icon], i) => (
            <button
              key={id}
              id={`tab-${id}`}
              role="tab"
              aria-selected={tab === id}
              aria-controls={`panel-${id}`}
              tabIndex={tab === id ? 0 : -1}
              onKeyDown={(e) => tabKey(e, i)}
              onClick={() => setTab(id)}
            >
              <Icon size={17} />
              {label}
            </button>
          ))}
        </div>
        <div
          className="detail-body"
          role="tabpanel"
          id={`panel-${tab}`}
          aria-labelledby={`tab-${tab}`}
          tabIndex={0}
        >
          {tab === "summary" && (
            <>
              <State
                value={summary}
                label="Resumen ejecutivo"
                onRetry={() => setRetry((v) => v + 1)}
              />
              {summary.status === "ready" && (
                <>
                  <div className="document-heading">
                    <h3>Resumen ejecutivo</h3>
                  </div>
                  <div className="summary-text">
                    {summary.text.split(/\n\s*\n/).map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
          {tab === "chat" && (
            <>
              <State
                value={chat}
                label="Preguntas y respuestas"
                onRetry={() => setRetry((v) => v + 1)}
              />
              {chat.status === "ready" && (
                <>
                  <div className="document-heading">
                    <span>
                      {messages.filter((m) => m.type === "question").length}{" "}
                      preguntas identificadas
                    </span>
                    <a href={`/pregyresp/${person.id}.txt`} download>
                      Ver transcripción <ArrowUpRight size={15} />
                    </a>
                  </div>
                  <div className="chat">
                    {messages.map((m, i) => {
                      const deputy = DIPUTADOS.find(
                        (d) =>
                          d.name.localeCompare(m.speaker, "es", {
                            sensitivity: "base",
                          }) === 0,
                      );
                      return (
                        <article key={i} className={`message ${m.type}`}>
                          <div className="message-author">
                            {m.type === "answer" ? (
                              <Portrait person={person} />
                            ) : deputy ? (
                              <Portrait person={deputy} photo={deputy.photo} />
                            ) : (
                              <span className="speaker-icon">
                                {m.type === "question" ? "P" : "·"}
                              </span>
                            )}
                            <span>
                              <strong>
                                {m.speaker ||
                                  (m.type === "answer"
                                    ? person.holder
                                    : m.type === "question"
                                      ? "Pregunta"
                                      : "Transcripción")}
                              </strong>
                              <small>
                                {m.type === "answer"
                                  ? "Respuesta"
                                  : m.type === "question"
                                    ? "Intervención"
                                    : "Texto sin etiquetar"}
                              </small>
                            </span>
                          </div>
                          <div className="bubble">{m.text}</div>
                        </article>
                      );
                    })}
                  </div>
                </>
              )}
            </>
          )}
          {tab === "goals" && (
            <>
              <div className="document-heading">
                <h3>Metas vinculadas a {person.id}</h3>
                <span>Plan Estatal de Desarrollo</span>
              </div>
              <Goals person={person} />
            </>
          )}
        </div>
        <footer className="detail-footer">
          Consulta documental · El contenido corresponde a los archivos
          incorporados.
        </footer>
      </div>
    </dialog>
  );
}
