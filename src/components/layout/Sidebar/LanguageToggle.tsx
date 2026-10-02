import { useContent, useLanguage } from '@/hooks/useLanguage';
import type { Lang } from '@/types/portfolio';

const LANGS: Lang[] = ['es', 'en'];

function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const { sidebar } = useContent();

  return (
    <div role="group" aria-label={sidebar.languageLabel} className="flex self-start rounded-full bg-white/[.14] p-[3px]">
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
          className={`rounded-full px-3 py-[5px] font-mono text-xs uppercase ${
            lang === code ? 'bg-white text-main' : 'text-white'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

export default LanguageToggle;
