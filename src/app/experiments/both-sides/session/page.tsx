import { ChatRoom } from "@/components/chat/chat-room";
import { SessionHeader } from "@/components/chat/session-header";
import { bothSidesExperiment } from "@/content/experiments/both-sides";

export default function BothSidesSession() {
  return (
    <div className="flex flex-1 flex-col">
      <SessionHeader experiment={bothSidesExperiment} />
      <ChatRoom experiment={bothSidesExperiment} />
    </div>
  );
}
