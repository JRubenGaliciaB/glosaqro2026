/** Pregunta [Nombre]: texto / Respuesta [Nombre]: texto. Preserva texto sin etiquetas. */
export function parseChat(text) {
  const messages = [];
  for (const line of text
    .replace(/^\uFEFF/, "")
    .replace(/\r\n?/g, "\n")
    .split("\n")) {
    const match = line.match(
      /^\s*(Pregunta|Respuesta|P|R)(?:\s*\[([^\]]+)\])?\s*:\s*(.*)$/i,
    );
    if (match)
      messages.push({
        type: /^(pregunta|p)$/i.test(match[1]) ? "question" : "answer",
        speaker: match[2]?.trim() || "",
        text: match[3],
      });
    else if (messages.length) messages[messages.length - 1].text += "\n" + line;
    else if (line.trim())
      messages.push({ type: "note", speaker: "", text: line });
  }
  return messages
    .map((m) => ({ ...m, text: m.text.trim() }))
    .filter((m) => m.text);
}
export async function loadText(folder, id, signal) {
  if (!["resumen", "pregyresp"].includes(folder) || !/^[A-Z]+$/.test(id))
    throw new Error("Ruta no válida");
  const timeout = AbortSignal.timeout(15000);
  const requestSignal = signal ? AbortSignal.any([signal, timeout]) : timeout;
  const response = await fetch(`/${folder}/${id}.txt`, { signal: requestSignal });
  if (response.status === 404) return { status: "missing", text: "" };
  if (!response.ok) throw new Error(`Error de lectura (${response.status})`);
  const text = await response.text();
  // Algunos servidores devuelven index.html con código 200 para recursos inexistentes.
  if (
    /text\/html/i.test(response.headers.get("content-type") || "") ||
    /^\s*(?:<!doctype html|<html)/i.test(text)
  )
    return { status: "missing", text: "" };
  return { status: text.trim() ? "ready" : "missing", text: text.trim() };
}
