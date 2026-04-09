import Link from "next/link";

export default function OneLinePage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center">
      <div className="mb-12">
        <span className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-(--color-accent-dim) text-3xl">
          ✏️
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight">하루 한 줄</h1>
        <p className="mt-3 text-base text-white/50">오늘을 한 문장으로</p>
      </div>

      <div className="mb-16 max-w-xs space-y-3 text-white/35 text-sm leading-relaxed">
        <p>한 줄만 적으세요</p>
        <p>AI는 한 가지만 물어요</p>
        <p>그게 전부예요</p>
      </div>

      <Link
        href="/experiments/one-line/session"
        className="inline-flex items-center justify-center rounded-full bg-(--color-accent) px-8 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90 active:opacity-80"
      >
        오늘의 한 줄 쓰기
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
