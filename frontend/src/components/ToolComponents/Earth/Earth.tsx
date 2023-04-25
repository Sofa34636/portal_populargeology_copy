import React from 'react';
import { useRef } from 'react';

import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { Mesh } from 'three';

import ao from '../../../assets/textures/blackEarth/ao.png';
import base from '../../../assets/textures/blackEarth/base.png';
import height from '../../../assets/textures/blackEarth/height.png';
import metallic from '../../../assets/textures/blackEarth/metallic.png';
import normal from '../../../assets/textures/blackEarth/normal.png';
import output from '../../../assets/textures/blackEarth/output.png';
import roughness from '../../../assets/textures/blackEarth/roughness.png';
import clouds from '../../../assets/textures/blackEarth/clouds/basecolor.png';

import './Earth.scss'

export function Earth(props) {

  const [aoMap, baseMap, heightMap, metallicMap, normalMap, outputMap, roughnessMap, cloudsMap] = useLoader(TextureLoader, [
    ao,
    base,
    height,
    metallic,
    normal,
    output,
    roughness,
    clouds,
  ]);

  const cloudsRef = useRef<Mesh>(null!);
  const earthRef = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 12;
    cloudsRef.current.rotation.y = elapsedTime / 12;
  });

  return (
      <>
      <ambientLight intensity={1} />
      <pointLight color="#ffffde" position={[2, 0, 2]} intensity={3} />
      <mesh scale={[3,3,3]} ref={cloudsRef}>
       <sphereGeometry args={[1.01, 32, 32]} />
       <meshPhongMaterial
         map={cloudsMap}
         opacity={0.2}
         depthWrite={true}
         transparent={true}
         side={THREE.DoubleSide}
       />
      </mesh>
      <mesh scale={[3,3,3]} ref={earthRef}>
        <sphereGeometry args={[1, 64, 32]} />
        <meshStandardMaterial
          map={baseMap}
          normalMap={normalMap}
          metalnessMap={metallicMap}
          // displacementMap={heightMap}
          bumpMap={heightMap}
          // displacementScale = {0.01}
          aoMap={aoMap}
          roughnessMap={roughnessMap}
        />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} rotateSpeed={0.15} />
      </mesh>
      </>
  );
}
