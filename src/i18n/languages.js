// src/i18n/languages.js
// The 35 supported languages. English is the default and fallback.
import en from '../locales/en.json';
import nb from '../locales/nb.json';
import sv from '../locales/sv.json';
import da from '../locales/da.json';
import fi from '../locales/fi.json';
import is from '../locales/is.json';
import de from '../locales/de.json';
import nl from '../locales/nl.json';
import fr from '../locales/fr.json';
import es from '../locales/es.json';
import pt from '../locales/pt.json';
import it from '../locales/it.json';
import pl from '../locales/pl.json';
import cs from '../locales/cs.json';
import sk from '../locales/sk.json';
import hu from '../locales/hu.json';
import ro from '../locales/ro.json';
import bg from '../locales/bg.json';
import el from '../locales/el.json';
import hr from '../locales/hr.json';
import sl from '../locales/sl.json';
import et from '../locales/et.json';
import lv from '../locales/lv.json';
import lt from '../locales/lt.json';
import uk from '../locales/uk.json';
import ru from '../locales/ru.json';
import tr from '../locales/tr.json';
import ar from '../locales/ar.json';
import he from '../locales/he.json';
import hi from '../locales/hi.json';
import zh from '../locales/zh.json';
import ja from '../locales/ja.json';
import ko from '../locales/ko.json';
import th from '../locales/th.json';
import vi from '../locales/vi.json';

export const LANGUAGES = [
  { code: 'en', name: "English", english: "English" },
  { code: 'nb', name: "Norsk bokmål", english: "Norwegian" },
  { code: 'sv', name: "Svenska", english: "Swedish" },
  { code: 'da', name: "Dansk", english: "Danish" },
  { code: 'fi', name: "Suomi", english: "Finnish" },
  { code: 'is', name: "Íslenska", english: "Icelandic" },
  { code: 'de', name: "Deutsch", english: "German" },
  { code: 'nl', name: "Nederlands", english: "Dutch" },
  { code: 'fr', name: "Français", english: "French" },
  { code: 'es', name: "Español", english: "Spanish" },
  { code: 'pt', name: "Português", english: "Portuguese" },
  { code: 'it', name: "Italiano", english: "Italian" },
  { code: 'pl', name: "Polski", english: "Polish" },
  { code: 'cs', name: "Čeština", english: "Czech" },
  { code: 'sk', name: "Slovenčina", english: "Slovak" },
  { code: 'hu', name: "Magyar", english: "Hungarian" },
  { code: 'ro', name: "Română", english: "Romanian" },
  { code: 'bg', name: "Български", english: "Bulgarian" },
  { code: 'el', name: "Ελληνικά", english: "Greek" },
  { code: 'hr', name: "Hrvatski", english: "Croatian" },
  { code: 'sl', name: "Slovenščina", english: "Slovenian" },
  { code: 'et', name: "Eesti", english: "Estonian" },
  { code: 'lv', name: "Latviešu", english: "Latvian" },
  { code: 'lt', name: "Lietuvių", english: "Lithuanian" },
  { code: 'uk', name: "Українська", english: "Ukrainian" },
  { code: 'ru', name: "Русский", english: "Russian" },
  { code: 'tr', name: "Türkçe", english: "Turkish" },
  { code: 'ar', name: "العربية", english: "Arabic" },
  { code: 'he', name: "עברית", english: "Hebrew" },
  { code: 'hi', name: "हिन्दी", english: "Hindi" },
  { code: 'zh', name: "简体中文", english: "Chinese (Simplified)" },
  { code: 'ja', name: "日本語", english: "Japanese" },
  { code: 'ko', name: "한국어", english: "Korean" },
  { code: 'th', name: "ไทย", english: "Thai" },
  { code: 'vi', name: "Tiếng Việt", english: "Vietnamese" },
];

export const resources = { en: { translation: en }, nb: { translation: nb }, sv: { translation: sv }, da: { translation: da }, fi: { translation: fi }, is: { translation: is }, de: { translation: de }, nl: { translation: nl }, fr: { translation: fr }, es: { translation: es }, pt: { translation: pt }, it: { translation: it }, pl: { translation: pl }, cs: { translation: cs }, sk: { translation: sk }, hu: { translation: hu }, ro: { translation: ro }, bg: { translation: bg }, el: { translation: el }, hr: { translation: hr }, sl: { translation: sl }, et: { translation: et }, lv: { translation: lv }, lt: { translation: lt }, uk: { translation: uk }, ru: { translation: ru }, tr: { translation: tr }, ar: { translation: ar }, he: { translation: he }, hi: { translation: hi }, zh: { translation: zh }, ja: { translation: ja }, ko: { translation: ko }, th: { translation: th }, vi: { translation: vi } };
