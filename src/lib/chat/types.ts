export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

export interface StarterQuestion {
  id: string;
  text: string;
}

export type ChatStyle = "iris" | "milo" | "noah";

export type ConstraintLevel = "free" | "guided" | "strict";

export type ExperimentCategory = "감정" | "사고" | "학습" | "기록";

export interface ExperimentConfig {
  id: string;
  name: string;
  description: string;
  emoji: string;
  category: ExperimentCategory;
  topic: string;
  offTopicMessage: string;
  starterQuestions: StarterQuestion[];
  systemPrompt: string;
}
