import type { Question, SessionResult } from "@/lib/growth-talk/session-types";

interface QuestionSet {
  keywords: string[];
  questions: Question[];
  summaryTemplate: (feeling: string, answers: string[]) => SessionResult;
}

const questionSets: QuestionSet[] = [
  {
    // 피로/지침/힘듦 관련
    keywords: ["피곤", "힘들", "지치", "지침", "힘든", "피로", "무기력", "졸려"],
    questions: [
      { id: "q1-tired", text: "오늘 에너지를 가장 많이 쓴 건 뭐였나요?" },
      { id: "q2-tired", text: "그 순간, 멈추고 싶었던 적이 있었나요?" },
      { id: "q3-tired", text: "내일은 에너지를 어디에 아끼고 싶나요?" },
    ],
    summaryTemplate: (feeling, answers) => ({
      reflectionSummary: `오늘은 에너지가 많이 소진된 하루였네요. ${answers[0] ? `특히 "${answers[0].slice(0, 20)}..."에 많은 힘을 쏟으셨군요.` : ""} 지친 하루에도 돌아볼 수 있는 건, 내일을 더 잘 보내고 싶다는 뜻이에요.`,
      nextAction: "내일 하루 중 30분은 아무것도 하지 않는 시간을 만들어 보세요.",
    }),
  },
  {
    // 감정/기분 관련
    keywords: ["불안", "걱정", "답답", "화가", "짜증", "슬프", "우울", "속상"],
    questions: [
      { id: "q1-emotion", text: "그 감정이 처음 올라온 순간을 떠올릴 수 있나요?" },
      { id: "q2-emotion", text: "그 감정에게 한 마디 한다면 뭐라고 하겠어요?" },
      { id: "q3-emotion", text: "오늘을 다시 산다면, 어떤 순간을 다르게 보내겠어요?" },
    ],
    summaryTemplate: (feeling, answers) => ({
      reflectionSummary: `오늘 마음이 많이 흔들렸던 하루였네요. 감정을 알아차리고 이름 붙이는 것만으로도 한 걸음 나아간 거예요. ${answers[1] ? `"${answers[1].slice(0, 20)}..." — 이 말에 오늘의 진심이 담겨 있네요.` : ""}`,
      nextAction: "내일 아침, 하루를 시작하기 전에 '오늘 나는 어떤 하루를 보내고 싶은지' 한 문장으로 적어보세요.",
    }),
  },
  {
    // 기본/일반 (매칭 안 될 때 사용)
    keywords: [],
    questions: [
      { id: "q1-default", text: "오늘 가장 기억에 남는 순간은 언제였나요?" },
      { id: "q2-default", text: "오늘 하루에서 의외였던 건 뭐였나요?" },
      { id: "q3-default", text: "내일의 나에게 한 마디 한다면?" },
    ],
    summaryTemplate: (feeling, answers) => ({
      reflectionSummary: `하루를 돌아보는 시간을 가졌네요. ${answers[0] ? `"${answers[0].slice(0, 20)}..." — 이 순간이 오늘의 핵심이었군요.` : "오늘 하루도 나름의 의미가 있었을 거예요."} 매일 조금씩 돌아보는 것, 그 자체가 성장이에요.`,
      nextAction: "내일 하루가 끝날 때, '오늘 잘한 한 가지'를 스스로에게 말해주세요.",
    }),
  },
];

export function getQuestionsForFeeling(feeling: string): Question[] {
  const matched = questionSets.find((set) =>
    set.keywords.some((keyword) => feeling.includes(keyword))
  );
  return (matched ?? questionSets[questionSets.length - 1]).questions;
}

export function generateResult(
  feeling: string,
  answers: string[]
): SessionResult {
  const matched = questionSets.find((set) =>
    set.keywords.some((keyword) => feeling.includes(keyword))
  );
  const set = matched ?? questionSets[questionSets.length - 1];
  return set.summaryTemplate(feeling, answers);
}
