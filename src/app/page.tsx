import Link from "next/link";
import { experiments } from "@/content/experiments";

const experimentList = Object.values(experiments);

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center">
      {/* Brand */}
      <div className="mb-16">
        <h1 className="text-5xl font-bold tracking-widest text-foreground">
          META
        </h1>
        <p className="mt-2 text-xs font-medium tracking-widest text-white/25 uppercase">
          Lab
        </p>
        <p className="mt-4 text-sm tracking-wide text-white/40">
          세상의 지식을 탐구하다
        </p>
      </div>

      {/* Experiments */}
      <div className="w-full space-y-3">
        <p className="mb-6 text-xs font-medium tracking-widest text-white/30 uppercase">
          Experiments
        </p>

        {experimentList.map((exp) => (
          <Link
            key={exp.id}
            href={`/experiments/${exp.id}`}
            className="group flex w-full items-center gap-4 rounded-2xl border border-(--color-border) bg-(--color-card) px-5 py-4 transition-all hover:border-(--color-accent)/30 hover:bg-(--color-accent-dim)"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-(--color-accent-dim) text-lg">
              {exp.emoji}
            </span>
            <div className="flex-1 text-left">
              <div className="flex items-center gap-2">
                <p className="text-base font-medium text-foreground">
                  {exp.name}
                </p>
                <span className="rounded-full bg-white/6 px-2 py-0.5 text-[9px] text-white/30">
                  {exp.category}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-white/40">{exp.description}</p>
            </div>
            <span className="text-white/20 transition-colors group-hover:text-(--color-accent)">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
