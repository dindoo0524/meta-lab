import { ChatRoom } from "@/components/chat/chat-room";
import { SessionHeader } from "@/components/chat/session-header";
import { emotionTranslatorExperiment } from "@/content/experiments/emotion-translator";

export default function EmotionTranslatorSession() {
  return (
    <div className="flex flex-1 flex-col">
      <SessionHeader experiment={emotionTranslatorExperiment} />
      <ChatRoom experiment={emotionTranslatorExperiment} />
    </div>
  );
}
