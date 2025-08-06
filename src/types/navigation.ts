export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface NavigationItemProps {
  item: NavigationItem;
  isActive: boolean;
  onClick: () => void;
}