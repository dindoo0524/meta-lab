import type { ChatMessage } from "@/lib/chat/types";

interface ChatBubbleProps {
  message: ChatMessage;
}

export function ChatBubble({ message }: ChatBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} animate-fade-in`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? "bg-(--color-accent) text-white rounded-br-md"
            : "bg-white/8 text-(--color-text) rounded-bl-md"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
