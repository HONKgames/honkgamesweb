import {Html} from '@react-three/drei'
import {useState} from 'react'

const CAB = [0.62, 0.52, 0.48]
const SCREEN = [0.46, 0.35]
const FRONT = CAB[2] / 2

export default function TV({position = [0, 0.75, -1.6]})
{
    const [on, setOn] = useState(false)
    return (
        <group position={position}>
            <mesh position={[0, -0.5, 0]}> {/*stand*/}
                <boxGeometry args={[0.9, 0.48, 0.42]}/>
                <meshStandardMaterial color="#4a3728" roughness={0.9}/>
            </mesh>
            <mesh> {/*cabinet*/}
                <boxGeometry args={CAB}/>
                <meshStandardMaterial color="#6b5644" roughness={0.8}/>
            </mesh>
            <mesh position={[0, 0.02, FRONT+0.001]} onClick={(e) => {
                e.stopPropagation()
                setOn(!on)
            }}
            onPointerOver={() => (document.body.style.cursor='pointer')}
            onPointerOut={() => (document.body.style.cursor='auto')}
            >
                <planeGeometry args={SCREEN}/>
                <meshStandardMaterial color={"#0d0f13"}/>
            </mesh>
            {on && (
                <Html
                transform
                occlude
                position={[0, 0.02, FRONT + 0.002]}
                scale={0.04}
                style={{
                    width: `${SCREEN[0] * 1000}px`,
                    height: `${SCREEN[1] * 1000}px`,
                    background: '#ff00ff',
                }}
            >
                <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'grid',
                    placeItems: 'center',
                    color: '#ffffff',
                    font: 'bold 40px system-ui',
                }}
                >
                    TEE VEE
                </div>
            </Html>
            )}
        </group>
    )
}