# Conversation Flow — META Lab 실험

## 현재 구조 (채팅 기반)

모든 실험은 동일한 채팅 흐름을 따른다:

```
[META Lab 허브] → [실험 소개] → [채팅 세션]
```

### Step 1: 실험 소개 (`/experiments/{id}`)
- 실험 아이콘, 이름, 설명 표시
- "시작하기" CTA 버튼
- "META Lab으로 돌아가기" 링크

### Step 2: 채팅 세션 (`/experiments/{id}/session`)
- 처음에는 선질문(starter questions) 버튼 목록 표시
- 사용자가 선질문을 선택하거나 직접 입력
- AI가 실시간 스트리밍으로 응답
- 주제를 벗어나면 거부 메시지

### 기술 구현

- `ChatRoom` 컴포넌트가 `ExperimentConfig`를 받아 동작
- Claude API 스트리밍 → 실패 시 mock 응답 폴백
- 각 실험의 `systemPrompt`가 AI 행동을 제약
- `offTopicMessage`로 주제 벗어남 처리

## 이전 구조 (deprecated)

초기에는 3-step 고정 플로우(입력 → 3질문 → 요약 → 다음 행동)였으나,
자유 채팅 방식으로 피벗함.
