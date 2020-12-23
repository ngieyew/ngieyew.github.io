import React, { Suspense } from 'react';
import { Box } from '@material-ui/core';
import { Canvas } from 'react-three-fiber';
import CameraControls from './CameraControls';
import NameCard from './NameCard';

const Card3d = (props) => {
  return (
    <Box sx={{ width: '100%', height: '300px' }}>
      <Canvas
        camera={{ position: [0, 0, 15] }}
        onCreated={({ gl }) => gl.setClearColor('black')}
      >
        <CameraControls />
        <Suspense fallback="">
          <NameCard data={props.data} />
        </Suspense>
      </Canvas>
    </Box>
  );
};

export default Card3d;
