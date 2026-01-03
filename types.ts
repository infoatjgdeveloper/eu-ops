
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  items: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
