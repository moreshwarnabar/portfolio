import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';

{
  /* <div className="absolute inset-x-0 top-28 z-10 flex items-center justify-center">
  POPUP
</div> */
}

const Home = () => {
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

  const [screenScale, screenPos, rotation] = adjustIslandForScreenSize();

  return (
    <section className="relative h-screen w-full">
      <Canvas
        className="h-screen w-full bg-transparent"
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

          <Plane />
          <Bird />
          <Sky />
          <Island
            position={screenPos}
            scale={screenScale}
            rotation={rotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
