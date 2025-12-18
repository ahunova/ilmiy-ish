
export interface ResearchProject {
  id: string;
  title: string;
  field: string;
  progress: number;
  status: 'draft' | 'ongoing' | 'completed';
  lastUpdated: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'article' | 'book' | 'methodology';
  author: string;
  url: string;
}

export interface Milestone {
  id: string;
  label: string;
  isCompleted: boolean;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
