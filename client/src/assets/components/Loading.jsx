import React from 'react'
import {assets} from "../assets.jsx";
import Lottie from "lottie-react";

const LottieComponent = Lottie["default"] || Lottie;

const Loading = () => {
    return (
        <div className={'flex-1 flex h-full items-center justify-center'}>
            <LottieComponent animationData={assets.LoadingIcon}
            className={'w-1/2 h-1/2'}/>
        </div>
    );
};

export default Loading;