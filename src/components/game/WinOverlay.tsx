import { useEffect, useState } from "react";
import { useGameStore } from "@/game/store";
import { PixelPreview } from "./PixelPreview";

function formatTime(total: number) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function WinOverlay() {
  const { isWon, seconds, level, initLevel } = useGameStore();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isWon) {
      setOpen(false);
      return;
    }
    const t = setTimeout(() => setOpen(true), 420);
    return () => clearTimeout(t);
  }, [isWon]);

  if (!open || !level) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center px-5">
      <div className="absolute inset-0 bg-bg/80" />
      <div className="relative w-full max-w-sm border-[3px] border-accent bg-surface p-6 text-center shadow-[4px_4px_0_0_var(--color-ink)]">
        <p className="font-display text-[10px] tracking-[0.28em] text-accent">
          COMPLETE
        </p>
        <div className="mt-4 flex justify-center">
          <PixelPreview solution={level.solution} pixelSize={level.size > 7 ? 10 : 14} />
        </div>
        <h2 className="mt-4 font-display text-sm leading-relaxed text-fg">
          {level.title}
        </h2>
        <p className="mt-2 font-body text-2xl tabular-nums text-muted">
          {formatTime(seconds)}
        </p>
        <button
          type="button"
          className="mt-5 w-full border-[3px] border-accent bg-accent px-4 py-3 font-display text-[11px] tracking-wide text-accent-fg shadow-[3px_3px_0_0_var(--color-ink)] active:translate-y-px"
          onClick={() => initLevel(level.size)}
        >
          NEW LEVEL
        </button>
      </div>
    </div>
  );
}
