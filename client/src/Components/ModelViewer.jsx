import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';

export default function ModelViewer({ modelPath }) {

    console.log("MOdel path: ", modelPath);
    
    const { scene } = useGLTF(modelPath);

    return (
            <Canvas>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />

                <Suspense fallback={null}>
                    <primitive object={scene} scale={0.5} />
                </Suspense>

                <OrbitControls />
            </Canvas>
    );
}