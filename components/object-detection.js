'use client';
import React from 'react';
import Webcam from 'react-webcam';

const ObjectDetection = () => {
  return (
    <div className="mt-8">
      <div className="relative flex justify-center items-center gradient p-1.5 rounded-md">
        {/* Webcam */}
        <Webcam
          className="rounded-md w-full lg:h-[720px]"
          audio={false}
        />

        {/* Canvas (if needed later) */}
      </div>
    </div>
  );
};

export default ObjectDetection;