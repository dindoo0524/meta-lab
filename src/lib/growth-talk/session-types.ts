export enum SessionStep {
  INTRO = "INTRO",
  Q1 = "Q1",
  Q2 = "Q2",
  Q3 = "Q3",
  COMPLETE = "COMPLETE",
}

export interface Question {
  id: string;
  text: string;
}

export interface SessionResult {
  reflectionSummary: string;
  nextAction: string;
}

export interface SessionState {
  step: SessionStep;
  initialFeeling: string;
  answers: string[];
  questions: Question[];
  result: SessionResult | null;
}
