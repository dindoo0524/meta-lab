import type { Question, SessionResult } from "./session-types";
import {
  getQuestionsForFeeling,
  generateResult,
} from "@/content/growth-talk/starter-prompts";

export function getMockQuestions(feeling: string): Question[] {
  return getQuestionsForFeeling(feeling);
}

export function getMockResult(
  feeling: string,
  answers: string[]
): SessionResult {
  return generateResult(feeling, answers);
}
