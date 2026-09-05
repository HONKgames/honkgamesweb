import {OrbitControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {Suspense} from 'react'
import Room from './scene/Room'

export default function App()
{
  return(
    <Canvas camera={{position: [0, 1.2, 1.5], fov: 60}} dpr = {[1, 2]}>
      <ambientLight intensity={1.2}/>
      <directionalLight position={[2, 4, 3]} intensity={2}/>
      <Suspense fallback={null}>
        <Room />
      </Suspense>
      <OrbitControls target={[0, 1.2, 0]} enablePan={false} enableZoom={false} minPolarAngle={Math.PI/3} maxPolarAngle={(Math.PI * 2)/3}/>
    </Canvas>
  )
}