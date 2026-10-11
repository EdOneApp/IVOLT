const SPARK_COLORS = ["#D99A3A", "#1E8F6F", "#4B4FDB", "#F0D4A0"];

// Deterministic pseudo-random so the spark layout is pure (no Math.random
// during render) and stable across hydration.
function seededRandom(seed: number) {
  let t = seed + 0x6d2b79f5;
  return () => {
    t = (t + 0x6d2b79f5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function buildSparks(count: number, seed: number) {
  const rand = seededRandom(seed);
  return Array.from({ length: count }, (_, i) => {
    const size = 2 + rand() * 4;
    return {
      key: i,
      left: `${rand() * 100}%`,
      bottom: `${rand() * 70}%`,
      size,
      color: SPARK_COLORS[i % SPARK_COLORS.length],
      duration: `${4 + rand() * 5}s`,
      delay: `${-rand() * 8}s`,
      drift: `${-60 - rand() * 120}px`,
      sway: `${(rand() - 0.5) * 60}px`,
      opacity: 0.4 + rand() * 0.5,
    };
  });
}

export function AmbientSparks({
  count = 18,
  seed = 7,
  className,
}: {
  count?: number;
  seed?: number;
  className?: string;
}) {
  const sparks = buildSparks(count, seed);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className ?? ""}`} aria-hidden="true">
      {sparks.map((s) => (
        <span
          key={s.key}
          className="spark-particle"
          style={{
            left: s.left,
            bottom: s.bottom,
            width: s.size,
            height: s.size,
            background: s.color,
            boxShadow: `0 0 ${s.size * 2.5}px ${s.size * 0.8}px ${s.color}66`,
            ["--spark-duration" as string]: s.duration,
            ["--spark-delay" as string]: s.delay,
            ["--spark-drift" as string]: s.drift,
            ["--spark-sway" as string]: s.sway,
            ["--spark-opacity" as string]: s.opacity,
          }}
        />
      ))}
    </div>
  );
}
