import test from "node:test";
import assert from "node:assert/strict";
import { parseChat, loadText } from "./content.js";
import { getMetas, SECRETARIAS } from "./data.js";
test("parser mantiene respuestas multilínea, autores y texto no etiquetado", () => {
  const result = parseChat(
    "\uFEFFIntroducción\r\nPregunta [Homero Barrera Mcdonald]: ¿Qué avances hay?\r\nSegunda línea\r\nRespuesta [Titular]: Primer párrafo\r\n\r\nSegundo párrafo\r\nP: Otra pregunta\r\nR: Otra respuesta",
  );
  assert.equal(result.length, 5);
  assert.equal(result[0].type, "note");
  assert.equal(result[1].speaker, "Homero Barrera Mcdonald");
  assert.match(result[1].text, /Segunda línea/);
  assert.equal(result[2].text, "Primer párrafo\n\nSegundo párrafo");
  assert.equal(result[4].type, "answer");
});
test("siglas se asocian completas: ST no coincide con SEDESU", () => {
  assert.equal(getMetas("ST").length, 1);
  assert.equal(getMetas("S").length, 0);
  assert.equal(getMetas("SEDESOQ").length, 7);
  assert.equal(SECRETARIAS.length, 18);
});
test("archivos faltantes, HTML fallback, vacío, UTF-8 y errores HTTP", async (t) => {
  for (const [body, status, type, expected] of [
    ["", 404, "text/plain", "missing"],
    ["<!doctype html><html>", 200, "text/html", "missing"],
    ["  ", 200, "text/plain", "missing"],
    ["Salud pública", 200, "text/plain", "ready"],
  ]) {
    t.mock.method(
      globalThis,
      "fetch",
      async () =>
        new Response(body, { status, headers: { "content-type": type } }),
    );
    assert.equal((await loadText("resumen", "SEGOB")).status, expected);
    t.mock.restoreAll();
  }
  t.mock.method(
    globalThis,
    "fetch",
    async () => new Response("error", { status: 500 }),
  );
  await assert.rejects(loadText("pregyresp", "SEGOB"), /500/);
  t.mock.restoreAll();
  await assert.rejects(loadText("resumen", "../SECRET"), /Ruta/);
});
