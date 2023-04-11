import {
  Image,
  ImageProps,
  Plane,
  RoundedBox,
  ScreenQuad,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function FiberImage(props: any) {
  const meshRef = useRef<any>(null);
  const stickerImageRef = useRef<any>(null);

  useFrame((state, delta) => {
    stickerImageRef.current.material.zoom = 1;
    // stickerImageRef.current.rotation.y += delta;

    // meshRef.current.rotation.x += delta;
    // meshRef.current.rotation.y += delta;
    // meshRef.current.rotation.z += delta;
  });

  return (
    <mesh {...props} ref={meshRef}>
      {/* <Plane args={[1, 1]}>
        <meshBasicMaterial color={'orange'} side={THREE.DoubleSide} />
      </Plane> */}
      <Image ref={stickerImageRef} opacity={1} url={'/lightning.png'}></Image>
    </mesh>
  );
}
