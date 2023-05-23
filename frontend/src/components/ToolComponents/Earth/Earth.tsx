import React, { useEffect } from 'react'
import { useRef } from 'react';

import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stage } from '@react-three/drei'
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

  const cloudsRef = useRef<Mesh>(null);
  const earthRef = useRef<Mesh>(null);
  const pointLightRef = useRef<THREE.PointLight>(null);

  useFrame(( state , ) => {
    const {x, y, z} = state.camera.position;
    pointLightRef.current.position.set(x,y,z)
  });

  useEffect(() => {
    const cloudsMesh = cloudsRef.current;
    const earthMesh = earthRef.current;

    return () => {

      aoMap.dispose();
      baseMap.dispose();
      heightMap.dispose();
      metallicMap.dispose();
      normalMap.dispose();
      roughnessMap.dispose();
      cloudsMap.dispose();


      cloudsMesh.material = null;
      earthMesh.material = null;

      cloudsRef.current = null;
      earthRef.current = null;
      pointLightRef.current = null;
    };
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight ref={pointLightRef}
                  color='#fffec4'
                  intensity={1}>

      </pointLight>
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
            bumpScale={0.5}
          />
        </mesh>
      </Stage>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        rotateSpeed={0.1}
        autoRotate={true}
        autoRotateSpeed={0.15}
      />
    </>
  );
}
