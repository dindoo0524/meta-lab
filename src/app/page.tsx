import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          성장톡
        </h1>
        <p className="mt-3 text-lg text-(--color-text-muted)">
          오늘의 성장 대화
        </p>
      </div>

      <div className="mb-16 max-w-xs space-y-3 text-(--color-text-muted) text-sm leading-relaxed">
        <p>하루 10분, 3가지 질문으로</p>
        <p>오늘을 돌아보고</p>
        <p>내일의 한 걸음을 정해요</p>
      </div>

      <Link
        href="/session"
        className="inline-flex items-center justify-center rounded-full bg-(--color-accent) px-8 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90 active:opacity-80"
      >
        오늘의 대화 시작하기
      </Link>

      <p className="mt-8 text-xs text-(--color-text-muted) opacity-60">
        약 10분 소요
      </p>
    </div>
  );
}
