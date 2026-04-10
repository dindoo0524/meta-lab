<picture>
  <source media="(prefers-color-scheme: dark)" srcset="public/images/meta_lab_dark.png">
  <source media="(prefers-color-scheme: light)" srcset="public/images/meta_lab_light.png">
  <img alt="META Lab" src="public/images/meta_lab_dark.png" width="100%">
</picture>

# META Lab

> 제약된 AI로 세상의 지식을 탐구하는 실험 저장소

## 이것은 무엇인가

META Lab은 **AI UX 실험 저장소**다.
범용 AI는 산만하다. 여기서는 주제와 구조에 제약을 걸어 집중된 학습 경험을 실험한다.

각 실험(experiment)은 독립적인 AI 대화 환경이다:
- 주제가 제한되어 있고
- 선질문(starter questions)으로 대화를 유도하며
- 주제를 벗어나면 거부한다

이것은 완성된 제품이 아니라 **프로토타입 실험의 모음**이다.

## 현재 실험 목록

| ID | 이름 | 카테고리 | 설명 |
|----|------|---------|------|
| exp-001 | 성장톡 | 감정 | 일상 성찰과 감정 정리를 돕는 대화 |
| exp-002 | 스페인어 튜터 | 학습 | 칸미고 스타일 스페인어 학습 대화 |
| exp-003 | 하루 한 줄 | 기록 | 오늘을 한 문장으로, AI는 질문 하나만 |
| exp-006 | 역질문 | 사고 | "왜?"를 5단계까지 파고드는 사고 훈련 |
| exp-007 | 감정 번역기 | 감정 | 감정에 더 정확한 이름을 붙이는 실험 |
| exp-008 | 양면 사고 | 사고 | 찬성/반대 양면 분석, 편들기 금지 |

## 기술 스택

- **Next.js 16** (App Router)
- **TypeScript**
- **TailwindCSS v4**
- **@anthropic-ai/sdk** (Claude API 스트리밍)
- **pnpm**

## 로컬 실행

```bash
pnpm install
pnpm dev
```

`.env.local`에 `ANTHROPIC_API_KEY` 설정 필요. 없으면 mock 응답으로 폴백.

## 주요 기능

- **캐릭터 스타일 선택** — Iris(차분), Milo(따뜻), Noah(직설) 3가지 AI 성격
- **제약 수준 선택** — Free / Guided / Strict 3단계 응답 제약
- **실시간 AI 스트리밍** — Claude API 연동, 실패 시 mock 폴백
- **새 대화 초기화** — 원클릭 대화 리셋
- **메시지 복사** — AI 응답 호버 시 복사 버튼
- **기본 마크다운** — 볼드, 리스트 렌더링 (라이브러리 없이)
- **날짜별 선질문** — 매일 다른 대화 시작 질문
- **D-day 카운터** — 스페인어 튜터에 신혼여행 카운트다운

## 라우트 구조

```
/                                        → META Lab 허브
/experiments/{id}                        → 실험 소개
/experiments/{id}/session                → 채팅 세션
/api/chat                                → Claude API 엔드포인트
```

## 폴더 구조

```
src/
├── app/                        # 라우트
│   ├── experiments/            # 실험별 페이지
│   └── api/chat/               # AI API 엔드포인트
├── components/chat/            # 채팅 UI 컴포넌트
├── content/experiments/        # 실험 설정 (ExperimentConfig)
└── lib/chat/                   # 타입, mock 엔진
docs/
├── repo-structure.md           # 폴더 구조 설명
├── experiments-log.md          # 실험 기록
└── ...                         # 기타 기획 문서
```

## 새 실험 추가하기

1. `src/content/experiments/새실험.ts`에 `ExperimentConfig` 작성 (category 포함)
2. `src/content/experiments/index.ts`에 등록
3. `src/app/experiments/새실험/` 라우트 생성 (intro + session)
4. (선택) `src/lib/chat/mock-chat.ts`에 폴백 응답 추가
5. 허브는 자동 반영됨 (데이터 기반 렌더링)

## 의도적으로 제외한 것

인증, 결제, 데이터베이스, 대화 히스토리 저장, 배포, 테스트, CI/CD

## 커밋 규칙

- `feat:`, `fix:`, `docs:`, `style:`, `chore:`, `refactor:` 접두사
- 작고 리뷰 가능한 단위로 커밋
