import { useLayoutEffect, useMemo, useRef } from 'react';
import type { ReactNode } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Color } from 'three';
import type { IUniform, Mesh, ShaderMaterial } from 'three';
import { fragmentShader, vertexShader } from './shaders';

type NormalizedRGB = [number, number, number];

const hexToNormalizedRGB = (hex: string): NormalizedRGB => {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;
  return [r, g, b];
};

interface SilkUniforms {
  uSpeed: IUniform<number>;
  uScale: IUniform<number>;
  uNoiseIntensity: IUniform<number>;
  uColor: IUniform<Color>;
  uRotation: IUniform<number>;
  uTime: IUniform<number>;
  [uniform: string]: IUniform;
}

interface SilkPlaneProps {
  uniforms: SilkUniforms;
}

function SilkPlane({ uniforms }: SilkPlaneProps) {
  const meshRef = useRef<Mesh>(null);
  const { viewport } = useThree();

  useLayoutEffect(() => {
    meshRef.current?.scale.set(viewport.width, viewport.height, 1);
  }, [viewport]);

  useFrame((_state, delta) => {
    const material = meshRef.current?.material as ShaderMaterial | undefined;
    if (material?.uniforms.uTime) {
      material.uniforms.uTime.value += delta;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

interface SilkBackgroundProps {
  children?: ReactNode;
  className?: string;
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
  rotation?: number;
}

function SilkBackground({
  children,
  className = '',
  speed = 1,
  scale = 1,
  color = '#2d1b69',
  noiseIntensity = 0.8,
  rotation = 0,
}: SilkBackgroundProps) {
  const uniforms = useMemo<SilkUniforms>(
    () => ({
      uSpeed: { value: speed },
      uScale: { value: scale },
      uNoiseIntensity: { value: noiseIntensity },
      uColor: { value: new Color(...hexToNormalizedRGB(color)) },
      uRotation: { value: rotation },
      uTime: { value: 0 },
    }),
    [speed, scale, noiseIntensity, color, rotation]
  );

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      <Canvas
        dpr={[1, 2]}
        frameloop="always"
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      >
        <SilkPlane uniforms={uniforms} />
      </Canvas>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default SilkBackground;
