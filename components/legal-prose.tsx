import type { ReactNode } from "react";

export function LegalProse({ children }: { children: ReactNode }) {
  return (
    <div className="prose-legal max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20 [&>h2]:font-display [&>h2]:font-bold [&>h2]:text-2xl [&>h2]:mt-12 [&>h2]:mb-4 [&>h2:first-child]:mt-0 [&>p]:text-ink-light-muted [&>p]:leading-relaxed [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:text-ink-light-muted [&>ul]:mb-4 [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-1.5 [&_strong]:text-ink-light [&_a]:text-indigo [&_a]:underline">
      {children}
    </div>
  );
}
