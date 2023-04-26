import React, { useState } from 'react'
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
import { IEarth } from '../../../types/models/IEarth'
import CircularProgress from '@mui/material/CircularProgress'
import { useGetEarthByIdQuery } from '../../../store/services/EarthService'

export function Earth(data: IEarth) {

  const map = useLoader(TextureLoader, data.baseMap)
  const map1 = useLoader(TextureLoader, data.baseMap)
  const map2 = useLoader(TextureLoader, data.baseMap)
  const map3 = useLoader(TextureLoader, data.baseMap)

  // const [aoMap, baseMap, heightMap, metallicMap, normalMap, roughnessMap, cloudsMap] = useLoader(TextureLoader, [
  //   data.ambientMap,
  //   data.baseMap,
  //   data.heightMap,
  //   data.metallicMap,
  //   data.normalMap,
  //   data.roughnessMap,d
  //   data.cloudMap,
  // ]);

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
         // map={data}
         opacity={0}
         depthWrite={true}
         transparent={true}
         side={THREE.DoubleSide}
       />
      </mesh>
      <mesh scale={[3,3,3]} ref={earthRef}>
        <sphereGeometry args={[1, 64, 32]} />
        <meshStandardMaterial
          map={map}
          // normalMap={normalMap}
          // metalnessMap={metallicMap}
          // displacementMap={heightMap}
          // bumpMap={heightMap}
          // displacementScale = {0.01}
          // aoMap={aoMap}
          // roughnessMap={roughnessMap}
        />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} rotateSpeed={0.15} />
      </mesh>
      </>
  );
}
