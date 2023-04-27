import React, { useState } from 'react'
import { useRef } from 'react';

import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stars, CubeCamera, CameraControls, Stage, Segments } from '@react-three/drei'
import * as THREE from 'three';
import { Mesh, PointLight} from 'three';

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
  const pointLightRef = useRef<THREE.PointLight>(null!);

  useFrame(( state , ) => {
    const {x, y, z} = state.camera.position;
    pointLightRef.current.position.set(x,y,z)
  });


  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight ref={pointLightRef} color='#fffec4' intensity={2}></pointLight>
      <Stage intensity={0} environment={null}>
        <mesh scale={[3,3,3]} ref={cloudsRef}>
          {/* clouds */}
         <sphereGeometry args={[1.03, 32, 32]} />
         <meshStandardMaterial
           map={cloudsMap}
           opacity={0.05}
           depthWrite={true}
           transparent={true}
           side={THREE.DoubleSide}
         />
        </mesh>
        <mesh scale={[3,3,3]} ref={earthRef} >
          <sphereGeometry args={[1, 1024, 1024]} />
          <meshStandardMaterial
            map={baseMap}
            aoMap={aoMap}
            aoMapIntensity={0.5}
            bumpMap={heightMap}
            polygonOffset={true}
            roughnessMap={roughnessMap}
            roughness={0}
            metalnessMap={metallicMap}
            metalness={0.1}
            normalMap={normalMap}
            bumpScale={0.005}
          />
        </mesh>
      </Stage>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} rotateSpeed={0.15} autoRotate={true} autoRotateSpeed={0.15} />
      {/* <ambientLight intensity={.5} /> */}
      {/* <directionalLight position={[1, 1, 1]} intensity={0.8}  /> */}
      {/* <mesh scale={[3,3,3]} ref={cloudsRef}> */}
      {/*   /!* clouds *!/ */}
      {/*  <sphereGeometry args={[1.03, 32, 32]} /> */}
      {/*  <meshPhongMaterial */}
      {/*    map={cloudsMap} */}
      {/*    opacity={0} */}
      {/*    depthWrite={true} */}
      {/*    transparent={true} */}
      {/*    side={THREE.DoubleSide} */}
      {/*  /> */}
      {/* </mesh> */}
      {/* <mesh scale={[3,3,3]} ref={earthRef}> */}
      {/*   <sphereGeometry args={[1, 32, 32]} /> */}
      {/*   <meshStandardMaterial */}
      {/*     map={baseMap} */}
      {/*     aoMap={aoMap} */}
      {/*     aoMapIntensity={0.5} */}
      {/*     bumpMap={heightMap} */}
      {/*     roughnessMap={roughnessMap} */}
      {/*     roughness={0} */}
      {/*     metalnessMap={metallicMap} */}
      {/*     metalness={1} */}
      {/*     normalMap={normalMap} */}
      {/*     bumpScale={1} */}
      {/*   /> */}
      {/*   <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} rotateSpeed={0.15} /> */}
      {/* </mesh> */}
    </>
  );
}
