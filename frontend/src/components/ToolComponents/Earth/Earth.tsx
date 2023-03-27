import * as React from 'react';
import { useRef } from 'react';

import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { Mesh } from 'three';

import Metallic from '../../../assets/textures/metallic.png';
import Roughness from '../../../assets/textures/roughness.png';

import EarthDayMap from '../../../assets/textures/Earth_Diffuse.jpg';
import EarthNormalMap from '../../../assets/textures/Earth_Normal.jpg';
import EarthSpecularMap from '../../../assets/textures/Earth_Specular.jpg';
import EarthCloudMap from '../../../assets/textures/Earth_Cloud.jpg';



import './Earth.scss'

export function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [
    EarthDayMap,
    EarthNormalMap,
    EarthSpecularMap,
    EarthCloudMap,
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
      <ambientLight intensity={0.8} />
      <pointLight color="#ffffde" position={[2, 0, 2]} intensity={2} />
      <mesh scale={[3,3,3]} ref={cloudsRef}>
       <sphereGeometry args={[1.01, 32, 32]} />
       <meshPhongMaterial
         map={cloudsMap}
         opacity={0.3}
         depthWrite={true}
         transparent={true}
         side={THREE.DoubleSide}
       />
      </mesh>
      <mesh scale={[3,3,3]} ref={earthRef}>
        <sphereGeometry args={[1, 64, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} rotateSpeed={0.15} />
      </mesh>
      </>
  );
}
