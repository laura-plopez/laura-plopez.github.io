import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import type { Lang } from '@/types/portfolio';

const STORAGE_KEY = 'lang';
const DEFAULT_LANG: Lang = 'es';

function readStoredLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'es' || stored === 'en' ? stored : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
}

interface LanguageProviderProps {
  children: ReactNode;
}

function LanguageProvider({ children }: LanguageProviderProps) {
  const [lang, setLang] = useState<Lang>(readStoredLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Without storage the choice still applies for this visit.
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
