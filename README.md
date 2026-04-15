<picture>
  <source media="(prefers-color-scheme: dark)" srcset="public/images/meta_lab_dark.png">
  <source media="(prefers-color-scheme: light)" srcset="public/images/meta_lab_light.png">
  <img alt="META Lab" src="public/images/meta_lab_dark.png" width="100%">
</picture>

<p align="center">
  <strong>A playground for constrained AI learning experiments</strong><br>
  <sub>제약된 AI로 학습을 실험하는 플레이그라운드</sub>
</p>

<p align="center">
  <a href="#-meta-lab-1">한국어</a> · <a href="#-english">English</a>
</p>

---

# 🇬🇧 English

## What is META Lab

META Lab is an **AI UX experiment repository** — a collection of small, focused AI conversation environments where learning happens through constraints, not freedom.

Each experiment is a self-contained AI dialogue space with:
- A **fixed topic boundary** (off-topic messages are rejected)
- **Starter questions** that guide the user into the conversation
- A unique **system prompt** that shapes AI behavior

This is not a product. It's a **prototype lab** for exploring how constraints can improve AI-assisted learning.

## Why This Exists

General-purpose AI is distracting. Ask it anything, get anything — but depth suffers.

META Lab takes the opposite approach: **restriction breeds focus**. By limiting what the AI can talk about, how it responds, and what it's allowed to do, we create spaces where reflection, learning, and thinking can actually happen.

## Key Concepts

### Experiments
Each experiment is a themed AI conversation environment. One experiment teaches Spanish. Another only asks "why?". Another translates emotions into more precise words. Each has its own rules.

### Style — Iris / Milo / Noah
Three AI character personas that change *how* the AI communicates:
- **Iris** (calm) — analytical, structured, avoids emotional language
- **Milo** (warm) — empathetic, gentle, open-ended questions
- **Noah** (sharp) — direct, challenging, no softening

### Constraint Levels
Three levels that control *how much* the AI helps:
- **Free** — responds openly, explains, suggests
- **Guided** — asks first, hints later, avoids direct answers
- **Strict** — only questions, never solves

### Topic Boundaries
Every experiment has a topic fence. If the user goes off-topic, the AI politely redirects. This is the core of the "constrained AI" philosophy.

## Experiments

| ID | Name | Category | What it does |
|----|------|----------|-------------|
| 001 | Growth Talk | Emotion | Daily reflection through concise, observant dialogue |
| 002 | Spanish Tutor | Learning | Khanmigo-style language learning with quizzes |
| 005 | One Line | Record | One sentence per day, one question back |
| 006 | Five Whys | Thinking | Digs into "why?" five levels deep |
| 007 | Emotion Translator | Emotion | Finds more precise names for feelings |
| 008 | Both Sides | Thinking | Analyzes pros and cons, never takes a side |

## Architecture

The system prompt is composed in three layers:

```
┌─────────────────────────────────────┐
│  Layer 1: Experiment Prompt         │  ← topic, rules, tone
│  Layer 2: Style Prompt              │  ← Iris / Milo / Noah
│  Layer 3: Constraint Prompt         │  ← Free / Guided / Strict
└─────────────────────────────────────┘
          ↓
    Claude API (Streaming)
```

This layered approach means any experiment can be experienced through 9 different combinations (3 styles × 3 constraints) without changing the experiment itself.

## Tech Stack

- **Next.js 16** (App Router) + **TypeScript**
- **TailwindCSS v4** — dark space theme, mobile-first
- **@anthropic-ai/sdk** — Claude API streaming
- **@supabase/supabase-js** — optional persistence (falls back to localStorage)
- **pnpm**

## Local Setup

```bash
git clone https://github.com/dindoo0524/meta-lab.git
cd meta-lab
pnpm install
```

