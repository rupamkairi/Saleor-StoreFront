import { Box, Extrude, RoundedBox, useCubeTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

export default function FiberBox(props: any) {
  const mesh: any = useRef();
  const envMap = useCubeTexture(
    [
      'lightning.png',
      'lightning.png',
      'lightning.png',
      'lightning.png',
      'lightning.png',
      'lightning.png',
    ],
    {
      path: '/',
    },
  );

  useFrame((state, delta) => {
    // mesh.current.rotation.x += delta;
    mesh.current.rotation.y += delta;
    // mesh.current.rotation.z += delta;
  });

  return (
    <mesh {...props} ref={mesh}>
      <RoundedBox args={[1, 1, 0.1]} scale={1} radius={0.05} smoothness={2}>
        {/* <meshStandardMaterial color={'orange'} /> */}
        <meshBasicMaterial envMap={envMap} />
      </RoundedBox>
    </mesh>
  );
}
