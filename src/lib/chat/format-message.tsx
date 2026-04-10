import React from "react";

/**
 * Basic markdown-like formatting for AI messages.
 * Handles: **bold**, line breaks, bullet lists (- / •), numbered lists (1.)
 * No external library needed.
 */
export function FormatMessage({ content }: { content: string }) {
  const lines = content.split("\n");

  return (
    <>
      {lines.map((line, i) => {
        const trimmed = line.trim();

        // Bullet list item
        if (/^[-•]\s/.test(trimmed)) {
          const text = trimmed.replace(/^[-•]\s/, "");
          return (
            <div key={i} className="flex gap-1.5 pl-1">
              <span className="text-white/30 shrink-0">•</span>
              <span>{applyInlineFormatting(text)}</span>
            </div>
          );
        }

        // Numbered list item
        if (/^\d+\.\s/.test(trimmed)) {
          const match = trimmed.match(/^(\d+)\.\s(.*)$/);
          if (match) {
            return (
              <div key={i} className="flex gap-1.5 pl-1">
                <span className="text-white/30 shrink-0">{match[1]}.</span>
                <span>{applyInlineFormatting(match[2])}</span>
              </div>
            );
          }
        }

        // Empty line → spacer
        if (trimmed === "") {
          return <div key={i} className="h-2" />;
        }

        // Regular line
        return (
          <div key={i}>{applyInlineFormatting(trimmed)}</div>
        );
      })}
    </>
  );
}

function applyInlineFormatting(text: string): React.ReactNode {
  // Handle **bold** and 🗣️ emoji-prefixed lines
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}
