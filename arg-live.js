import { ARG } from "./arg-core.js";

export function TMP_LIVE(term) {
  return {
    wiki: ARG(term, "wiki", true),
    encyclopedia: ARG(term, "encyclopedia", true),
    argmedia: ARG(term, "argmedia", true),
    ist: ARG(term, "ist", true),
    soll: ARG(term, "soll", true),
    evo: ARG(term, "evo", true)
  };
}