Create `.env.local`:
```
ANTHROPIC_API_KEY=sk-ant-...
# Optional:
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

```bash
pnpm dev
# → http://localhost:3000
```

## Philosophy

This project was built almost entirely through **AI-driven development** — using Claude Code as a real-time implementation partner. Not just for code generation, but for architecture decisions, naming conventions, prompt engineering, and documentation.

The process itself is an experiment: *can a solo developer build a meaningful prototype by collaborating deeply with AI?*

---

# 🇰🇷 META Lab

## 이게 뭔가요

META Lab은 **제약된 AI 학습 실험 저장소**입니다.

범용 AI에게 아무거나 물어보면 아무 답이나 옵니다. 넓지만 깊지 않죠. META Lab은 반대로 갑니다. AI에게 **제약을 걸어서** 집중된 학습 경험을 만듭니다.

각 실험은 독립된 AI 대화 공간입니다:
- **주제가 정해져** 있고, 벗어나면 AI가 거부합니다
- **선질문**이 대화를 시작하도록 안내합니다
- 고유한 **시스템 프롬프트**가 AI의 행동을 규정합니다

완성된 제품이 아닙니다. **프로토타입 실험의 모음**입니다.

## 왜 만들었나

범용 AI는 산만합니다. 뭐든 물어볼 수 있다는 건, 아무것도 깊이 파고들지 못한다는 뜻이기도 합니다.

META Lab은 정반대의 접근입니다: **제약이 집중을 만든다**. AI가 말할 수 있는 주제를 제한하고, 응답 방식을 통제하고, 할 수 있는 것을 줄임으로써 — 오히려 성찰, 학습, 사고가 일어나는 공간을 만듭니다.

## 핵심 개념

### 실험 (Experiments)
각 실험은 주제별 AI 대화 환경입니다. 하나는 스페인어를 가르치고, 하나는 "왜?"만 묻고, 하나는 감정을 더 정확한 단어로 번역합니다. 각자의 규칙이 있습니다.

### 스타일 — Iris / Milo / Noah
AI가 **어떻게** 말하는지를 바꾸는 3가지 캐릭터입니다:
- **Iris** (차분) — 분석적이고 구조적, 감정 언어 회피
- **Milo** (따뜻) — 공감적이고 부드러운 열린 질문
- **Noah** (직설) — 직접적이고 도전적, 에둘러 말하지 않음

### 제약 수준 (Constraint Levels)
AI가 **얼마나** 도와주는지를 조절하는 3단계입니다:
- **Free** — 자유롭게 설명하고 제안
- **Guided** — 질문 먼저, 힌트만, 직접 답변 회피
- **Strict** — 질문으로만 유도, 절대 답 안 줌

### 주제 경계 (Topic Boundaries)
모든 실험에는 주제 울타리가 있습니다. 벗어나면 AI가 부드럽게 되돌립니다. 이것이 "제약된 AI" 철학의 핵심입니다.

## 실험 목록

| ID | 이름 | 카테고리 | 하는 일 |
|----|------|---------|--------|
| 001 | 성장톡 | 감정 | 간결하고 관찰적인 일상 성찰 대화 |
| 002 | 스페인어 튜터 | 학습 | 칸미고 스타일 퀴즈 기반 스페인어 학습 |
| 005 | 하루 한 줄 | 기록 | 하루를 한 문장으로, AI는 질문 하나만 |
| 006 | 역질문 | 사고 | "왜?"를 5단계까지 파고드는 사고 훈련 |
| 007 | 감정 번역기 | 감정 | 감정에 더 정확한 이름을 찾아주는 실험 |
| 008 | 양면 사고 | 사고 | 찬반 양면 분석, 편들기 절대 금지 |

## 아키텍처

시스템 프롬프트는 3개 레이어로 합성됩니다:

```
┌─────────────────────────────────────┐
│  Layer 1: 실험 프롬프트              │  ← 주제, 규칙, 톤
│  Layer 2: 스타일 프롬프트            │  ← Iris / Milo / Noah
│  Layer 3: 제약 프롬프트              │  ← Free / Guided / Strict
└─────────────────────────────────────┘
          ↓
    Claude API (스트리밍)
```

이 구조 덕분에 하나의 실험을 9가지 조합(3 스타일 × 3 제약)으로 경험할 수 있습니다.

## 기술 스택

- **Next.js 16** (App Router) + **TypeScript**
- **TailwindCSS v4** — 다크 우주 테마, 모바일 퍼스트
- **@anthropic-ai/sdk** — Claude API 스트리밍
- **@supabase/supabase-js** — 선택적 영속화 (미설정 시 localStorage)
- **pnpm**

## 로컬 실행

```bash
git clone https://github.com/dindoo0524/meta-lab.git
cd meta-lab
pnpm install
```

`.env.local` 생성:
```
ANTHROPIC_API_KEY=sk-ant-...
# 선택:
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

```bash
pnpm dev
# → http://localhost:3000
```

## 철학

이 프로젝트는 거의 전적으로 **AI 주도 개발**로 만들어졌습니다. Claude Code를 실시간 구현 파트너로 사용하여 코드 생성뿐 아니라 아키텍처 결정, 네이밍, 프롬프트 엔지니어링, 문서화까지 함께 진행했습니다.

이 과정 자체가 하나의 실험입니다: *AI와 깊이 협업하면, 혼자서도 의미 있는 프로토타입을 만들 수 있을까?*
