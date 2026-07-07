import { de } from "./locale/de";
import { en } from "./locale/en";

export const translations = {
  en: en,
  de: de,
} as const;

export type Language = keyof typeof translations;
