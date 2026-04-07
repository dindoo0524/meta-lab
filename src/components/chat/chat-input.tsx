"use client";

import { useState, useRef, useEffect } from "react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [value]);

  const handleSend = () => {
    if (value.trim() && !disabled) {
      onSend(value.trim());
      setValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-end gap-2 border-t border-(--color-border) bg-(--color-bg) pt-3">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="메시지를 입력하세요"
        disabled={disabled}
        rows={1}
        className="flex-1 resize-none rounded-xl border border-(--color-border) bg-white/5 px-4 py-2.5 text-sm leading-relaxed text-(--color-text) placeholder:text-white/25 focus:border-(--color-accent)/50 focus:outline-none disabled:opacity-40"
      />
      <button
        onClick={handleSend}
        disabled={!value.trim() || disabled}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--color-accent) text-white transition-opacity hover:opacity-90 active:opacity-80 disabled:opacity-30"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>
    </div>
  );
}
