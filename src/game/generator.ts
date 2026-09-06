import type { Level, PuzzlePattern } from "./types";
import { puzzles5, puzzles7, puzzles10 } from "./puzzles";

const lastTitleBySize = new Map<number, string>();

function calculateClues(line: boolean[]): number[] {
  const clues: number[] = [];
  let count = 0;

  for (const cell of line) {
    if (cell) {
      count += 1;
    } else if (count > 0) {
      clues.push(count);
      count = 0;
    }
  }

  if (count > 0) clues.push(count);
  return clues.length > 0 ? clues : [0];
}

function patternToSolution(pattern: PuzzlePattern): boolean[][] {
  return pattern.rows.map((row) => row.split("").map((ch) => ch === "1"));
}

function buildLevel(title: string, solution: boolean[][]): Level {
  const size = solution.length;
  const rowClues = solution.map((row) => calculateClues(row));
  const colClues = Array.from({ length: size }, (_, col) =>
    calculateClues(solution.map((row) => row[col])),
  );

  return {
    id: `level_${Date.now()}_${Math.floor(Math.random() * 10000)}`,
    size,
    title,
    solution,
    rowClues,
    colClues,
  };
}

function pickPattern(catalog: PuzzlePattern[], size: number): PuzzlePattern {
  const last = lastTitleBySize.get(size);
  const pool =
    catalog.length > 1 && last
      ? catalog.filter((p) => p.title !== last)
      : catalog;
  const chosen = pool[Math.floor(Math.random() * pool.length)] ?? catalog[0];
  lastTitleBySize.set(size, chosen.title);
  return chosen;
}

export function generateLevel(size: number = 7): Level {
  const catalog = size === 5 ? puzzles5 : size === 10 ? puzzles10 : puzzles7;
  const pattern = pickPattern(catalog, size);
  return buildLevel(pattern.title, patternToSolution(pattern));
}

export function maxClueSlots(size: number): number {
  return Math.ceil(size / 2);
}
