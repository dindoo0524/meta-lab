"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { SessionResult, Question } from "@/lib/growth-talk/session-types";
import { SessionSummary } from "@/components/growth-talk/session-summary";
import { NextActionCard } from "@/components/growth-talk/next-action-card";

interface StoredResult {
  initialFeeling: string;
  answers: string[];
  questions: Question[];
  result: SessionResult;
}

export default function ResultPage() {
  const router = useRouter();
  const [data, setData] = useState<StoredResult | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("growth-talk-result");
    if (!stored) {
      router.replace("/");
      return;
    }
    setData(JSON.parse(stored));
  }, [router]);

  if (!data) {
    return null;
  }

  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mb-10">
        <p className="mb-1 text-xs font-medium tracking-widest text-(--color-accent) uppercase">
          META
        </p>
        <h1 className="text-2xl font-semibold">오늘의 성장톡</h1>
        <p className="mt-1 text-sm text-(--color-text-muted)">대화 완료</p>
      </div>

      <SessionSummary summary={data.result.reflectionSummary} />
      <NextActionCard action={data.result.nextAction} />

      <div className="mt-12 flex flex-col gap-3">
        <Link
          href="/"
          className="w-full rounded-full bg-(--color-accent) py-3.5 text-center text-base font-medium text-white transition-opacity hover:opacity-90 active:opacity-80"
        >
          처음으로
        </Link>
      </div>
    </div>
  );
}
