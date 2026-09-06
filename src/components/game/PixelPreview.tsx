interface Props {
  solution: boolean[][];
  pixelSize?: number;
}

export function PixelPreview({ solution, pixelSize = 14 }: Props) {
  return (
    <div className="border-[3px] border-accent bg-ink p-1.5 shadow-[3px_3px_0_0_var(--color-ink)]">
      {solution.map((row, r) => (
        <div key={r} className="flex">
          {row.map((filled, c) => (
            <span
              key={`${r}-${c}`}
              className={filled ? "bg-fill" : "bg-raised"}
              style={{ width: pixelSize, height: pixelSize }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
