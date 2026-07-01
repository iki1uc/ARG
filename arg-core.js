import { ARG_DATA } from "./arg-data.js";

export function ARG(term, mode = "wiki", evo = true) {
  const entry = ARG_DATA[term];
  if (!entry) return { term, mode, content: "Unbekannt.", evo };

  let content;

  if (mode === "wiki")         content = entry.wiki;
  else if (mode === "encyclopedia") content = entry.encyclopedia;
  else if (mode === "argmedia")     content = entry.argmedia;
  else if (mode === "ist")          content = entry.ist;
  else if (mode === "soll")         content = entry.soll;
  else if (mode === "evo")          content = entry.evo;
  else                              content = entry.core;

  return {
    term,
    mode,
    evo,
    content
  };
}
