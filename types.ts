export interface PoemResponse {
  title: string;
  content: string;
  imageUrl?: string;
  originalTopic?: string;
}

export interface InputSectionProps {
  onGenerate: (topic: string) => void;
}

export interface PoemDisplayProps {
  title: string;
  content: string;
  imageUrl?: string;
  isImageLoading?: boolean;
  originalTopic?: string;
  onReset: () => void;
}
