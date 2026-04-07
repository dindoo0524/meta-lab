# Repo Structure — META Lab

## 폴더 구조

```
src/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # META Lab 허브 (실험 목록)
│   ├── layout.tsx                # 루트 레이아웃 (다크 테마, 별 배경)
│   ├── globals.css               # 전역 스타일 (나이트 다크, 별 애니메이션)
│   ├── experiments/              # 실험별 라우트
│   │   ├── growth-talk/          # exp-001: 성장톡
│   │   │   ├── page.tsx          # 소개 페이지
│   │   │   └── session/page.tsx  # 채팅 세션
│   │   └── spanish-tutor/        # exp-002: 스페인어 튜터
│   │       ├── page.tsx          # 소개 페이지
│   │       └── session/page.tsx  # 채팅 세션
│   └── api/
│       └── chat/route.ts         # Claude API 스트리밍 엔드포인트
│
├── components/
│   └── chat/                     # 재사용 채팅 UI 컴포넌트
│       ├── chat-room.tsx         # 핵심: 메시지 목록 + AI 스트리밍 + 폴백
│       ├── chat-bubble.tsx       # 사용자/AI 메시지 버블
│       ├── chat-input.tsx        # 텍스트 입력 + 전송
│       └── starter-questions.tsx # 선질문 버튼 목록
│
├── content/
│   └── experiments/              # 실험 설정 (ExperimentConfig)
│       ├── index.ts              # 실험 레지스트리 (experiments Record)
│       ├── growth-talk.ts        # 성장톡 설정 + 시스템 프롬프트
│       └── spanish-tutor.ts      # 스페인어 튜터 설정 + 시스템 프롬프트
│
└── lib/
    └── chat/
        ├── types.ts              # ExperimentConfig, ChatMessage 등 타입
        └── mock-chat.ts          # API 실패 시 폴백 응답 엔진

docs/                             # 기획/설계 문서
```

## 새 실험 추가 가이드

### 1. ExperimentConfig 작성

`src/content/experiments/새실험.ts`:

```typescript
import type { ExperimentConfig } from "@/lib/chat/types";

export const 새실험Experiment: ExperimentConfig = {
  id: "새실험",            // 라우트와 동일
  name: "표시 이름",
  description: "짧은 설명",
  emoji: "🔬",
  topic: "허용 주제 범위",
  offTopicMessage: "주제 벗어났을 때 메시지",
  starterQuestions: [
    { id: "q-1", text: "선질문 1" },
    { id: "q-2", text: "선질문 2" },
  ],
  systemPrompt: "Claude에 전달될 시스템 프롬프트",
};
```

### 2. 레지스트리에 등록

`src/content/experiments/index.ts`에 추가.

### 3. 라우트 생성

```
src/app/experiments/새실험/
  page.tsx         # 소개 페이지 (기존 것 복사 후 수정)
  session/page.tsx # ChatRoom 렌더링 (experiment prop 전달)
```

### 4. 허브에 카드 추가

`src/app/page.tsx`의 Experiments 섹션에 Link 카드 추가.

### 5. (선택) mock 폴백 추가

`src/lib/chat/mock-chat.ts`에 새 실험용 응답 추가.
