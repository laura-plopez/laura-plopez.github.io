import { useContent, useLanguage } from '@/hooks/useLanguage';
import type { Lang } from '@/types/portfolio';

const LANGS: Lang[] = ['es', 'en'];

function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const { sidebar } = useContent();

  return (
    <div
      role="group"
      aria-label={sidebar.languageLabel}
      className="absolute right-[18px] top-[22px] z-[6] flex items-center gap-0.5 text-[13px] lg:fixed lg:right-8 lg:top-[26px]"
    >
      {LANGS.map((code, index) => (
        <span key={code} className="flex items-center gap-0.5">
          {index > 0 && <span aria-hidden="true" className="text-ink-faint">/</span>}
          <button
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            className={`rounded-md px-1.5 py-1 uppercase transition-colors duration-200 hover:text-ink ${
              lang === code ? 'font-bold text-ink' : 'font-medium text-ink-muted'
            }`}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  );
}

export default LanguageToggle;
