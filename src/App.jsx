import {OrbitControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {Suspense} from 'react'
import Room from './scene/Room'

export default function App()
{
  return(
    <Canvas camera={{position: [0, 1.2, 1.5], fov: 60}} dpr = {[1, 2]}>
      <ambientLight intensity={0.15}/>
      <color attach="background" args={['#c17324']} />
      <pointLight position={[1.2, 1.0, -1.2]} intensity={5} distance={6} decay={2} color="#ffb86b"/> {/*lamp*/}
      <pointLight position={[0, 2.3, 0]} intensity={3} distance={8} decay={2} color="#ffd9a0"/> {/*ceiling light*/}
      <directionalLight position={[-4, 1.6, 0]} intensity={0.8} color="#ff8400"/> {/*window light*/}
      <Suspense fallback={null}>
        <Room />
      </Suspense>
      <OrbitControls target={[0, 1.2, 0]} enablePan={false} enableZoom={false} minPolarAngle={Math.PI/3} maxPolarAngle={(Math.PI * 2)/3}/>
    </Canvas>
  )
}