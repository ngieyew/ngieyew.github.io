import React, { useRef } from 'react';

import * as THREE from 'three';
import { useLoader } from 'react-three-fiber';

// import frontCard from '../assets/chinese-business-card-translation-samples-intel-445-eng.jpg';
// import backCard from '../assets/chinese-business-card-translation-samples-intel-445-sch.jpg';

const NameCard = (props) => {
  const mesh = useRef();

  const [frontCardTexture, BackCardTexture] = useLoader(THREE.TextureLoader, [
    props.data.frontCard,
    props.data.backCard,
  ]);

  return (
    // <mesh scale={[22, 16, 0.2]}>
    //   <MeshBasicMaterial color={{'blue'}}/>
    //   <boxBufferGeometry args={[1, 1, 1]} />
    //   <meshStandardMaterial color={'green'} />
    // </mesh>

    <mesh scale={[22, 16, 0.2]}>
      <boxBufferGeometry attach="geometry" />
      <meshBasicMaterial attachArray="material" color="white" />
      <meshBasicMaterial attachArray="material" color="white" />
      <meshBasicMaterial attachArray="material" color="white" />
      <meshBasicMaterial attachArray="material" color="white" />
      <meshBasicMaterial attachArray="material" map={frontCardTexture} />
      <meshBasicMaterial attachArray="material" map={BackCardTexture} />
    </mesh>
  );
};

export default NameCard;
