import { ChatRoom } from "@/components/chat/chat-room";
import { SessionHeader } from "@/components/chat/session-header";
import { oneLineExperiment } from "@/content/experiments/one-line";

export default function OneLineSession() {
  return (
    <div className="flex flex-1 flex-col">
      <SessionHeader experiment={oneLineExperiment} />
      <ChatRoom experiment={oneLineExperiment} />
    </div>
  );
}
