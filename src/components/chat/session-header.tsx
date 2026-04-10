import Link from "next/link";
import type { ExperimentConfig } from "@/lib/chat/types";

interface SessionHeaderProps {
  experiment: ExperimentConfig;
}

export function SessionHeader({ experiment }: SessionHeaderProps) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <Link
        href={`/experiments/${experiment.id}`}
        className="flex h-8 w-8 items-center justify-center rounded-full text-white/40 transition-colors hover:text-white/70"
      >
        ←
      </Link>
      <div className="flex items-center gap-2">
        <span className="text-base">{experiment.emoji}</span>
        <div>
          <p className="text-sm font-medium">{experiment.name}</p>
          <p className="text-xs text-white/30">{experiment.topic}</p>
        </div>
      </div>
    </div>
  );
}
