import { useSyncExternalStore } from 'react';
import { TABS } from '@/constants/portfolio';
import type { TabId } from '@/types/portfolio';

interface Route {
  tab: TabId;
  param?: string;
}

const subscribe = (onChange: () => void) => {
  window.addEventListener('hashchange', onChange);
  return () => window.removeEventListener('hashchange', onChange);
};

const getHash = () => window.location.hash;

const isTab = (value: string): value is TabId => TABS.includes(value as TabId);

export const routeHref = (tab: TabId, param?: string): string =>
  tab === 'home' ? '#/' : `#/${tab}${param ? `/${param}` : ''}`;

export function useHashRoute(): Route {
  const hash = useSyncExternalStore(subscribe, getHash);
  const [segment = '', param] = hash.replace(/^#\/?/, '').split('/');
  return isTab(segment) ? { tab: segment, param } : { tab: 'home' };
}
