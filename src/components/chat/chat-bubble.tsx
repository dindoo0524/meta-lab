"use client";

import { useState } from "react";
import type { ChatMessage } from "@/lib/chat/types";
import { FormatMessage } from "@/lib/chat/format-message";

interface ChatBubbleProps {
  message: ChatMessage;
}

export function ChatBubble({ message }: ChatBubbleProps) {
  const isUser = message.role === "user";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className={`group flex ${isUser ? "justify-end" : "justify-start"} animate-fade-in`}
    >
      <div className="relative max-w-[80%]">
        <div
          className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
            isUser
              ? "bg-(--color-accent) text-white rounded-br-md"
              : "bg-white/8 text-foreground rounded-bl-md"
          }`}
        >
          {isUser ? (
            message.content
          ) : (
            <FormatMessage content={message.content} />
          )}
        </div>

        {/* Copy button for AI messages */}
        {!isUser && (
          <button
            onClick={handleCopy}
            className="absolute -bottom-5 left-2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-white/30 hover:text-white/60"
          >
            {copied ? "복사됨 ✓" : "복사"}
          </button>
        )}
      </div>
    </div>
  );
}
