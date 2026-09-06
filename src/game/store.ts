import { create } from "zustand";
import type { CellState, Level, PaintMode } from "./types";
import { generateLevel } from "./generator";
import { playWin } from "./audio";

const SETTINGS_KEY = "nono-forge-settings";

export interface Settings {
  sound: boolean;
  vibrate: boolean;
}

function loadSettings(): Settings {
  if (typeof window === "undefined") return { sound: true, vibrate: true };
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return { sound: true, vibrate: true };
    const parsed = JSON.parse(raw) as Partial<Settings>;
    return {
      sound: parsed.sound !== false,
      vibrate: parsed.vibrate !== false,
    };
  } catch {
    return { sound: true, vibrate: true };
  }
}

let timerHandle: ReturnType<typeof setInterval> | null = null;

function clearTimer() {
  if (timerHandle) {
    clearInterval(timerHandle);
    timerHandle = null;
  }
}

interface GameState {
  level: Level | null;
  grid: CellState[][];
  mode: PaintMode;
  isWon: boolean;
  solvedRows: boolean[];
  solvedCols: boolean[];
  seconds: number;
  settings: Settings;
  settingsOpen: boolean;

  setMode: (mode: PaintMode) => void;
  initLevel: (size?: number) => void;
  resetLevel: () => void;
  setCell: (row: number, col: number, state: CellState) => void;
  setSettings: (patch: Partial<Settings>) => void;
  setSettingsOpen: (open: boolean) => void;
}

function emptyGrid(size: number): CellState[][] {
  return Array.from({ length: size }, () =>
    Array.from({ length: size }, () => "empty" as const),
  );
}

function lineSolved(
  grid: CellState[][],
  solution: boolean[][],
  index: number,
  axis: "row" | "col",
): boolean {
  const size = solution.length;
  for (let i = 0; i < size; i += 1) {
    const should = axis === "row" ? solution[index][i] : solution[i][index];
    const cell = axis === "row" ? grid[index][i] : grid[i][index];
    if (should ? cell !== "filled" : cell === "filled") return false;
  }
  return true;
}

export const useGameStore = create<GameState>((set, get) => ({
  level: null,
  grid: [],
  mode: "fill",
  isWon: false,
  solvedRows: [],
  solvedCols: [],
  seconds: 0,
  settings: loadSettings(),
  settingsOpen: false,

  setMode: (mode) => set({ mode }),

  setSettingsOpen: (open) => set({ settingsOpen: open }),

  setSettings: (patch) => {
    const settings = { ...get().settings, ...patch };
    set({ settings });
    if (typeof window !== "undefined") {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    }
  },

  initLevel: (size = 7) => {
    clearTimer();
    const level = generateLevel(size);
    set({
      level,
      grid: emptyGrid(level.size),
      isWon: false,
      solvedRows: Array(level.size).fill(false),
      solvedCols: Array(level.size).fill(false),
      seconds: 0,
    });
    timerHandle = setInterval(() => {
      set((state) => (state.isWon ? state : { seconds: state.seconds + 1 }));
    }, 1000);
  },

  resetLevel: () => {
    const { level } = get();
    if (!level) return;
    clearTimer();
    set({
      grid: emptyGrid(level.size),
      isWon: false,
      solvedRows: Array(level.size).fill(false),
      solvedCols: Array(level.size).fill(false),
      seconds: 0,
    });
    timerHandle = setInterval(() => {
      set((state) => (state.isWon ? state : { seconds: state.seconds + 1 }));
    }, 1000);
  },

  setCell: (row, col, state) => {
    const { grid, isWon, level, settings } = get();
    if (isWon || !level) return;

    const next = grid.map((r) => r.slice());
    next[row][col] = state;

    const solvedRows = level.solution.map((_, i) =>
      lineSolved(next, level.solution, i, "row"),
    );
    const solvedCols = level.solution[0].map((_, i) =>
      lineSolved(next, level.solution, i, "col"),
    );
    const won = solvedRows.every(Boolean) && solvedCols.every(Boolean);

    if (won) {
      clearTimer();
      if (settings.sound) playWin();
    }

    set({
      grid: next,
      solvedRows,
      solvedCols,
      isWon: won,
    });
  },
}));
