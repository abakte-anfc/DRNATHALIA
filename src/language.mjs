/** @param {string|null} saved @param {readonly string[]} languages @param {readonly string[]} available @param {string} fallback */
export function resolveLanguage(saved,languages=[],available=['es','pt'],fallback='es') {
 const enabled=available.length?available:[fallback];
 if(saved && enabled.includes(saved))return saved;
 for(const value of languages){const code=value.toLowerCase().split('-')[0];if(enabled.includes(code))return code}
 return enabled.includes(fallback)?fallback:enabled[0];
}
/** @param {Partial<Record<string,string>>} value @param {string} lang @param {string} fallback */
export function localized(value,lang,fallback){return value[lang]?.trim() || value[fallback]?.trim() || Object.values(value).find(v=>v?.trim()) || ''}
/** @param {string} number @param {string} message */
export function whatsappUrl(number,message){const digits=number.replace(/[^0-9]/g,'');return /^[1-9]\d{7,14}$/.test(digits)?`https://wa.me/${digits}?text=${encodeURIComponent(message)}`:null}
/** @param {boolean} enabled @param {readonly unknown[]} items */
export function sectionVisible(enabled,items){return enabled && items.length>0}
