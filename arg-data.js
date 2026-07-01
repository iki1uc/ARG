export const ARG_DATA = {
  "Instanz": {
    ist: "Eine Instanz ist aktuell ein ROOT‑Knoten mit ID, GATE, SAT, ANKER.",
    soll: "Eine Instanz soll zukünftig EVO‑fähig sein und Daten live bereitstellen.",
    evo: "Instanz trägt EVO, wenn ARG freigegeben ist und MIR/RESPO stabil laufen.",

    core: "ROOT‑Knoten mit ID, GATE, SAT, ANKER.",

    wiki: "Kurz: Einheit mit ROOT‑Daten.",
    
    encyclopedia: `
Definition:
Eine Instanz ist ein ROOT‑Objekt bestehend aus ID, GATE, SAT und ANKER.

Funktion:
Sie dient als Knotenpunkt für MIR, RESPO, ARG und DIR.

Beispiel:
Instanz 'DIR‑01' verarbeitet Impulse über MIR → RESPO → ARG → DIR.
    `,

    argmedia: {
      story: "Stell dir eine Station mit eigenem Gate vor, die Impulse empfängt und Entscheidungen trifft.",
      tags: ["root", "gate", "sat", "anker"],
      resume: "Instanz ist der Ursprungspunkt jeder Entscheidung."
    }
  }
};
ARG_DATA["CH_GATE"] = {
  ist: "Wurmloch-Gate für Ereigniswechsel.",
  soll: "Kurz, klar, Tech+Art 5+5 Worte.",
  evo: "Trägt EVO, wenn NC=OK und Ghost neutral.",
  wiki: "Kurz: Ereignis-Gate.",
  encyclopedia: "CH_GATE erklärt Ereignisse mit Tech+Art-Frame...",
  argmedia: {
    story: "Wenn ein Gate flackert und die Welt kurz anders atmet...",
    tags: ["wurmloch", "gate", "ereignis"],
    resume: "CH_GATE macht komplexe Ereignisse kurz erklärbar."
  }
};
