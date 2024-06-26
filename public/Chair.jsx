/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 chair.gltf 
Author: vUv (https://sketchfab.com/vovaustimuk)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/chair-b07d263a7ab942e6935e77cd75bf1194
Title: CHAIR
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/chair.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_3.geometry} material={materials.Material} position={[-1.877, -0.18, -8.205]} />
      </group>
    </group>
  )
}

useGLTF.preload('/chair.gltf')
