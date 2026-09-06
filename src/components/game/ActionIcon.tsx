import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  label: string;
  onClick: () => void;
  active?: boolean;
  children: ReactNode;
}

export function ActionIcon({ label, onClick, active, children }: Props) {
  const [tip, setTip] = useState(false);
  const hold = useRef<ReturnType<typeof setTimeout> | null>(null);
  const firedHold = useRef(false);

  const clearHold = () => {
    if (hold.current) {
      clearTimeout(hold.current);
      hold.current = null;
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={label}
        onClick={() => {
          if (firedHold.current) {
            firedHold.current = false;
            return;
          }
          onClick();
        }}
        onPointerDown={() => {
          firedHold.current = false;
          hold.current = setTimeout(() => {
            firedHold.current = true;
            setTip(true);
          }, 420);
        }}
        onPointerUp={clearHold}
        onPointerLeave={() => {
          clearHold();
          setTip(false);
        }}
        onPointerCancel={clearHold}
        onMouseEnter={() => setTip(true)}
        onMouseLeave={() => setTip(false)}
        className={cn(
          "flex size-11 items-center justify-center text-fg",
          "border-[3px] transition-[transform,background-color] duration-150",
          "active:translate-y-px",
          active
            ? "border-accent bg-accent text-accent-fg shadow-[2px_2px_0_0_var(--color-ink)]"
            : "border-muted bg-surface text-fg shadow-[2px_2px_0_0_var(--color-ink)] hover:border-accent",
        )}
      >
        {children}
      </button>
      {tip && (
        <div
          role="tooltip"
          className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 -translate-x-1/2 whitespace-nowrap border-[3px] border-accent bg-surface px-2 py-1 font-body text-lg leading-none text-fg shadow-[2px_2px_0_0_var(--color-ink)]"
        >
          {label}
        </div>
      )}
    </div>
  );
}
