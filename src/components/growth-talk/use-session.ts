"use client";

import { useState, useCallback } from "react";
import { SessionStep } from "@/lib/growth-talk/session-types";
import type { SessionState } from "@/lib/growth-talk/session-types";
import {
  createInitialState,
  getNextStep,
  getQuestionIndex,
  isSessionComplete,
} from "@/lib/growth-talk/session-engine";
import { getMockQuestions, getMockResult } from "@/lib/growth-talk/mock-session";

export function useSession() {
  const [state, setState] = useState<SessionState>(createInitialState);

  const startSession = useCallback((feeling: string) => {
    const questions = getMockQuestions(feeling);
    setState((prev) => ({
      ...prev,
      initialFeeling: feeling,
      questions,
      step: getNextStep(SessionStep.INTRO),
    }));
  }, []);

  const answerQuestion = useCallback((answer: string) => {
    setState((prev) => {
      const newAnswers = [...prev.answers, answer];
      const nextStep = getNextStep(prev.step);

      if (isSessionComplete(nextStep)) {
        const result = getMockResult(prev.initialFeeling, newAnswers);

        // Save to sessionStorage for result page
        if (typeof window !== "undefined") {
          sessionStorage.setItem(
            "growth-talk-result",
            JSON.stringify({
              initialFeeling: prev.initialFeeling,
              answers: newAnswers,
              questions: prev.questions,
              result,
            })
          );
        }

        return { ...prev, answers: newAnswers, step: nextStep, result };
      }

      return { ...prev, answers: newAnswers, step: nextStep };
    });
  }, []);

  const currentQuestionIndex = getQuestionIndex(state.step);
  const currentQuestion =
    currentQuestionIndex >= 0
      ? state.questions[currentQuestionIndex]
      : undefined;

  return {
    state,
    startSession,
    answerQuestion,
    currentQuestion,
    currentQuestionIndex,
    isComplete: isSessionComplete(state.step),
  };
}
