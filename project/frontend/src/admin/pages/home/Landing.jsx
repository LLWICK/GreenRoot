
import React from 'react';
// import BannerVid from "/bannerimg.mp4";
import bannerVd from "./home_img/bannerimg.mp4"

const Landing = () => {
    return (
        <>
            <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    {/* <video
                        className="min-w-full min-h-full absolute object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        src=""
                        type="video/mp4"
                        autoPlay
                        muted
                        loop
                    ></video> */}
                    <video src={bannerVd} width="600" height="300" controls="controls" autoplay="true" />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                <div className="z-10 space-y-2">
                    <h1 className="font-light text-6xl">We Provide Landscaping</h1>
                    <h3 className="font-light text-3xl">Long established fact that a reader will be distracted by the readable content of a page</h3>
                    <div className="flex justify-center space-x-4">
                        <a
                            href="#"
                            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                        >
                            Read More
                        </a>
                        <a
                            href="#"
                            className="px-6 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Landing;
