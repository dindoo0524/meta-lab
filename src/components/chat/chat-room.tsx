"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import type { ChatMessage, WorldConfig } from "@/lib/chat/types";
import { generateMockReply } from "@/lib/chat/mock-chat";
import { ChatBubble } from "./chat-bubble";
import { ChatInput } from "./chat-input";
import { StarterQuestions } from "./starter-questions";

interface ChatRoomProps {
  world: WorldConfig;
}

let messageCounter = 0;
function createId() {
  return `msg-${++messageCounter}-${Date.now()}`;
}

export function ChatRoom({ world }: ChatRoomProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const sendMessage = useCallback(
    (content: string) => {
      const userMsg: ChatMessage = {
        id: createId(),
        role: "user",
        content,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setIsTyping(true);

      // Simulate AI thinking delay
      setTimeout(() => {
        const reply = generateMockReply(content, world);
        const assistantMsg: ChatMessage = {
          id: createId(),
          role: "assistant",
          content: reply,
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, assistantMsg]);
        setIsTyping(false);
      }, 800 + Math.random() * 700);
    },
    [world]
  );

  const hasMessages = messages.length > 0;

  return (
    <div className="flex flex-1 flex-col">
      {/* Messages area */}
      <div ref={scrollRef} className="flex flex-1 flex-col overflow-y-auto">
        {!hasMessages ? (
          <StarterQuestions
            questions={world.starterQuestions}
            onSelect={sendMessage}
          />
        ) : (
          <div className="flex flex-col gap-3 pb-4">
            {messages.map((msg) => (
              <ChatBubble key={msg.id} message={msg} />
            ))}
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="rounded-2xl rounded-bl-md bg-white/8 px-4 py-3 text-sm text-white/40">
                  <span className="inline-flex gap-1">
                    <span className="animate-bounce" style={{ animationDelay: "0ms" }}>·</span>
                    <span className="animate-bounce" style={{ animationDelay: "150ms" }}>·</span>
                    <span className="animate-bounce" style={{ animationDelay: "300ms" }}>·</span>
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input */}
      <ChatInput onSend={sendMessage} disabled={isTyping} />
    </div>
  );
}
