# META — 성장톡 (Growth Talk)

> **META**: 목표와 집중을 돕는 제약된 AI 서비스
> **성장톡**: META의 첫 번째 서비스 — 하루 10분, 제약된 대화로 오늘을 돌아보고 내일의 한 걸음을 정하는 성장 도구

## 왜 만들었나

범용 AI는 너무 자유롭고 산만하다. 좋은 성장은 제약 속에서 일어난다.
META는 AI에 의도적인 제약을 걸어 집중, 성찰, 일관성을 높이는 서비스 브랜드다.
성장톡은 그 첫 번째 서비스로, 대화의 구조를 제한하여 일상 성장을 돕는다.

- 매일 하루를 돌아보는 3가지 질문
- 짧은 성찰 요약
- 딱 1가지 다음 행동

이것은 치료 도구가 아니다. 생산성 앱도 아니다.
**목적이 있는 짧은 대화**를 통한 일상 성장 도구다.

## 현재 프로토타입 범위 (v0)

- 목 데이터 기반 대화 흐름 체험
- 3개 페이지: 랜딩 → 세션 → 결과
- 모바일 퍼스트 UI
- 실제 AI 연동 없음

## 의도적으로 제외한 것

인증, 결제, 데이터베이스, 세션 히스토리, 다크 모드, 다중 대화 모드, 분석, 배포, 테스트, CI/CD

## 기술 스택

- **Next.js** (App Router)
- **TypeScript**
- **TailwindCSS**
- **pnpm**

## 로컬 실행

```bash
pnpm install
pnpm dev
```

`http://localhost:3000`에서 확인

## 폴더 구조

```
src/
├── app/
│   ├── page.tsx              # 랜딩
│   ├── session/page.tsx      # 대화 세션
│   └── result/page.tsx       # 결과/요약
├── components/
│   └── growth-talk/          # 세션 UI 컴포넌트
├── lib/
│   └── growth-talk/          # 타입, 엔진, 목 데이터
└── content/
    └── growth-talk/          # 질문/요약 콘텐츠
docs/
├── product-definition.md
├── mvp-scope.md
├── target-user.md
├── conversation-flow.md
├── future-ideas.md
└── claude-code-workflow.md
```

## 향후 방향

- Claude API 연동으로 실제 AI 대화
- 세션 히스토리 저장
- 개발자 성장, 영어 학습 등 모드 확장
- 프로덕션 배포 (Vercel)

## 커밋 규칙

- 작고 논리적인 단위로 커밋
- `feat:`, `fix:`, `docs:`, `style:`, `chore:` 접두사 사용
- 각 커밋은 리뷰 가능한 크기 유지
