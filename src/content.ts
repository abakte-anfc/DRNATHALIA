import {siteConfig as c,type Text,type Language} from './site.config';
import {localized} from './language.mjs';
export const text=(value:Text,lang:Language)=>localized(value,lang,c.languages.default);
