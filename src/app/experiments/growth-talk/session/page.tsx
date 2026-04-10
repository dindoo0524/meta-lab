import { ChatRoom } from "@/components/chat/chat-room";
import { SessionHeader } from "@/components/chat/session-header";
import { growthTalkExperiment } from "@/content/experiments/growth-talk";

export default function GrowthTalkSession() {
  return (
    <div className="flex flex-1 flex-col">
      <SessionHeader experiment={growthTalkExperiment} />
      <ChatRoom experiment={growthTalkExperiment} />
    </div>
  );
}
