# META Lab — Portfolio

> What happens when you constrain AI instead of unleashing it?

---

## Introduction

META Lab is a prototype repository where I explore a simple hypothesis: **constrained AI creates better learning experiences than open-ended AI**.

Instead of building one more general-purpose chatbot, I built a collection of focused AI conversation experiments — each with strict topic boundaries, guided prompts, and intentional limitations.

This is not a startup. It's a personal lab. I built it because I wanted to use it.

---

## Core Idea

General-purpose AI has a problem: it does everything, but nothing deeply.

Ask a chatbot to help you reflect on your day — it gives a motivational paragraph. Ask it to teach you Spanish — it dumps a grammar lesson. Ask it to challenge your thinking — it agrees with you politely.

META Lab constrains the AI at every level:

- **Topic constraints**: Each experiment has a fixed subject. Go off-topic, and the AI refuses.
- **Behavioral constraints**: The AI follows strict rules — some experiments forbid explanations, others forbid agreement, others only allow questions.
- **Structural constraints**: The prompt is layered (experiment + character style + constraint level), creating 9 distinct combinations per experiment.

The result: conversations that are focused, surprising, and genuinely useful.

---

## Development Approach

This project was built through **AI-driven development** — not "AI-assisted" in the superficial sense of autocomplete, but a genuine creative partnership with Claude Code.

What that looked like in practice:

- **Architecture decisions** were discussed with AI before implementation
- **Prompt engineering** was iterated through conversation, not just code
- **Pivots** (from fixed flow → free chat, from single service → experiment lab) happened naturally through dialogue
- **Documentation** was generated alongside code, not after

The development process moved fast. The entire project — 6 experiments, streaming AI integration, chat history, streak system, Supabase persistence — was built in a few focused sessions.

I don't think this replaces engineering skill. But it amplifies it dramatically when the developer knows what they want.

---

## System Design

### Prompt Layering

Every AI response is shaped by three layers of instructions:

```
┌──────────────────────────┐
│  Experiment Prompt       │  What to talk about, rules, tone
├──────────────────────────┤
│  Style Prompt            │  How to communicate (Iris/Milo/Noah)
├──────────────────────────┤
│  Constraint Prompt       │  How much to help (Free/Guided/Strict)
└──────────────────────────┘
```

This means:
- A Spanish lesson with Noah in Strict mode = intense, no-hand-holding drilling
- The same lesson with Milo in Free mode = warm, encouraging, open conversation
- Same content, completely different experience

### ExperimentConfig

Every experiment is defined as a single configuration object:

```typescript
{
  id, name, description, emoji, category,
  topic, offTopicMessage,
  starterQuestions,
  systemPrompt
}
```

Adding a new experiment = creating one config file + two page files. The hub renders automatically from the registry.

### Storage

Dual-write architecture:
- **Supabase** (when configured) — for cross-device persistence
- **localStorage** (always) — for instant, reliable fallback
- **device_id** (UUID) — anonymous user identification without auth

---

## Key Experiments

### Growth Talk
A daily reflection tool. The AI asks concise, observant questions about your day. It doesn't preach, doesn't motivate, doesn't empathize excessively. It just asks the right question.

### Spanish Tutor
Inspired by Khanmigo (Khan Academy's AI). Doesn't give answers — gives quizzes, hints, and encouragement. Built for a specific context: preparing for a honeymoon trip to Spain.

### One Line
The most constrained experiment. You write one sentence about your day. The AI responds with one question. That's it. No explanations, no advice, no summaries. The beauty is in the brevity.

### Five Whys
Based on the 5 Whys technique. Whatever you say, the AI asks "why?" — persistently, calmly, relentlessly. It never explains, agrees, or advises. It just keeps digging until you find the root.

### Emotion Translator
You say "I'm frustrated." The AI doesn't say "that must be hard." Instead, it offers: *Is it closer to helplessness, disappointment, or exhaustion?* It helps you find the precise name for what you feel.

### Both Sides
You bring a dilemma. The AI analyzes both sides — pros and cons — and never takes a position. It always ends with: "What do you think?" The constraint: absolute neutrality.

---

## Learnings

**Constraints are features, not limitations.**
The experiments that feel the best are the most restricted ones. "One Line" (1 sentence in, 1 question back) is more powerful than any open-ended chat.

**Character changes everything.**
The same experiment feels completely different with Iris vs Noah. Personality is not decoration — it's a fundamental UX lever.

**AI-driven development works — with a clear vision.**
Claude Code didn't replace my judgment. It amplified my ability to execute. The speed gain is real, but only when I knew exactly what I wanted to build.

**Prototyping beats planning.**
Every major direction change in this project came from *using* the prototype, not from planning documents. Build first, refine later.

---

## What's Next

- Voice input (Web Speech API) for spoken language practice
- Session summaries and export
- More experiments: book discussions, interview simulator, code reviewer
- Production deployment
- Real user testing

---

<p align="center">
  <sub>Built by <a href="https://github.com/dindoo0524">Joy (NaJinju)</a> with Claude Code</sub>
</p>
