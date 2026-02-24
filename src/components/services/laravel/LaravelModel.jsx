 
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function LaravelModel(props) {
  const { nodes, materials } = useGLTF('/laravelModel.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['SVGMat.003']} position={[0.002, 0.123, 0.16]} rotation={[0, 0, 0.18]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['SVGMat.001']} position={[0.042, 0.148, 0.164]} rotation={[Math.PI / 2, 0.18, -Math.PI / 2]} scale={0.929} />
    </group>
  )
}

useGLTF.preload('/laravelModel.glb')
