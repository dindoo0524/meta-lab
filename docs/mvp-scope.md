# MVP Scope — META Lab

## 포함 (In Scope)

### 구조
- META Lab 허브 (`/`)
- 실험별 소개 페이지 (`/experiments/{id}`)
- 실험별 채팅 세션 (`/experiments/{id}/session`)
- Claude API 스트리밍 엔드포인트 (`/api/chat`)

### 현재 실험
- 성장톡 (growth-talk) — 일상 성찰/감정 정리
- 스페인어 튜터 (spanish-tutor) — 칸미고 스타일 학습

### 기능
- 주제 제한된 AI 채팅
- 선질문(starter questions)으로 대화 시작
- 주제 벗어나면 거부
- Claude API 스트리밍 응답
- API 실패 시 mock 폴백

### 기술
- Next.js 16 App Router
- TypeScript + TailwindCSS v4
- @anthropic-ai/sdk
- ExperimentConfig 기반 실험 설정

### 디자인
- 모바일 퍼스트
- 나이트 다크 + 별 반짝임 우주 테마
- 퍼플 액센트

## 제외 (Out of Scope)

- 인증/로그인
- 데이터베이스
- 대화 히스토리 저장
- 결제/보상 체계
- 프로덕션 배포
- 테스트 코드
- CI/CD

## 결정 원칙

확신이 없으면 작은 스코프를 선택한다.
