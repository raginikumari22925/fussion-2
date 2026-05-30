import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#06b6d4"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      position: [
        Math.cos((i / 12) * Math.PI * 2) * (3 + Math.random() * 2),
        (Math.random() - 0.5) * 4,
        Math.sin((i / 12) * Math.PI * 2) * (3 + Math.random() * 2),
      ] as [number, number, number],
      scale: 0.05 + Math.random() * 0.08,
      phase: Math.random() * Math.PI * 2,
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      nodes.forEach((node, i) => {
        const child = groupRef.current!.children[i] as THREE.Mesh;
        if (child) {
          child.position.y = node.position[1] + Math.sin(state.clock.elapsedTime + node.phase) * 0.3;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position} scale={node.scale}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color="#06b6d4" wireframe />
        </mesh>
      ))}
    </group>
  );
}

function FloatingRings() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.08;
      ref.current.rotation.y = state.clock.elapsedTime * 0.12;
    }
  });

  return (
    <group ref={ref}>
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[3.5, 0.015, 8, 100]} />
        <meshBasicMaterial color="#0ea5e9" transparent opacity={0.25} />
      </mesh>
      <mesh rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[4.5, 0.01, 8, 100]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.15} />
      </mesh>
      <mesh rotation={[-Math.PI / 5, Math.PI / 4, 0]}>
        <torusGeometry args={[2.5, 0.02, 8, 100]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

function CentralCore() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
      ref.current.rotation.z = state.clock.elapsedTime * 0.15;
      const s = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
      ref.current.scale.setScalar(s);
    }
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.7, 1]} />
      <meshBasicMaterial color="#06b6d4" wireframe transparent opacity={0.7} />
    </mesh>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      style={{ background: 'transparent' }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />
      <ParticleField />
      <NetworkNodes />
      <FloatingRings />
      <CentralCore />
    </Canvas>
  );
}
