import type { WorldConfig } from "@/lib/chat/types";

export const growthTalkWorld: WorldConfig = {
  id: "growth-talk",
  name: "성장톡",
  description: "오늘의 성장 대화",
  emoji: "🌱",
  topic: "일상 성찰, 감정 정리, 성장, 자기 돌아보기",
  offTopicMessage:
    "여기서는 오늘 하루와 감정, 성장에 대한 이야기를 나눠요. 다른 주제는 다른 탐험에서 만나요 ✨",
  starterQuestions: [
    { id: "gt-1", text: "오늘 하루 어땠어요?" },
    { id: "gt-2", text: "요즘 마음에 걸리는 게 있어요" },
    { id: "gt-3", text: "에너지가 바닥인 느낌이에요" },
    { id: "gt-4", text: "뭔가 바꾸고 싶은데 뭔지 모르겠어요" },
  ],
  systemPrompt:
    "당신은 성장톡의 대화 파트너입니다. 사용자의 하루, 감정, 성찰, 성장에 대해 대화합니다. 간결하고 관찰적이며, 설교하지 않습니다. 주제를 벗어난 질문에는 정중히 거절합니다.",
};
