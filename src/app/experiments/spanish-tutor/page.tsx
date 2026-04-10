import Link from "next/link";

function getDday() {
  const target = new Date("2026-10-01");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = Math.ceil(
    (target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );
  return diff;
}

export default function SpanishTutorPage() {
  const dday = getDday();

  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center">
      <div className="mb-12">
        <span className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-(--color-accent-dim) text-3xl">
          🇪🇸
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight">스페인어 튜터</h1>
        <p className="mt-3 text-base text-white/50">스페인어 회화 연습</p>
        {dday > 0 && (
          <p className="mt-2 text-xs text-(--color-accent)/70">
            ✈️ 스페인 신혼여행까지 D-{dday}
          </p>
        )}
      </div>

      <div className="mb-16 max-w-xs space-y-3 text-white/35 text-sm leading-relaxed">
        <p>답을 바로 알려주지 않아요</p>
        <p>스스로 생각하고, 시도하고, 배워요</p>
        <p>틀려도 괜찮아요 — 그게 학습이에요</p>
      </div>

      <Link
        href="/experiments/spanish-tutor/session"
        className="inline-flex items-center justify-center rounded-full bg-(--color-accent) px-8 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90 active:opacity-80"
      >
        ¡Vamos! 시작하기
      </Link>

      <Link
        href="/"
        className="mt-6 text-xs text-white/30 transition-colors hover:text-white/50"
      >
        ← META Lab으로 돌아가기
      </Link>
    </div>
  );
}
