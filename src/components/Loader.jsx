import React from 'react';
import { Html } from '@react-three/drei';

const Loader = () => {
  return (
    <Html>
      <div className="flex items-center justify-center">
        <div className="size-20 animate-spin rounded-full border-2 border-blue-500/20" />
      </div>
    </Html>
  );
};

export default Loader;
