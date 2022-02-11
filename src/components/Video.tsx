// import ytdl from "ytdl-core";
// import { useEffect, useState } from "react";

import video from '../assets/videos/dreams.mp4';

import gsap from 'gsap';
import { useEffect } from 'react';

export function Video(){

    useEffect(() =>{

        gsap.from("video", {opacity: 0, duration: 1.5})

    },[]);

    return(
        <div className="video">
            <div className="filter"></div>
            <video src={video} autoPlay muted loop/>
        </div>
    )
}