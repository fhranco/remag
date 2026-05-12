"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Float, Environment } from "@react-three/drei";
import { Bloom, Noise, Vignette, EffectComposer } from "@react-three/postprocessing";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { random } from "maath";

// 🦅 ULTRA-REAL 3D BIRD BEHAVIOR (Banking & Dipping)
function Bird({ startY, speed, delay, color }: { startY: number, speed: number, delay: number, color: string }) {
  const birdRef = useRef<THREE.Group>(null!);
  const wingsRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const cycle = (time * speed + delay) % 20;
    
    if (birdRef.current) {
        // ✨ Movement (Left to Right)
        birdRef.current.position.x = cycle - 10;
        
        // ✨ Dipping & Climbing (Ecosystem storytelling)
        const dip = Math.sin(time * 0.5) * 0.3;
        birdRef.current.position.y = startY + dip;

        // ✨ Banking (Tilt while climbing/dipping)
        birdRef.current.rotation.z = Math.cos(time * 0.5) * 0.2;
        birdRef.current.rotation.y = Math.PI / 2 + Math.sin(time * 0.1) * 0.1;
    }
    
    // ✨ Flapping (3D High-Fidelity)
    if (wingsRef.current) {
        wingsRef.current.children[0].rotation.z = Math.sin(time * 12) * 0.6;
        wingsRef.current.children[1].rotation.z = -Math.sin(time * 12) * 0.6;
    }
  });

  return (
    <group ref={birdRef} scale={0.12}>
      <group ref={wingsRef}>
        {/* Left Wing (Angled for 3D depth) */}
        <mesh position={[-0.5, 0, 0]} rotation={[0.2, 0, 0]}>
          <planeGeometry args={[1.2, 0.25]} />
          <meshBasicMaterial color={color} side={THREE.DoubleSide} transparent opacity={0.6} />
        </mesh>
        {/* Right Wing */}
        <mesh position={[0.5, 0, 0]} rotation={[0.2, 0, 0]}>
          <planeGeometry args={[1.2, 0.25]} />
          <meshBasicMaterial color={color} side={THREE.DoubleSide} transparent opacity={0.6} />
        </mesh>
      </group>
      {/* Body Core */}
      <mesh scale={[0.1, 0.1, 0.4]}>
          <boxGeometry />
          <meshBasicMaterial color={color} />
      </mesh>
    </group>
  );
}

function BirdFlock() {
    return (
        <>
            <Bird startY={1.2} speed={0.9} delay={0} color="#0047AB" />
            <Bird startY={0} speed={1.3} delay={4} color="#1B9905" />
            <Bird startY={-1.5} speed={0.7} delay={12} color="#009999" />
            <Bird startY={0.8} speed={1.1} delay={18} color="#153D5A" />
        </>
    );
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  const { mouse, viewport } = useThree();
  
  const sphere = useMemo(() => {
    return random.inSphere(new Float32Array(9000), { radius: 3 }) as Float32Array;
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 30;
    ref.current.rotation.y -= delta / 35;

    const targetX = (mouse.x * viewport.width) / 12;
    const targetY = (mouse.y * viewport.height) / 12;
    
    ref.current.position.x += (targetX - ref.current.position.x) * 0.03;
    ref.current.position.y += (targetY - ref.current.position.y) * 0.03;
  });

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#1B9905" // Green
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <Points positions={sphere.slice(0, 3000) as unknown as Float32Array} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#009999" // Teal
          size={0.006}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
}

export function HeroScene() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ powerPreference: "high-performance" }}>
        <color attach="background" args={["#FFFFFF"]} />
        <ambientLight intensity={1} />
        <Environment preset="night" />
        
        <ParticleField />
        <BirdFlock />

        {/* 🎬 CINEMATIC POST-PROCESSING (The "Real" Look) */}
        <EffectComposer disableNormalPass>
            <Bloom intensity={1.5} luminanceThreshold={0.4} luminanceSmoothing={0.9} height={300} />
            <Noise opacity={0.03} />
            <Vignette eskil={false} offset={0.1} darkness={0.8} />
        </EffectComposer>
        
      </Canvas>
    </div>
  );
}
