interface QuestionCardProps {
  questionNumber: number;
  totalQuestions: number;
  questionText: string;
}

export function QuestionCard({
  questionNumber,
  totalQuestions,
  questionText,
}: QuestionCardProps) {
  return (
    <div className="mb-6">
      <p className="mb-2 text-sm text-(--color-text-muted)">
        질문 {questionNumber}/{totalQuestions}
      </p>
      <h2 className="text-xl font-semibold leading-snug">{questionText}</h2>
    </div>
  );
}
