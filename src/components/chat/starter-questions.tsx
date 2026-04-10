"use client";

import type { StarterQuestion } from "@/lib/chat/types";

interface StarterQuestionsProps {
  questions: StarterQuestion[];
  onSelect: (text: string) => void;
  daily?: boolean;
}

function getDailyQuestions(
  questions: StarterQuestion[],
  count: number = 4
): StarterQuestion[] {
  if (questions.length <= count) return questions;
  const dayIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  const start = (dayIndex % Math.ceil(questions.length / count)) * count;
  return questions.slice(start, start + count).length >= count
    ? questions.slice(start, start + count)
    : questions.slice(0, count);
}

export function StarterQuestions({
  questions,
  onSelect,
  daily = false,
}: StarterQuestionsProps) {
  const displayQuestions = daily ? getDailyQuestions(questions) : questions;

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <p className="mb-6 text-sm text-white/40">무엇이든 이야기해 보세요</p>
      <div className="flex w-full flex-col gap-2">
        {displayQuestions.map((q) => (
          <button
            key={q.id}
            onClick={() => onSelect(q.text)}
            className="w-full rounded-xl border border-(--color-border) bg-white/4 px-4 py-3 text-left text-sm text-white/60 transition-all hover:border-(--color-accent)/30 hover:bg-(--color-accent-dim) hover:text-white/80"
          >
            {q.text}
          </button>
        ))}
      </div>
    </div>
  );
}
