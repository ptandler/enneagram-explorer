/*
 * names of the 3 centers by various authors
 *
 * reference: Reifarth, p. 38
 */

import { ReferenceContent, ReferenceKeys } from "@/data/references"

export const defaultCenter: ReferenceKeys = "rohr_ebert"

export interface CenterInfo {
  heart: string
  head: string
  gut: string
}
export type Centers = keyof CenterInfo
export const centerIds: Centers[] = ["heart", "head", "gut"]

const centers: ReferenceContent<CenterInfo> = {
  rohr_ebert: {
    heart: "Herzzentrum",
    head: "Kopfzentrum",
    gut: "Bauchzentrum",
  },
  riso_hudson: {
    heart: "Gefühlstriade",
    head: "Handlungstriade",
    gut: "Beziehungstriade",
  },
  hurley_dobson: {
    heart: "Affektives Zentrum",
    head: "Theoretisches Zentrum",
    gut: "Effektives Zentrum",
  },
  vollmar: {
    heart: "Emotionales Zentrum",
    head: "Bewußtseinszentrum",
    gut: "Bewegungszentrum",
  },
  naranjo: {
    heart: "Hysteroide Gruppe",
    head: "Schizoide Gruppe",
    gut: "Epileptoide Gruppe",
  },
  frings_keyes: {
    heart: "Die Programme: Unterwerfung / Depression",
    head: "Die Programme: Angst und Flucht",
    gut: "Die Programme: Wut und Kampf",
  },
  enneallionce: {
    heart: "Erschaffende Kraft; EITELKEIT: «Hin»-Bewegung",
    head: "Bewahrende Kraft; ANGST: «Weg»-Bewegung",
    gut: "Zerstörende Kraft; ZORN: «Gegen»-Bewegung",
  },
}
export default centers
