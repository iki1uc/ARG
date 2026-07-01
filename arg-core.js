import { ARG_DATA } from "./arg-data.js";

export function ARG(term, mode = "wiki") {
  const entry = ARG_DATA[term];
  if (!entry) return { term, mode, content: "Unbekannt." };

  if (mode === "wiki")        return { term, mode, content: entry.wiki };
  if (mode === "encyclopedia")return { term, mode, content: entry.encyclopedia };
  if (mode === "argmedia")    return { term, mode, content: entry.argmedia };

  return { term, mode, content: entry.core };
}

