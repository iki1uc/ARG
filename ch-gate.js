export const CH_GATE = {
  id: "CH-01",
  kind: "wurmloch-gate",
  nc: "OK",
  ghost: "neutral",
  error: null,
  help: "Tech+Art 5+5 Worte.",
  explain(event) {
    return {
      tech: "Instanz springt Kontext, Gate öffnet kurz.",
      art:  "Raum knickt, Zeit flackert, Sinn atmet neu.",
      earth: "Wie ein Bahnhof, der plötzlich ein neues Gleis bekommt.",
      anecdote: "BORG 8472 früher Meta-Lore, jetzt nur Story."
    };
  }
};

