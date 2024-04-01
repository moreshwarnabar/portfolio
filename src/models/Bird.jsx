import React, { useEffect, useRef } from 'react';

import birdScene from '../assets/3d/bird.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Bird = () => {
  const ref = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions['Take 001'].play();
  }, []);

  useFrame(({ clock, camera }) => {
    // update the y pos to simulate the flight by moving in a sin wave
    ref.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // check if the bird has reached a certain endpoint relative to the camera
    if (ref.current.position.x > camera.position.x + 10) {
      ref.current.rotation.y = Math.PI;
    } else if (ref.current.position.x < camera.position.x - 10) {
      ref.current.rotation.y = 0;
    }

    // update the x and z pos based on the direction
    if (ref.current.rotation.y === 0) {
      // forward
      ref.current.position.x += 0.01;
      ref.current.position.z -= 0.01;
    } else {
      // backward
      ref.current.position.x -= 0.01;
      ref.current.position.z += 0.01;
    }
  });

  return (
    <mesh ref={ref} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
