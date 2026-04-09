import { ChatRoom } from "@/components/chat/chat-room";
import { oneLineExperiment } from "@/content/experiments/one-line";
import Link from "next/link";

export default function OneLineSession() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-4 flex items-center gap-3">
        <Link
          href="/experiments/one-line"
          className="flex h-8 w-8 items-center justify-center rounded-full text-white/40 transition-colors hover:text-white/70"
        >
          ←
        </Link>
        <div>
          <p className="text-sm font-medium">{oneLineExperiment.name}</p>
          <p className="text-xs text-white/30">{oneLineExperiment.topic}</p>
        </div>
      </div>

      <ChatRoom experiment={oneLineExperiment} />
    </div>
  );
}
