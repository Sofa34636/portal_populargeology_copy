import React, { useState } from 'react'
import { useRef } from 'react';

import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { Mesh } from 'three';

import './Earth.scss'
import { IEarth } from '../../../types/models/IEarth'

export function Earth(data: IEarth) {

  const [aoMap, baseMap, heightMap, metallicMap, normalMap, roughnessMap, cloudsMap] = useLoader(TextureLoader, [
    data.ambientMap,
    data.baseMap,
    data.heightMap,
    data.metallicMap,
    data.normalMap,
    data.roughnessMap,
    data.cloudMap,
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
        {/* clouds */}
       <sphereGeometry args={[1.01, 32, 32]} />
       <meshPhongMaterial
         map={cloudsMap}
         opacity={0}
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
          displacementMap={heightMap}
          bumpMap={heightMap}
          displacementScale = {0.1}
          aoMap={aoMap}
          roughnessMap={roughnessMap}
        />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} rotateSpeed={0.10} />
      </mesh>
      </>
  );
}
