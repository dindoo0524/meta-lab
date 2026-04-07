import { SessionStep } from "./session-types";
import type { SessionState } from "./session-types";

const STEP_ORDER: SessionStep[] = [
  SessionStep.INTRO,
  SessionStep.Q1,
  SessionStep.Q2,
  SessionStep.Q3,
  SessionStep.COMPLETE,
];

export function getNextStep(currentStep: SessionStep): SessionStep {
  const currentIndex = STEP_ORDER.indexOf(currentStep);
  if (currentIndex === -1 || currentIndex >= STEP_ORDER.length - 1) {
    return SessionStep.COMPLETE;
  }
  return STEP_ORDER[currentIndex + 1];
}

export function isSessionComplete(step: SessionStep): boolean {
  return step === SessionStep.COMPLETE;
}

export function getQuestionIndex(step: SessionStep): number {
  switch (step) {
    case SessionStep.Q1:
      return 0;
    case SessionStep.Q2:
      return 1;
    case SessionStep.Q3:
      return 2;
    default:
      return -1;
  }
}

export function createInitialState(): SessionState {
  return {
    step: SessionStep.INTRO,
    initialFeeling: "",
    answers: [],
    questions: [],
    result: null,
  };
}
