import { BoxGeometry, Sphere, SphereGeometry } from "three";
import { useThree, extend, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useControls } from "leva";
import { OrbitControls, useGLTF} from "@react-three/drei";

import { Perf } from "r3f-perf";

export default function Experience() {

    const model = useGLTF('./api/uploads/low_poly_camera_model.glb')
    
    // const { perfVisible } = useControls({ 
    //     perfVisible: true
    // });
    
    // console.log(position)

    // useFrame(() =>
    //     {
    //         cubeRef.current.rotation.y += 0.002;
    //     });

    const cubeRef = useRef();

    const { camera, gl } = useThree();
    
    return (
        <>

            {/* { perfVisible && <Perf position="top-left" /> } */}
            <OrbitControls makeDefault />

            <directionalLight castShadow position={[3,2,1]} intensity={4} />
            <ambientLight intensity={ 1.5 } />

            <primitive object={ model.scene } />

        </>
        
    );
}