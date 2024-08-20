import { BoxGeometry, Sphere, SphereGeometry } from "three";
import { useThree, extend, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useControls } from "leva";
import { OrbitControls, useGLTF} from "@react-three/drei";
import { Canvas } from '@react-three/fiber';

import { Perf } from "r3f-perf";

export default function Experience() {

    const model = useGLTF('https://github.com/foenyxr/modelxyz/blob/c65ebb5fec1ac1daab9a023b40c51f3549edc83c/api/uploads/pile_of_poo_emoji.glb')
    
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