export interface PersonalInfo {
  name: string;
  title: string;
  birthYear: number;
  location: string;
  education: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  navigation: NavigationItem[];
}