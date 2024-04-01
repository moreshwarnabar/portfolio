import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';

import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';

{
  /* <div className="absolute inset-x-0 top-28 z-10 flex items-center justify-center">
  POPUP
</div> */
}

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState();

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    const screenPos = [0, -6.5, -43];
    const rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPos, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPos;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPos = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPos = [0, -4, -4];
    }

    return [screenScale, screenPos];
  };

  const [islandScale, islandPos, islandRot] = adjustIslandForScreenSize();
  const [planeScale, planePos] = adjustPlaneForScreenSize();

  return (
    <section className="relative h-screen w-full">
      <div className="absolute inset-x-0 top-28 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`h-screen w-full bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPos}
            scale={islandScale}
            rotation={islandRot}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            scale={planeScale}
            position={planePos}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
