import { X } from "lucide-react";
import { useGameStore } from "@/game/store";
import { cn } from "@/lib/utils";

function Toggle({
  on,
  onToggle,
  label,
}: {
  on: boolean;
  onToggle: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full items-center justify-between gap-4 border-[3px] border-muted bg-raised px-3 py-3 text-left"
    >
      <span className="font-body text-xl text-fg">{label}</span>
      <span
        className={cn(
          "min-w-14 border-[3px] px-2 py-0.5 text-center font-display text-[10px]",
          on
            ? "border-accent bg-accent text-accent-fg"
            : "border-muted bg-ink text-muted",
        )}
      >
        {on ? "ON" : "OFF"}
      </span>
    </button>
  );
}

export function SettingsPanel() {
  const { settingsOpen, setSettingsOpen, settings, setSettings } = useGameStore();

  if (!settingsOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <button
        type="button"
        aria-label="Close settings"
        className="absolute inset-0 bg-bg/80"
        onClick={() => setSettingsOpen(false)}
      />
      <div className="relative w-full max-w-md border-[3px] border-accent bg-surface p-5 shadow-[4px_4px_0_0_var(--color-ink)]">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-xs text-accent">SETTINGS</h2>
          <button
            type="button"
            aria-label="Close"
            className="flex size-10 items-center justify-center border-[3px] border-muted bg-raised text-fg"
            onClick={() => setSettingsOpen(false)}
          >
            <X className="size-4" strokeWidth={3} />
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <Toggle
            label="Sound"
            on={settings.sound}
            onToggle={() => setSettings({ sound: !settings.sound })}
          />
          <Toggle
            label="Vibration"
            on={settings.vibrate}
            onToggle={() => setSettings({ vibrate: !settings.vibrate })}
          />
        </div>
        <p className="mt-4 font-body text-lg leading-snug text-muted">
          Auto-cross and extra helpers land in a later drop. Sound is a tiny
          square-wave click.
        </p>
      </div>
    </div>
  );
}
