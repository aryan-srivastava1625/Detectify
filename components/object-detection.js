'use client';
import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import {load as cocoSSDload} from "@tensorflow-models/coco-ssd";
import * as tf from '@tensorflow/tfjs'


let detectInterval;

const ObjectDetection = () => {

    const [isLoading, setIsLoading] = useState(true);

    const webcamRef = useRef(null);

    const runCoco = async () => {
        setIsLoading(true);
        const net = await cocoSSDload();
        setIsLoading(false);


        detectInterval = setInterval(()=> {
            // runObjectDetection(net);
        },10)

    };

    const showVideo = () => {
        if (
            webcamRef.current !== null &&
            webcamRef.current.video?.readyState === 4
        ) {
            // Add your logic here, for example:
            const myVideoWidth = webcamRef.current.video.videoWidth;
            const myVideoHeight = webcamRef.current.video.videoHeight;

            webcamRef.current.video.width=myVideoWidth;
            webcamRef.current.video.height=myVideoHeight;
        }
    };

    useEffect(()=>{
        runCoco();
        showVideo();
    },[]);

    return (
        <div className="mt-8">{
            isLoading ? (
                <div className='gradient-text'>Loading AI Model</div>
            ):
            <div className="relative flex justify-center items-center gradient p-1.5 rounded-md">
                {/* Webcam */}
                <Webcam
                    ref={webcamRef}
                    className="rounded-md w-full lg:h-[720px]"
                    audio={false}
                />

                {/* Canvas (if needed later) */}
            </div>}
        </div>
    );
};

export default ObjectDetection;
