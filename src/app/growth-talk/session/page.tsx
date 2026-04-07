import { ChatRoom } from "@/components/chat/chat-room";
import { growthTalkWorld } from "@/content/worlds/growth-talk";
import Link from "next/link";

export default function GrowthTalkSession() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <Link
          href="/growth-talk"
          className="flex h-8 w-8 items-center justify-center rounded-full text-white/40 transition-colors hover:text-white/70"
        >
          ←
        </Link>
        <div>
          <p className="text-sm font-medium">{growthTalkWorld.name}</p>
          <p className="text-xs text-white/30">{growthTalkWorld.topic}</p>
        </div>
      </div>

      {/* Chat */}
      <ChatRoom world={growthTalkWorld} />
    </div>
  );
}
