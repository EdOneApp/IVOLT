"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, type ThreeElements } from "@react-three/fiber";
import * as THREE from "three";

const COLORS = ["#D99A3A", "#1E8F6F", "#4B4FDB"];

// Deterministic pseudo-random generator (mulberry32) so particle/line layout
// is pure and stable across renders instead of calling Math.random() in a
// memo body.
function seededRandom(seed: number) {
  let t = seed + 0x6d2b79f5;
  return () => {
    t = (t + 0x6d2b79f5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function Particles({ count = 420 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });

  const [positions, colors] = useMemo(() => {
    const rand = seededRandom(count);
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const color = new THREE.Color();
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (rand() - 0.5) * 16;
      pos[i * 3 + 1] = (rand() - 0.5) * 9;
      pos[i * 3 + 2] = (rand() - 0.5) * 8;
      color.set(COLORS[i % COLORS.length]);
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return [pos, col];
  }, [count]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.025;
    const targetX = mouse.current.x * 0.25;
    const targetY = mouse.current.y * 0.15;
    pointsRef.current.rotation.x += (targetY - pointsRef.current.rotation.x) * 0.02;
    pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function Lines() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (groupRef.current) groupRef.current.rotation.y -= delta * 0.015;
  });

  const segments = useMemo(() => {
    const rand = seededRandom(17);
    const arr: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < 7; i++) {
      const a = new THREE.Vector3(
        (rand() - 0.5) * 10,
        (rand() - 0.5) * 6,
        (rand() - 0.5) * 4
      );
      const b = a
        .clone()
        .add(new THREE.Vector3((rand() - 0.5) * 2.5, (rand() - 0.5) * 2.5, 0));
      arr.push([a, b]);
    }
    return arr;
  }, []);

  return (
    <group ref={groupRef}>
      {segments.map((seg, i) => (
        <line key={i}>
          <bufferGeometry attach="geometry" onUpdate={(geo) => geo.setFromPoints(seg)} />
          <lineBasicMaterial attach="material" color="#D99A3A" transparent opacity={0.18} />
        </line>
      ))}
    </group>
  );
}

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

const fallbackStyle = {
  background:
    "radial-gradient(ellipse 60% 50% at 80% 10%, rgba(217,154,58,.18), transparent 60%), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(30,143,111,.16), transparent 60%)",
};

export function ParticleField({ className }: { className?: string }) {
  const [canRender, setCanRender] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // One-shot browser feature detection (matchMedia/WebGL are unavailable
    // during render/SSR) — not a state-sync loop, so a direct setState here
    // is the correct, non-cascading pattern.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCanRender(!prefersReducedMotion && hasWebGL());
  }, []);

  if (!canRender || hasError) {
    return <div className={className} style={fallbackStyle} />;
  }

  return (
    <Canvas
      className={className}
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener("webglcontextlost", () => setHasError(true));
      }}
      onError={() => setHasError(true)}
    >
      <Particles />
      <Lines />
    </Canvas>
  );
}

export type { ThreeElements };
