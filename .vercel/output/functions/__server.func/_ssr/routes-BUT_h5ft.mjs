import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as RotateCcw, i as Settings, o as Paintbrush, r as Shuffle, t as X } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BUT_h5ft.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var puzzles5 = [
	{
		title: "Heart",
		rows: [
			"01110",
			"11111",
			"11111",
			"01110",
			"00100"
		]
	},
	{
		title: "House",
		rows: [
			"00100",
			"01110",
			"11111",
			"10101",
			"11111"
		]
	},
	{
		title: "Tree",
		rows: [
			"00100",
			"01110",
			"11111",
			"00100",
			"01110"
		]
	},
	{
		title: "Star",
		rows: [
			"00100",
			"11111",
			"01110",
			"01010",
			"10001"
		]
	},
	{
		title: "Smile",
		rows: [
			"01110",
			"10101",
			"11111",
			"10001",
			"01110"
		]
	},
	{
		title: "Cup",
		rows: [
			"11110",
			"10011",
			"11110",
			"01100",
			"11110"
		]
	},
	{
		title: "Arrow",
		rows: [
			"00100",
			"01110",
			"11111",
			"00100",
			"00100"
		]
	},
	{
		title: "Fish",
		rows: [
			"01100",
			"11111",
			"01110",
			"11111",
			"01100"
		]
	}
];
var puzzles7 = [
	{
		title: "Heart",
		rows: [
			"0110110",
			"1111111",
			"1111111",
			"1111111",
			"0111110",
			"0011100",
			"0001000"
		]
	},
	{
		title: "House",
		rows: [
			"0001000",
			"0011100",
			"0111110",
			"1111111",
			"1100011",
			"1101011",
			"1111111"
		]
	},
	{
		title: "Tree",
		rows: [
			"0001000",
			"0011100",
			"0111110",
			"0011100",
			"0111110",
			"0001000",
			"0011100"
		]
	},
	{
		title: "Cat",
		rows: [
			"1000001",
			"1100011",
			"1111111",
			"1011101",
			"1111111",
			"0111110",
			"0100010"
		]
	},
	{
		title: "Fish",
		rows: [
			"0011000",
			"0111101",
			"1111111",
			"1111110",
			"0111101",
			"0011000",
			"0000000"
		]
	},
	{
		title: "Mushroom",
		rows: [
			"0011100",
			"0111110",
			"1111111",
			"1111111",
			"0011100",
			"0011100",
			"0011100"
		]
	},
	{
		title: "Rocket",
		rows: [
			"0001000",
			"0011100",
			"0011100",
			"0111110",
			"0111110",
			"0010100",
			"0100010"
		]
	},
	{
		title: "Ghost",
		rows: [
			"0011100",
			"0111110",
			"1101111",
			"1111111",
			"1111111",
			"1111111",
			"1010101"
		]
	},
	{
		title: "Cup",
		rows: [
			"0111110",
			"0100011",
			"0100011",
			"0111110",
			"0011100",
			"0011100",
			"0111110"
		]
	},
	{
		title: "Star",
		rows: [
			"0001000",
			"0001000",
			"1111111",
			"0111110",
			"0011100",
			"0110110",
			"1100011"
		]
	},
	{
		title: "Boat",
		rows: [
			"0001000",
			"0001100",
			"0001110",
			"1111111",
			"0111110",
			"0011100",
			"0000000"
		]
	},
	{
		title: "Alien",
		rows: [
			"0011100",
			"0111110",
			"1101011",
			"1111111",
			"0010100",
			"0111110",
			"0100010"
		]
	},
	{
		title: "Crown",
		rows: [
			"1001001",
			"1011101",
			"1111111",
			"1111111",
			"0111110",
			"0011100",
			"0111110"
		]
	},
	{
		title: "Duck",
		rows: [
			"0011100",
			"0011110",
			"0011100",
			"0111110",
			"1111111",
			"0111110",
			"0010100"
		]
	}
];
var puzzles10 = [
	{
		title: "Cat",
		rows: [
			"1100000011",
			"1110000111",
			"1111111111",
			"1101111101",
			"1111111111",
			"0111111110",
			"0111111110",
			"0100000010",
			"0110000110",
			"0010000100"
		]
	},
	{
		title: "House",
		rows: [
			"0000100000",
			"0001110000",
			"0011111000",
			"0111111100",
			"1111111111",
			"1100000011",
			"1100110011",
			"1100110011",
			"1100000011",
			"1111111111"
		]
	},
	{
		title: "Tree",
		rows: [
			"0000110000",
			"0001111000",
			"0011111100",
			"0001111000",
			"0011111100",
			"0111111110",
			"0000110000",
			"0000110000",
			"0001111000",
			"0011111100"
		]
	},
	{
		title: "Heart",
		rows: [
			"0110001100",
			"1111011110",
			"1111111110",
			"1111111110",
			"0111111100",
			"0011111000",
			"0001110000",
			"0000100000",
			"0000000000",
			"0000000000"
		]
	},
	{
		title: "Rocket",
		rows: [
			"0000110000",
			"0001111000",
			"0001111000",
			"0011111100",
			"0011111100",
			"0011111100",
			"0111111110",
			"0001001000",
			"0010000100",
			"0100000010"
		]
	},
	{
		title: "Fish",
		rows: [
			"0001110000",
			"0011111001",
			"0111111111",
			"1111111110",
			"0111111111",
			"0011111001",
			"0001110000",
			"0000100000",
			"0000000000",
			"0000000000"
		]
	},
	{
		title: "Castle",
		rows: [
			"1000100010",
			"1111111111",
			"1000100010",
			"1111111111",
			"1100000011",
			"1101111011",
			"1101111011",
			"1100000011",
			"1111111111",
			"1111111111"
		]
	},
	{
		title: "Ghost",
		rows: [
			"0001111000",
			"0011111100",
			"0110111110",
			"0111111110",
			"0111111110",
			"0111111110",
			"0111111110",
			"0101010100",
			"0000000000",
			"0000000000"
		]
	}
];
var lastTitleBySize = /* @__PURE__ */ new Map();
function calculateClues(line) {
	const clues = [];
	let count = 0;
	for (const cell of line) if (cell) count += 1;
	else if (count > 0) {
		clues.push(count);
		count = 0;
	}
	if (count > 0) clues.push(count);
	return clues.length > 0 ? clues : [0];
}
function patternToSolution(pattern) {
	return pattern.rows.map((row) => row.split("").map((ch) => ch === "1"));
}
function buildLevel(title, solution) {
	const size = solution.length;
	const rowClues = solution.map((row) => calculateClues(row));
	const colClues = Array.from({ length: size }, (_, col) => calculateClues(solution.map((row) => row[col])));
	return {
		id: `level_${Date.now()}_${Math.floor(Math.random() * 1e4)}`,
		size,
		title,
		solution,
		rowClues,
		colClues
	};
}
function pickPattern(catalog, size) {
	const last = lastTitleBySize.get(size);
	const pool = catalog.length > 1 && last ? catalog.filter((p) => p.title !== last) : catalog;
	const chosen = pool[Math.floor(Math.random() * pool.length)] ?? catalog[0];
	lastTitleBySize.set(size, chosen.title);
	return chosen;
}
function generateLevel(size = 7) {
	const pattern = pickPattern(size === 5 ? puzzles5 : size === 10 ? puzzles10 : puzzles7, size);
	return buildLevel(pattern.title, patternToSolution(pattern));
}
function maxClueSlots(size) {
	return Math.ceil(size / 2);
}
var ctx = null;
function getCtx() {
	if (typeof window === "undefined") return null;
	if (!ctx) {
		const Ctor = window.AudioContext || window.webkitAudioContext;
		if (!Ctor) return null;
		ctx = new Ctor();
	}
	return ctx;
}
function unlockAudio() {
	const audio = getCtx();
	if (!audio) return;
	if (audio.state === "suspended") audio.resume();
}
function blip(freq, duration, gain = .04) {
	const audio = getCtx();
	if (!audio) return;
	const osc = audio.createOscillator();
	const g = audio.createGain();
	osc.type = "square";
	osc.frequency.value = freq;
	g.gain.value = gain;
	osc.connect(g);
	g.connect(audio.destination);
	const now = audio.currentTime;
	g.gain.setValueAtTime(gain, now);
	g.gain.exponentialRampToValueAtTime(.001, now + duration);
	osc.start(now);
	osc.stop(now + duration);
}
function playPaint() {
	blip(520, .05, .03);
}
function playErase() {
	blip(220, .06, .03);
}
function playWin() {
	blip(440, .08, .05);
	setTimeout(() => blip(660, .1, .05), 90);
	setTimeout(() => blip(880, .16, .05), 180);
}
var SETTINGS_KEY = "nono-forge-settings";
function loadSettings() {
	if (typeof window === "undefined") return {
		sound: true,
		vibrate: true
	};
	try {
		const raw = localStorage.getItem(SETTINGS_KEY);
		if (!raw) return {
			sound: true,
			vibrate: true
		};
		const parsed = JSON.parse(raw);
		return {
			sound: parsed.sound !== false,
			vibrate: parsed.vibrate !== false
		};
	} catch {
		return {
			sound: true,
			vibrate: true
		};
	}
}
var timerHandle = null;
function clearTimer() {
	if (timerHandle) {
		clearInterval(timerHandle);
		timerHandle = null;
	}
}
function emptyGrid(size) {
	return Array.from({ length: size }, () => Array.from({ length: size }, () => "empty"));
}
function lineSolved(grid, solution, index, axis) {
	const size = solution.length;
	for (let i = 0; i < size; i += 1) {
		const should = axis === "row" ? solution[index][i] : solution[i][index];
		const cell = axis === "row" ? grid[index][i] : grid[i][index];
		if (should ? cell !== "filled" : cell === "filled") return false;
	}
	return true;
}
var useGameStore = create((set, get) => ({
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
		const settings = {
			...get().settings,
			...patch
		};
		set({ settings });
		if (typeof window !== "undefined") localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
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
			seconds: 0
		});
		timerHandle = setInterval(() => {
			set((state) => state.isWon ? state : { seconds: state.seconds + 1 });
		}, 1e3);
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
			seconds: 0
		});
		timerHandle = setInterval(() => {
			set((state) => state.isWon ? state : { seconds: state.seconds + 1 });
		}, 1e3);
	},
	setCell: (row, col, state) => {
		const { grid, isWon, level, settings } = get();
		if (isWon || !level) return;
		const next = grid.map((r) => r.slice());
		next[row][col] = state;
		const solvedRows = level.solution.map((_, i) => lineSolved(next, level.solution, i, "row"));
		const solvedCols = level.solution[0].map((_, i) => lineSolved(next, level.solution, i, "col"));
		const won = solvedRows.every(Boolean) && solvedCols.every(Boolean);
		if (won) {
			clearTimer();
			if (settings.sound) playWin();
		}
		set({
			grid: next,
			solvedRows,
			solvedCols,
			isWon: won
		});
	}
}));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function ActionIcon({ label, onClick, active, children }) {
	const [tip, setTip] = (0, import_react.useState)(false);
	const hold = (0, import_react.useRef)(null);
	const firedHold = (0, import_react.useRef)(false);
	const clearHold = () => {
		if (hold.current) {
			clearTimeout(hold.current);
			hold.current = null;
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": label,
			onClick: () => {
				if (firedHold.current) {
					firedHold.current = false;
					return;
				}
				onClick();
			},
			onPointerDown: () => {
				firedHold.current = false;
				hold.current = setTimeout(() => {
					firedHold.current = true;
					setTip(true);
				}, 420);
			},
			onPointerUp: clearHold,
			onPointerLeave: () => {
				clearHold();
				setTip(false);
			},
			onPointerCancel: clearHold,
			onMouseEnter: () => setTip(true),
			onMouseLeave: () => setTip(false),
			className: cn("flex size-11 items-center justify-center text-fg", "border-[3px] transition-[transform,background-color] duration-150", "active:translate-y-px", active ? "border-accent bg-accent text-accent-fg shadow-[2px_2px_0_0_var(--color-ink)]" : "border-muted bg-surface text-fg shadow-[2px_2px_0_0_var(--color-ink)] hover:border-accent"),
			children
		}), tip && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "tooltip",
			className: "pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 -translate-x-1/2 whitespace-nowrap border-[3px] border-accent bg-surface px-2 py-1 font-body text-lg leading-none text-fg shadow-[2px_2px_0_0_var(--color-ink)]",
			children: label
		})]
	});
}
function padClues(clues, slots) {
	const extras = Math.max(0, slots - clues.length);
	return [...Array(extras).fill(null), ...clues];
}
function Board({ cellSize }) {
	const { grid, level, setCell, isWon, solvedRows, solvedCols, settings } = useGameStore();
	const lastCell = (0, import_react.useRef)(null);
	const action = (0, import_react.useRef)(null);
	const dragging = (0, import_react.useRef)(false);
	const gridRef = (0, import_react.useRef)(null);
	if (!level || grid.length === 0) return null;
	const size = level.size;
	const slots = maxClueSlots(size);
	const clueW = 16;
	const clueH = 16;
	const apply = (row, col, act) => {
		if (!act || useGameStore.getState().isWon) return;
		const current = useGameStore.getState().grid[row][col];
		const want = useGameStore.getState().mode === "fill" ? "filled" : "marked";
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
	const cellFromEvent = (clientX, clientY) => {
		const el = gridRef.current;
		if (!el) return null;
		const rect = el.getBoundingClientRect();
		const col = Math.floor((clientX - rect.left) / cellSize);
		const row = Math.floor((clientY - rect.top) / cellSize);
		if (row < 0 || col < 0 || row >= size || col >= size) return null;
		return {
			row,
			col
		};
	};
	const decideAction = (row, col) => {
		const current = useGameStore.getState().grid[row][col];
		const want = useGameStore.getState().mode === "fill" ? "filled" : "marked";
		if (current === "empty") return "paint";
		if (current === want) return "erase";
		return null;
	};
	const onPointerDown = (e) => {
		if (isWon) return;
		e.preventDefault();
		unlockAudio();
		try {
			e.currentTarget.setPointerCapture(e.pointerId);
		} catch {}
		dragging.current = false;
		const cell = cellFromEvent(e.clientX, e.clientY);
		if (!cell) return;
		lastCell.current = cell;
		action.current = decideAction(cell.row, cell.col);
	};
	const onPointerMove = (e) => {
		if (!lastCell.current || !action.current) return;
		const cell = cellFromEvent(e.clientX, e.clientY);
		if (!cell) return;
		if (!(cell.row !== lastCell.current.row || cell.col !== lastCell.current.col)) return;
		if (!dragging.current) {
			dragging.current = true;
			apply(lastCell.current.row, lastCell.current.col, action.current);
		}
		lastCell.current = cell;
		apply(cell.row, cell.col, action.current);
	};
	const onPointerUp = () => {
		if (!dragging.current && lastCell.current && action.current) apply(lastCell.current.row, lastCell.current.col, action.current);
		lastCell.current = null;
		action.current = null;
		dragging.current = false;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex select-none flex-col items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shrink-0",
				style: {
					width: slots * clueW + 8,
					height: slots * clueH + 12
				}
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex",
				children: level.colClues.map((clueGroup, col) => {
					const padded = padClues(clueGroup, slots);
					const solved = solvedCols[col];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-end",
						style: {
							width: cellSize,
							height: slots * clueH + 12
						},
						children: [padded.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("flex items-center justify-center font-body leading-none", solved ? "text-accent" : "text-muted"),
							style: {
								width: cellSize,
								height: clueH,
								fontSize: 16
							},
							children: n ?? ""
						}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("flex h-3 w-full items-center justify-center font-body text-sm leading-none", solved ? "text-accent" : "invisible"),
							children: "v"
						})]
					}, col);
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col justify-center",
				style: { width: slots * clueW + 8 },
				children: level.rowClues.map((clueGroup, row) => {
					const padded = padClues(clueGroup, slots);
					const solved = solvedRows[row];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-end pr-1",
						style: { height: cellSize },
						children: [padded.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("flex items-center justify-center font-body leading-none", solved ? "text-accent" : "text-muted"),
							style: {
								width: clueW,
								height: cellSize,
								fontSize: 16
							},
							children: n ?? ""
						}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("w-3 text-center font-body text-sm leading-none", solved ? "text-accent" : "invisible"),
							children: "v"
						})]
					}, row);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: gridRef,
				className: "touch-none border-[3px] border-accent bg-ink shadow-[3px_3px_0_0_var(--color-ink)]",
				style: {
					width: cellSize * size,
					height: cellSize * size
				},
				onPointerDown,
				onPointerMove,
				onPointerUp,
				onPointerCancel: onPointerUp,
				children: grid.map((row, r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex",
					children: row.map((cell, c) => {
						const thickR = (r + 1) % 5 === 0 && r !== size - 1;
						const thickC = (c + 1) % 5 === 0 && c !== size - 1;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("relative box-border flex items-center justify-center border-r border-b border-muted/35", thickR && "border-b-2 border-b-muted", thickC && "border-r-2 border-r-muted"),
							style: {
								width: cellSize,
								height: cellSize
							},
							children: [cell === "filled" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block size-[82%] bg-fill" }), cell === "marked" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-[9px] leading-none text-muted",
								children: "X"
							})]
						}, `${r}-${c}`);
					})
				}, r))
			})]
		})]
	});
}
function Toggle({ on, onToggle, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onToggle,
		className: "flex w-full items-center justify-between gap-4 border-[3px] border-muted bg-raised px-3 py-3 text-left",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-body text-xl text-fg",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("min-w-14 border-[3px] px-2 py-0.5 text-center font-display text-[10px]", on ? "border-accent bg-accent text-accent-fg" : "border-muted bg-ink text-muted"),
			children: on ? "ON" : "OFF"
		})]
	});
}
function SettingsPanel() {
	const { settingsOpen, setSettingsOpen, settings, setSettings } = useGameStore();
	if (!settingsOpen) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-end justify-center sm:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Close settings",
			className: "absolute inset-0 bg-bg/80",
			onClick: () => setSettingsOpen(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-md border-[3px] border-accent bg-surface p-5 shadow-[4px_4px_0_0_var(--color-ink)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xs text-accent",
						children: "SETTINGS"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Close",
						className: "flex size-10 items-center justify-center border-[3px] border-muted bg-raised text-fg",
						onClick: () => setSettingsOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "size-4",
							strokeWidth: 3
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
						label: "Sound",
						on: settings.sound,
						onToggle: () => setSettings({ sound: !settings.sound })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
						label: "Vibration",
						on: settings.vibrate,
						onToggle: () => setSettings({ vibrate: !settings.vibrate })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-body text-lg leading-snug text-muted",
					children: "Auto-cross and extra helpers land in a later drop. Sound is a tiny square-wave click."
				})
			]
		})]
	});
}
function PixelPreview({ solution, pixelSize = 14 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-[3px] border-accent bg-ink p-1.5 shadow-[3px_3px_0_0_var(--color-ink)]",
		children: solution.map((row, r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex",
			children: row.map((filled, c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: filled ? "bg-fill" : "bg-raised",
				style: {
					width: pixelSize,
					height: pixelSize
				}
			}, `${r}-${c}`))
		}, r))
	});
}
function formatTime$1(total) {
	const m = Math.floor(total / 60);
	const s = total % 60;
	return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
function WinOverlay() {
	const { isWon, seconds, level, initLevel } = useGameStore();
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!isWon) {
			setOpen(false);
			return;
		}
		const t = setTimeout(() => setOpen(true), 420);
		return () => clearTimeout(t);
	}, [isWon]);
	if (!open || !level) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-40 flex items-center justify-center px-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-sm border-[3px] border-accent bg-surface p-6 text-center shadow-[4px_4px_0_0_var(--color-ink)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-[10px] tracking-[0.28em] text-accent",
					children: "COMPLETE"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PixelPreview, {
						solution: level.solution,
						pixelSize: level.size > 7 ? 10 : 14
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-sm leading-relaxed text-fg",
					children: level.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-body text-2xl tabular-nums text-muted",
					children: formatTime$1(seconds)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-5 w-full border-[3px] border-accent bg-accent px-4 py-3 font-display text-[11px] tracking-wide text-accent-fg shadow-[3px_3px_0_0_var(--color-ink)] active:translate-y-px",
					onClick: () => initLevel(level.size),
					children: "NEW LEVEL"
				})
			]
		})]
	});
}
function formatTime(total) {
	const m = Math.floor(total / 60);
	const s = total % 60;
	return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
function computeCellSize(size) {
	if (typeof window === "undefined") return 28;
	const clueCol = maxClueSlots(size) * 16 + 8;
	const width = Math.min(window.innerWidth, 720);
	const height = window.innerHeight;
	const availW = width - 32 - clueCol;
	const availH = height - 250;
	const maxCell = window.innerWidth >= 800 ? 48 : 36;
	return Math.max(18, Math.min(maxCell, Math.floor(availW / size), Math.floor(availH / size)));
}
function GameScreen() {
	const { initLevel, resetLevel, mode, setMode, seconds, level, setSettingsOpen } = useGameStore();
	const size = level?.size ?? 7;
	const [cellSize, setCellSize] = (0, import_react.useState)(28);
	(0, import_react.useEffect)(() => {
		initLevel(7);
	}, [initLevel]);
	(0, import_react.useEffect)(() => {
		const update = () => setCellSize(computeCellSize(size));
		update();
		window.addEventListener("resize", update);
		return () => window.removeEventListener("resize", update);
	}, [size]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-dvh w-full bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "scanlines pointer-events-none fixed inset-0 z-20 opacity-70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-3 pb-6 pt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "mb-3 flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-[9px] tracking-[0.22em] text-accent",
							children: "PICROSS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-1 font-display text-[13px] leading-none text-fg",
							children: "NONO FORGE"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-[3px] border-muted bg-surface px-3 py-2 font-body text-2xl tabular-nums leading-none text-fg",
								children: formatTime(seconds)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionIcon, {
								label: "Settings",
								onClick: () => setSettingsOpen(true),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
									className: "size-4",
									strokeWidth: 2.5
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setMode("fill"),
							className: cn("flex h-11 min-w-28 items-center justify-center gap-2 border-[3px] px-4 font-display text-[10px] shadow-[2px_2px_0_0_var(--color-ink)] active:translate-y-px", mode === "fill" ? "border-accent bg-accent text-accent-fg" : "border-muted bg-surface text-muted"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paintbrush, {
								className: "size-3.5",
								strokeWidth: 2.5
							}), "FILL"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setMode("mark"),
							className: cn("flex h-11 min-w-28 items-center justify-center gap-2 border-[3px] px-4 font-display text-[10px] shadow-[2px_2px_0_0_var(--color-ink)] active:translate-y-px", mode === "mark" ? "border-accent bg-accent text-accent-fg" : "border-muted bg-surface text-muted"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								className: "size-3.5",
								strokeWidth: 3
							}), "MARK"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-1 flex-col items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Board, { cellSize })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2",
							children: [
								5,
								7,
								10
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => initLevel(s),
								className: cn("h-11 min-w-14 border-[3px] px-2 font-body text-xl leading-none shadow-[2px_2px_0_0_var(--color-ink)]", size === s ? "border-accent bg-accent text-accent-fg" : "border-muted bg-surface text-muted"),
								children: [
									s,
									"x",
									s
								]
							}, s))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionIcon, {
								label: "Reset this puzzle",
								onClick: resetLevel,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
									className: "size-4",
									strokeWidth: 2.5
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionIcon, {
								label: "New puzzle",
								onClick: () => initLevel(size),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, {
									className: "size-4",
									strokeWidth: 2.5
								})
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinOverlay, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsPanel, {})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameScreen, {});
}
//#endregion
export { Home as component };
