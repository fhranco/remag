"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function RotatingRing({ radius, speed, color, opacity = 0.3 }: { radius: number, speed: number, color: string, opacity?: number }) {
  const ref = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.z = time * speed;
    ref.current.rotation.x = Math.sin(time * 0.5) * 0.2;
  });

  return (
    <group ref={ref}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.01, 16, 100]} />
        <meshBasicMaterial color={color} transparent opacity={opacity} />
      </mesh>
      {/* Small spheres on the ring to represent "particles" or "residuos" */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[Math.cos(i * 2) * radius, 0, Math.sin(i * 2) * radius]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color={color} />
        </mesh>
      ))}
    </group>
  );
}

function CoreDistortion() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh scale={1.5}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#154e70"
          speed={3}
          distort={0.4}
          radius={1}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

export default function CircularFlowScene() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Environment preset="night" />
        
        <CoreDistortion />
        
        <RotatingRing radius={2.5} speed={0.2} color="#009999" />
        <RotatingRing radius={3.2} speed={-0.15} color="#1b9905" opacity={0.2} />
        <RotatingRing radius={1.8} speed={0.4} color="#006666" />
        
      </Canvas>
    </div>
  );
}
