import React, {useRef, useEffect} from 'react';
import * as THREE from 'three';

const ModelViewer = ({ modelURL }) => {
    const mountRef = useRef(null);

    useEffect( () => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // const loader = new THREE.ObjectLoader();
        // loader.load(modelURL, (object) => {
        //     scene.add(object);
        // });

        camera.position.z =5;

        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.02;
            cube.rotation.y += 0.02;
            renderer.render(scene, camera);
        };
        animate();

        return () => mountRef.current.removeChild(renderer.domElement);
    }, [modelURL]);

    return <div ref={mountRef} />;
};

export default ModelViewer;