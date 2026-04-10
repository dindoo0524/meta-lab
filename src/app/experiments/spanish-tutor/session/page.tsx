import { ChatRoom } from "@/components/chat/chat-room";
import { SessionHeader } from "@/components/chat/session-header";
import { spanishTutorExperiment } from "@/content/experiments/spanish-tutor";

export default function SpanishTutorSession() {
  return (
    <div className="flex flex-1 flex-col">
      <SessionHeader experiment={spanishTutorExperiment} />
      <ChatRoom experiment={spanishTutorExperiment} />
    </div>
  );
}
