import type { WorldConfig } from "./types";

const OFF_TOPIC_KEYWORDS = [
  "코드",
  "프로그래밍",
  "맛집",
  "주식",
  "투자",
  "날씨",
  "뉴스",
  "게임",
  "축구",
  "야구",
];

function isOffTopic(message: string, world: WorldConfig): boolean {
  // Simple keyword-based check for MVP
  if (world.id === "growth-talk") {
    return OFF_TOPIC_KEYWORDS.some((kw) => message.includes(kw));
  }
  return false;
}

const RESPONSES: Record<string, string[]> = {
  // 피로/지침
  tired: [
    "많이 지치셨군요. 오늘 에너지를 가장 많이 쓴 건 뭐였어요?",
    "쉬고 싶은 마음과 해야 할 것 사이에서 어떤 기분이 들었어요?",
    "지친 하루에도 여기 와서 이야기하는 것 자체가 대단한 거예요. 내일은 어디에 에너지를 아끼고 싶나요?",
  ],
  // 불안/걱정
  anxious: [
    "그 불안이 처음 올라온 순간을 기억할 수 있어요?",
    "그 감정에게 한 마디 한다면 뭐라고 하겠어요?",
    "불안을 알아차린 것만으로도 한 발짝 나아간 거예요. 지금 가장 필요한 건 뭘까요?",
  ],
  // 변화/고민
  change: [
    "뭔가 바꾸고 싶다는 마음이 든다는 건, 성장하고 있다는 신호예요.",
    "지금 가장 답답한 부분이 뭐예요? 구체적으로 말해줄 수 있어요?",
    "작은 것 하나만 내일 다르게 해본다면, 뭘 해보고 싶어요?",
  ],
  // 기본
  default: [
    "더 자세히 이야기해줄 수 있어요?",
    "그 순간 어떤 감정이었어요?",
    "오늘 하루에서 가장 기억에 남는 순간은 언제였어요?",
    "그 경험이 나에게 어떤 의미였을까요?",
    "내일의 나에게 한 마디 한다면?",
  ],
};

function pickResponse(message: string): string {
  const lower = message.toLowerCase();

  if (
    ["피곤", "지치", "힘들", "무기력", "졸려", "피로"].some((k) =>
      lower.includes(k)
    )
  ) {
    const arr = RESPONSES.tired;
    return arr[Math.floor(Math.random() * arr.length)];
  }

  if (
    ["불안", "걱정", "답답", "두렵", "무서", "초조"].some((k) =>
      lower.includes(k)
    )
  ) {
    const arr = RESPONSES.anxious;
    return arr[Math.floor(Math.random() * arr.length)];
  }

  if (
    ["바꾸", "변화", "고민", "모르겠", "어떻게"].some((k) =>
      lower.includes(k)
    )
  ) {
    const arr = RESPONSES.change;
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const arr = RESPONSES.default;
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateMockReply(
  message: string,
  world: WorldConfig
): string {
  if (isOffTopic(message, world)) {
    return world.offTopicMessage;
  }
  return pickResponse(message);
}
