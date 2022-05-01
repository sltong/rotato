import { Suspense, useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Potato({ ...props }) {
  const potatoMesh = useRef()
  const gltf = useLoader(GLTFLoader, '/potato/scene.gltf')

  useFrame(({ clock }) => {
    potatoMesh.current.rotation.x = 0.5 * clock.getElapsedTime()
    potatoMesh.current.rotation.y = -0.5 * clock.getElapsedTime()
    potatoMesh.current.rotation.z = 0.5 * clock.getElapsedTime()
  })

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} ref={potatoMesh}/>
    </Suspense>
  )
}
