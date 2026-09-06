import { useRef, type PointerEvent } from "react";
import { maxClueSlots } from "@/game/generator";
import { playErase, playPaint, unlockAudio } from "@/game/audio";
import { useGameStore } from "@/game/store";
import type { CellState } from "@/game/types";
import { cn } from "@/lib/utils";

type Action = "paint" | "erase" | null;

function padClues(clues: number[], slots: number): (number | null)[] {
  const extras = Math.max(0, slots - clues.length);
  return [...Array(extras).fill(null), ...clues];
}

interface Props {
  cellSize: number;
}

export function Board({ cellSize }: Props) {
  const { grid, level, setCell, isWon, solvedRows, solvedCols, settings } =
    useGameStore();
  const lastCell = useRef<{ row: number; col: number } | null>(null);
  const action = useRef<Action>(null);
  const dragging = useRef(false);
  const gridRef = useRef<HTMLDivElement>(null);

  if (!level || grid.length === 0) return null;

  const size = level.size;
  const slots = maxClueSlots(size);
  const clueW = 16;
  const clueH = 16;

  const apply = (row: number, col: number, act: Action) => {
    if (!act || useGameStore.getState().isWon) return;
    const current = useGameStore.getState().grid[row][col];
    const want: CellState = useGameStore.getState().mode === "fill" ? "filled" : "marked";
    if (act === "paint" && current === "empty") {
      setCell(row, col, want);
      if (settings.sound) playPaint();
      if (settings.vibrate) navigator.vibrate?.(8);
    } else if (act === "erase" && current === want) {
      setCell(row, col, "empty");
      if (settings.sound) playErase();
      if (settings.vibrate) navigator.vibrate?.(8);
    }
  };

  const cellFromEvent = (clientX: number, clientY: number) => {
    const el = gridRef.current;
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    const col = Math.floor((clientX - rect.left) / cellSize);
    const row = Math.floor((clientY - rect.top) / cellSize);
    if (row < 0 || col < 0 || row >= size || col >= size) return null;
    return { row, col };
  };

  const decideAction = (row: number, col: number): Action => {
    const current = useGameStore.getState().grid[row][col];
    const want: CellState = useGameStore.getState().mode === "fill" ? "filled" : "marked";
    if (current === "empty") return "paint";
    if (current === want) return "erase";
    return null;
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (isWon) return;
    e.preventDefault();
    unlockAudio();
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* synthetic events may not support capture */
    }
    dragging.current = false;
    const cell = cellFromEvent(e.clientX, e.clientY);
    if (!cell) return;
    lastCell.current = cell;
    action.current = decideAction(cell.row, cell.col);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!lastCell.current || !action.current) return;
    const cell = cellFromEvent(e.clientX, e.clientY);
    if (!cell) return;
    const moved =
      cell.row !== lastCell.current.row || cell.col !== lastCell.current.col;
    if (!moved) return;
    if (!dragging.current) {
      dragging.current = true;
      apply(lastCell.current.row, lastCell.current.col, action.current);
    }
    lastCell.current = cell;
    apply(cell.row, cell.col, action.current);
  };

  const onPointerUp = () => {
    if (!dragging.current && lastCell.current && action.current) {
      apply(lastCell.current.row, lastCell.current.col, action.current);
    }
    lastCell.current = null;
    action.current = null;
    dragging.current = false;
  };

  return (
    <div className="flex select-none flex-col items-center">
      <div className="flex">
        <div
          className="shrink-0"
          style={{ width: slots * clueW + 8, height: slots * clueH + 12 }}
        />
        <div className="flex">
          {level.colClues.map((clueGroup, col) => {
            const padded = padClues(clueGroup, slots);
            const solved = solvedCols[col];
            return (
              <div
                key={col}
                className="flex flex-col items-center justify-end"
                style={{ width: cellSize, height: slots * clueH + 12 }}
              >
                {padded.map((n, i) => (
                  <span
                    key={i}
                    className={cn(
                      "flex items-center justify-center font-body leading-none",
                      solved ? "text-accent" : "text-muted",
                    )}
                    style={{ width: cellSize, height: clueH, fontSize: 16 }}
                  >
                    {n ?? ""}
                  </span>
                ))}
                <span
                  className={cn(
                    "flex h-3 w-full items-center justify-center font-body text-sm leading-none",
                    solved ? "text-accent" : "invisible",
                  )}
                >
                  v
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex">
        <div
          className="flex flex-col justify-center"
          style={{ width: slots * clueW + 8 }}
        >
          {level.rowClues.map((clueGroup, row) => {
            const padded = padClues(clueGroup, slots);
            const solved = solvedRows[row];
            return (
              <div
                key={row}
                className="flex items-center justify-end pr-1"
                style={{ height: cellSize }}
              >
                {padded.map((n, i) => (
                  <span
                    key={i}
                    className={cn(
                      "flex items-center justify-center font-body leading-none",
                      solved ? "text-accent" : "text-muted",
                    )}
                    style={{ width: clueW, height: cellSize, fontSize: 16 }}
                  >
                    {n ?? ""}
                  </span>
                ))}
                <span
                  className={cn(
                    "w-3 text-center font-body text-sm leading-none",
                    solved ? "text-accent" : "invisible",
                  )}
                >
                  v
                </span>
              </div>
            );
          })}
        </div>

        <div
          ref={gridRef}
          className="touch-none border-[3px] border-accent bg-ink shadow-[3px_3px_0_0_var(--color-ink)]"
          style={{ width: cellSize * size, height: cellSize * size }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {grid.map((row, r) => (
            <div key={r} className="flex">
              {row.map((cell, c) => {
                const thickR = (r + 1) % 5 === 0 && r !== size - 1;
                const thickC = (c + 1) % 5 === 0 && c !== size - 1;
                return (
                  <div
                    key={`${r}-${c}`}
                    className={cn(
                      "relative box-border flex items-center justify-center border-r border-b border-muted/35",
                      thickR && "border-b-2 border-b-muted",
                      thickC && "border-r-2 border-r-muted",
                    )}
                    style={{ width: cellSize, height: cellSize }}
                  >
                    {cell === "filled" && (
                      <span className="block size-[82%] bg-fill" />
                    )}
                    {cell === "marked" && (
                      <span className="font-display text-[9px] leading-none text-muted">
                        X
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
