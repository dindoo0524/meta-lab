"use client";

import { useState } from "react";

interface SessionIntroProps {
  onStart: (feeling: string) => void;
}

export function SessionIntro({ onStart }: SessionIntroProps) {
  const [feeling, setFeeling] = useState("");

  const handleSubmit = () => {
    if (feeling.trim()) {
      onStart(feeling.trim());
    }
  };

  return (
    <div className="flex flex-1 flex-col justify-center">
      <p className="mb-2 text-sm text-(--color-text-muted)">오늘의 성장톡</p>
      <h2 className="mb-8 text-2xl font-semibold leading-snug">
        오늘 하루
        <br />
        어떠셨나요?
      </h2>

      <textarea
        value={feeling}
        onChange={(e) => setFeeling(e.target.value)}
        placeholder="오늘 있었던 일, 느낀 감정, 떠오르는 생각을 자유롭게 적어주세요"
        className="mb-6 w-full resize-none rounded-xl border border-(--color-border) bg-(--color-card) px-4 py-3.5 text-base leading-relaxed placeholder:text-(--color-text-muted)/50 focus:border-(--color-accent) focus:outline-none"
        rows={5}
        autoFocus
      />

      <button
        onClick={handleSubmit}
        disabled={!feeling.trim()}
        className="w-full rounded-full bg-(--color-accent) py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90 active:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        시작하기
      </button>
    </div>
  );
}
