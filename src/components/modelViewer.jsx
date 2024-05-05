import { Canvas,useLoader,Scene,PerspectiveCamera,BoxGeometry,Mes } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Environment, Loader } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = () => {
    const gltf = useLoader(GLTFLoader, '/book.glb'); // Adjust the path to your model file
    return <primitive object={gltf.scene} />;
};

const ModelViewer = () => {


   

    return (
        <>
            <Canvas className=''>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    <Model />
                    <OrbitControls />
                </Suspense>
            </Canvas>
            <Loader />
        </>
    );
};

export default ModelViewer;