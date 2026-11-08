export interface Profile {
  name: string;
  shortName: string;
  alias: string;
  role: string;
  location: string;
  university: string;
  semester: string;
  email: string;
  socials: { label: string; href: string; handle: string }[];
  focus: string[];
}

export interface Project {
  title: string;
  stack: string[];
  description: string;
  featured?: boolean;
  year: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface RecognitionItem {
  title: string;
  detail: string;
}
