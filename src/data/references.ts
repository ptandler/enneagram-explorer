/*
 * References
 */

export interface Reference {
  author: string
  title: string
  year: number
  src: string
  ISBN: string
}

const references = {
  reifarth: {
    author: "W. Reifarth",
    title: "Das Enneagramm - Idee, Dynamik, Dimensionen",
    year: 2014,
    src: "https://www.buch7.de/store/product_details/106762821",
    ISBN: "978-3784119076",
  },
  riso_hudson: {
    author: "Don Richard Riso, Russ Hudson",
    title: "Die Weisheit des Enneagramms",
    year: 2000,
    src: "https://www.buch7.de/store/product_details/101950272",
    ebook: "https://www.buch7.de/store/product_details/1022975110",
    ISBN: "978-3442162871",
  },
  parkin: {
    author: "OM C. Parkin",
    title: "Intelligenz des Erwachens",
    year: 2011,
    src: "https://www.buch7.de/store/product_details/108872773",
    ISBN: "978-3936718195",
  },
  enneallionce: {
    author: "Enneallionce",
    title: "Schule für Innere Arbeit",
    src: "http://enneallionce.de",
  },
  riso: {
    author: "Don Richard Riso",
    title: "Die neun Typen der Persönlichkeit und das Enneagramm",
    year: 1989,
    citedBy: "reifarth",
  },
  boeschemeyer: {
    author: "Uwe Böschemeyer",
    title: "Vom Typ zum Original. Die neun Gesichter der Seele und das eigene Gesicht. Ein Praxisbuch zum Enneagramm",
    year: 1994,
    citedBy: "reifarth",
  },
  rohr_ebert: {
    author: "Richard Rohr, Andreas Ebert",
    title: "Das Enneagramm. Die 9 Gesichter der Seele",
    year: 1989,
    citedBy: "reifarth",
  },
  hurley_dobson: {
    author: "Kathleen V. Hurley, Theodore E. Dobson",
    title: "Wer bin ich? Persönlichkeitsfindung mit dem Enneagramm",
    year: 1993,
    citedBy: "reifarth",
  },
  vollmar: {
    author: "Klausbernd Vollmar",
    title: "Das Enneagramm. Praktische Lebensbewältigung mit Gurdjieffs Typenlehre",
    year: 1993,
    citedBy: "reifarth",
  },
  naranjo: {
    author: "Claudio Naranjo",
    title: "Erkenne dich selbst im Enneagramm. Die 9 Typen der Persönlichkeit",
    year: 1994,
    citedBy: "reifarth",
  },
  naranjo_en: {
    author: "Claudio Naranjo (Englisch)",
    title: "Character and Neurosis. An Integrative View",
    year: 1994,
    citedBy: "reifarth",
  },
  frings_keyes: {
    author: "Margaret Frings Keyes",
    title: "Transformiere deinen Schatten. Die Psychologie des Enneagramms",
    year: 1992,
    citedBy: "reifarth",
  },
  gallen_neidhardt: {
    author: "Marie-Anne Gallen, Hans Neidhardt",
    title: "Das Enneagramm unserer Beziehungen. Verwicklungen, Wechselwirkungen, Entwicklungen",
    year: 1994,
    citedBy: "reifarth",
  },
  jaxon_bear: {
    author: "Eli Jaxon-Bear",
    title: "Die neun Zahlen des Lebens. Das Enneagramm - Charakterfixierung und spirituelles Wachstum",
    year: 1992,
    citedBy: "reifarth",
  },
  palmer: {
    author: "Helen Palmer",
    title: "Das Enneagramm. Sich selbst und andere verstehen lernen",
    year: 1991,
    citedBy: "reifarth",
  },
}
export default references

export type References = typeof references

export type ReferenceKeys = keyof References

export type ReferenceContent<T> = {
  [P in ReferenceKeys]?: T
}
