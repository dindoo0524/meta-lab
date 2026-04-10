import { ChatRoom } from "@/components/chat/chat-room";
import { SessionHeader } from "@/components/chat/session-header";
import { fiveWhysExperiment } from "@/content/experiments/five-whys";

export default function FiveWhysSession() {
  return (
    <div className="flex flex-1 flex-col">
      <SessionHeader experiment={fiveWhysExperiment} />
      <ChatRoom experiment={fiveWhysExperiment} />
    </div>
  );
}
