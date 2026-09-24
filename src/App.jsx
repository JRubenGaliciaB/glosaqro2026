import { useMemo, useState, Suspense, lazy } from "react";
import {
  ArrowUpRight,
  Orbit as OrbitIcon,
  LayoutGrid,
  Search,
  ChevronRight,
  Target,
  Landmark,
  FileText,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { SECRETARIAS, YEAR, METAS, GROUPS, COLORS, getMetas } from "./data";
import Portrait from "./components/Portrait";
import Detail, { Goals } from "./components/Detail";
const Orbit = lazy(() => import("./components/Orbit"));
export default function App() {
  const [selected, setSelected] = useState(
      SECRETARIAS.find((p) => p.id === "SEDESOQ"),
    ),
    [opened, setOpened] = useState(null),
    [view, setView] = useState("orbit"),
    [query, setQuery] = useState(""),
    [group, setGroup] = useState(0),
    [sidebar, setSidebar] = useState(false);
  const people = useMemo(
    () =>
      SECRETARIAS.filter(
        (p) =>
          (!group || p.axis === group) &&
          `${p.id} ${p.name} ${p.holder}`
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .includes(
              query
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase(),
            ),
      ),
    [query, group],
  );
  return (
    <div className="app">
      <a className="skip" href="#workspace">
        Ir a la consulta
      </a>
      <aside className={`sidebar ${sidebar ? "mobile-open" : ""}`}>
        <a
          href="/"
          className="brand"
          aria-label="Comparecencias Querétaro, inicio"
        >
          <span className="brand-mark">
          </span>
        </a>
        <div className="nav-section">
          <button
            className="nav-main active"
            onClick={() => {
              setGroup(0);
              setQuery("");
              setSidebar(false);
            }}
          >
            <OrbitIcon size={19} />
            Explorar dependencias
            <ChevronRight size={16} />
          </button>
        </div>
        <div className="nav-section groups">
          <span className="nav-label">ÁREAS DE GOBIERNO</span>
          {GROUPS.map((name, i) => (
            <button
              key={name}
              className={group === i ? "chosen" : ""}
              onClick={() => {
                setGroup(i);
                setSidebar(false);
              }}
            >
              <span
                className="group-dot"
                style={{ background: COLORS[i] || "#71869c" }}
              />
              {name}
              <small>
                {i ? SECRETARIAS.filter((p) => p.axis === i).length : 18}
              </small>
            </button>
          ))}
        </div>
        <div className="sidebar-bottom">
          <div className="ped-note">
            <Landmark size={21} />
            <strong>Plan Estatal de Desarrollo</strong>
            <p>Una mirada a las metas y a las acciones de cada dependencia.</p>
            <span>2021 — 2027</span>
          </div>
          <div className="state-outline">
            <span>QRO.</span>
            <small>Información para comprender.</small>
          </div>
        </div>
      </aside>
      <main id="workspace">
        <div className="page-heading">
          <div>
            <span className="eyebrow">Glosa 2026 - Querétaro</span>
            <h1>
              Las comparecencias, <em>en perspectiva.</em>
            </h1>
          </div>
          <span className="year-stamp">
            {YEAR}
            <small>COMPARECENCIAS</small>
          </span>
        </div>
        
        <div className="workspace-toolbar">
          <div>
            <h2>Explora las dependencias</h2>
            <span>
              {people.length}{" "}
              {people.length === 1 ? "dependencia" : "dependencias"}
              {group ? ` · ${GROUPS[group]}` : ""}
            </span>
          </div>
          <div className="workspace-actions">
            <label className="search">
              <Search size={17} />
              <input
                placeholder="Buscar dependencia…"
                aria-label="Buscar dependencia o titular"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <button
                  aria-label="Limpiar búsqueda"
                  onClick={() => setQuery("")}
                >
                  ×
                </button>
              )}
            </label>
            <div className="view-toggle" aria-label="Modo de visualización">
              <button
                aria-pressed={view === "orbit"}
                onClick={() => setView("orbit")}
                title="Vista orbital"
              >
                <OrbitIcon size={18} />
                <span>Orbital</span>
              </button>
              <button
                aria-pressed={view === "grid"}
                onClick={() => setView("grid")}
                title="Vista de tarjetas"
              >
                <LayoutGrid size={18} />
                <span>Tarjetas</span>
              </button>
            </div>
          </div>
        </div>
        <div className="explorer">
          <div className="explorer-main">
            {!people.length ? (
              <div className="empty-results">
                <Search size={32} />
                <h3>No encontramos dependencias</h3>
                <p>Prueba con otra sigla o nombre.</p>
                <button
                  className="secondary"
                  onClick={() => {
                    setQuery("");
                    setGroup(0);
                  }}
                >
                  Restablecer consulta
                </button>
              </div>
            ) : view === "orbit" ? (
              <Suspense
                fallback={
                  <div className="empty-results">Preparando mapa orbital…</div>
                }
              >
                <Orbit
                  people={people}
                  active={selected.id}
                  onHover={setSelected}
                  onOpen={setOpened}
                />
              </Suspense>
            ) : (
              <div className="cards">
                {people.map((p) => (
                  <button
                    key={p.id}
                    className={`person-card ${selected.id === p.id ? "selected" : ""}`}
                    onMouseEnter={() => setSelected(p)}
                    onFocus={() => setSelected(p)}
                    onClick={() => setOpened(p)}
                    style={{ "--accent": COLORS[p.axis] }}
                  >
                    <div>
                      <Portrait person={p} />
                      <ArrowUpRight size={17} />
                    </div>
                    <span className="person-code">{p.id}</span>
                    <h3>{p.name}</h3>
                    <p>{p.holder}</p>
                    <footer>
                      {getMetas(p.id).length} metas en el catálogo
                      <ChevronRight size={14} />
                    </footer>
                  </button>
                ))}
              </div>
            )}
            <div className="explorer-legend">
              <span>
                <span className="legend-dot" />
                Selecciona un titular para consultar su comparecencia
              </span>
              <small>
                {view === "orbit"
                  ? "VISTA ORBITAL INTERACTIVA"
                  : "DIRECTORIO DE DEPENDENCIAS"}
              </small>
            </div>
          </div>
          <aside
            className="inspector"
            aria-label="Metas de la dependencia seleccionada"
          >
            <div className="inspector-label">
              <span>DEPENDENCIA EN FOCO</span>
              <Target size={16} />
            </div>
            <div className="inspector-identity">
              <Portrait key={selected.id} person={selected} />
              <div>
                <span className="person-code">{selected.id}</span>
                <h2>{selected.name}</h2>
              </div>
            </div>
            <p className="holder">
              {selected.holder}
              <small>Titular · Catálogo proporcionado</small>
            </p>
            <button className="primary" onClick={() => setOpened(selected)}>
              Ver comparecencia
              <ArrowUpRight size={17} />
            </button>
            <div className="goals-heading">
              <h3>Metas asociadas</h3>
              <span>{getMetas(selected.id).length}</span>
            </div>
            <p className="goals-subtitle">
              Plan Estatal de Desarrollo 2021–2027
            </p>
            <Goals person={selected} />
          </aside>
        </div>
        <footer className="page-footer">
          <span>
            Comparecencias Querétaro <span> / </span> {YEAR}
          </span>
          <span>Catálogo parcial de metas · Consulta no oficial</span>
        </footer>
      </main>
      {opened && (
        <Detail
          key={opened.id}
          person={opened}
          onClose={() => setOpened(null)}
        />
      )}
    </div>
  );
}
