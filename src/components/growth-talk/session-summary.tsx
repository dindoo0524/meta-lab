interface SessionSummaryProps {
  summary: string;
}

export function SessionSummary({ summary }: SessionSummaryProps) {
  return (
    <div className="mb-8">
      <p className="mb-3 text-sm font-medium text-(--color-text-muted)">
        오늘의 성찰
      </p>
      <p className="text-base leading-relaxed">{summary}</p>
    </div>
  );
}
