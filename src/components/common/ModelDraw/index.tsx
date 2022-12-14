import React, { Suspense } from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

const Scene = () => {
  const fbx = useLoader(FBXLoader, '/models/bee/bee.fbx')

  return <primitive object={fbx} scale={0.05} />
}

const ModelDrawContainer = tw.div`bg-white md:w-[calc(100vw/2)]  md:h-[calc(100vh/2)] justify-center border-2  mx-2 md:mx-auto`

const ModelDraw: FC = () => (
  <ModelDrawContainer>
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight />
        <Scene />
        <OrbitControls />
      </Suspense>
    </Canvas>
  </ModelDrawContainer>
)

export default ModelDraw
