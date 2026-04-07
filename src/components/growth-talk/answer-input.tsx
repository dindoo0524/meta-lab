"use client";

import { useState } from "react";

interface AnswerInputProps {
  onSubmit: (answer: string) => void;
  isLast: boolean;
}

export function AnswerInput({ onSubmit, isLast }: AnswerInputProps) {
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    if (answer.trim()) {
      onSubmit(answer.trim());
      setAnswer("");
    }
  };

  return (
    <div>
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="천천히 생각하고 적어보세요"
        className="mb-6 w-full resize-none rounded-xl border border-(--color-border) bg-(--color-card) px-4 py-3.5 text-base leading-relaxed placeholder:text-(--color-text-muted)/50 focus:border-(--color-accent) focus:outline-none"
        rows={4}
        autoFocus
      />

      <button
        onClick={handleSubmit}
        disabled={!answer.trim()}
        className="w-full rounded-full bg-(--color-accent) py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90 active:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {isLast ? "마무리하기" : "다음"}
      </button>
    </div>
  );
}
