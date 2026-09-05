import {useGLTF} from '@react-three/drei'

export default function Room(props) {
    const {scene} = useGLTF('/models/room.glb')
    return (<primitive object={scene} scale={0.001} rotation={[-Math.PI / 2, 0, 0]} position={[-2, -0.05, 2]} {...props} />)
}

useGLTF.preload('/models/room.glb')