import { useEffect, useState } from "react";
import { Paintbrush, RotateCcw, Settings, Shuffle, X } from "lucide-react";
import { useGameStore } from "@/game/store";
import { maxClueSlots } from "@/game/generator";
import { cn } from "@/lib/utils";
import { ActionIcon } from "./ActionIcon";
import { Board } from "./Board";
import { SettingsPanel } from "./SettingsPanel";
import { WinOverlay } from "./WinOverlay";

function formatTime(total: number) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function computeCellSize(size: number) {
  if (typeof window === "undefined") return 28;
  const slots = maxClueSlots(size);
  const clueCol = slots * 16 + 8;
  const width = Math.min(window.innerWidth, 720);
  const height = window.innerHeight;
  const availW = width - 32 - clueCol;
  const availH = height - 250;
  const maxCell = window.innerWidth >= 800 ? 48 : 36;
  return Math.max(18, Math.min(maxCell, Math.floor(availW / size), Math.floor(availH / size)));
}

export function GameScreen() {
  const {
    initLevel,
    resetLevel,
    mode,
    setMode,
    seconds,
    level,
    setSettingsOpen,
  } = useGameStore();
  const size = level?.size ?? 7;
  const [cellSize, setCellSize] = useState(28);

  useEffect(() => {
    initLevel(7);
  }, [initLevel]);

  useEffect(() => {
    const update = () => setCellSize(computeCellSize(size));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [size]);

  return (
    <main className="relative min-h-dvh w-full bg-bg text-fg">
      <div className="scanlines pointer-events-none fixed inset-0 z-20 opacity-70" />

      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-3 pb-6 pt-4">
        <header className="mb-3 flex items-center justify-between gap-2">
          <div>
            <p className="font-display text-[9px] tracking-[0.22em] text-accent">
              PICROSS
            </p>
            <h1 className="mt-1 font-display text-[13px] leading-none text-fg">
              NONO FORGE
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="border-[3px] border-muted bg-surface px-3 py-2 font-body text-2xl tabular-nums leading-none text-fg">
              {formatTime(seconds)}
            </div>
            <ActionIcon label="Settings" onClick={() => setSettingsOpen(true)}>
              <Settings className="size-4" strokeWidth={2.5} />
            </ActionIcon>
          </div>
        </header>

        <div className="mb-3 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setMode("fill")}
            className={cn(
              "flex h-11 min-w-28 items-center justify-center gap-2 border-[3px] px-4 font-display text-[10px] shadow-[2px_2px_0_0_var(--color-ink)] active:translate-y-px",
              mode === "fill"
                ? "border-accent bg-accent text-accent-fg"
                : "border-muted bg-surface text-muted",
            )}
          >
            <Paintbrush className="size-3.5" strokeWidth={2.5} />
            FILL
          </button>
          <button
            type="button"
            onClick={() => setMode("mark")}
            className={cn(
              "flex h-11 min-w-28 items-center justify-center gap-2 border-[3px] px-4 font-display text-[10px] shadow-[2px_2px_0_0_var(--color-ink)] active:translate-y-px",
              mode === "mark"
                ? "border-accent bg-accent text-accent-fg"
                : "border-muted bg-surface text-muted",
            )}
          >
            <X className="size-3.5" strokeWidth={3} />
            MARK
          </button>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center">
          <Board cellSize={cellSize} />
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex gap-2">
            {[5, 7, 10].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => initLevel(s)}
                className={cn(
                  "h-11 min-w-14 border-[3px] px-2 font-body text-xl leading-none shadow-[2px_2px_0_0_var(--color-ink)]",
                  size === s
                    ? "border-accent bg-accent text-accent-fg"
                    : "border-muted bg-surface text-muted",
                )}
              >
                {s}x{s}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <ActionIcon label="Reset this puzzle" onClick={resetLevel}>
              <RotateCcw className="size-4" strokeWidth={2.5} />
            </ActionIcon>
            <ActionIcon label="New puzzle" onClick={() => initLevel(size)}>
              <Shuffle className="size-4" strokeWidth={2.5} />
            </ActionIcon>
          </div>
        </div>
      </div>

      <WinOverlay />
      <SettingsPanel />
    </main>
  );
}
