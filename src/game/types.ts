export type CellState = "empty" | "filled" | "marked";
export type PaintMode = "fill" | "mark";

export interface Level {
  id: string;
  size: number;
  title: string;
  solution: boolean[][];
  rowClues: number[][];
  colClues: number[][];
}

export interface PuzzlePattern {
  title: string;
  rows: string[];
}
