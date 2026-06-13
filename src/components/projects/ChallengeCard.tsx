import type { ProjectChallenge } from "@/types";

type ChallengeCardProps = {
  challenge: ProjectChallenge;
};

export function ChallengeCard({ challenge }: ChallengeCardProps) {
  return (
    <article className="rounded-lg border border-border bg-surface p-5">
      <h3 className="text-lg font-semibold text-foreground">
        {challenge.title}
      </h3>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Challenge
          </p>
          <p className="mt-2 text-sm leading-6 text-foreground-muted">
            {challenge.problem}
          </p>
        </div>
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Solution
          </p>
          <p className="mt-2 text-sm leading-6 text-foreground-muted">
            {challenge.solution}
          </p>
        </div>
      </div>
    </article>
  );
}
