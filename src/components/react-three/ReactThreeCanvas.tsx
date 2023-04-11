import { Canvas } from '@react-three/fiber';
import { Fragment } from 'react';
import FiberImage from './FiberImage';
import FiberBox from './FiberBox';

export default function ReactThreeCanvas() {
  return (
    <Fragment>
      <Canvas className="border">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <FiberBox position={[0, 0, 0]} scale={2} />
        <FiberImage position={[0, 0, 0]} scale={3} />
      </Canvas>
    </Fragment>
  );
}
