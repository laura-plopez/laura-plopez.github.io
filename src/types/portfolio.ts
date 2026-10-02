export interface PersonalInfo {
  name: string;
  title: string;
  bio: string[];
}

export interface NavigationItem {
  id: string;
  label: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  navigation: NavigationItem[];
}
