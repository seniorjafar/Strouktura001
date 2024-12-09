import React from 'react';
import Img from "../../assets/image/kub.jpeg";
import Icon from "../../assets/icon/text.svg";
import Safari from "../../assets/image/safari.jpeg";
import Moon from "../../assets/image/moon.jpeg";
import Wood from "../../assets/image/wood.jpeg";

export const About = () => {


  return (
    <main>
      <section>
        <div className="container-xl 2xl:mx-auto lg:py-16 lg:px-4 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col 2lg:flex-row justify-between gap-8">
                <div className="w-full 2lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl 2lg:text-4xl font-bold leading-9 text-indigo-500 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full h-96 rounded-xl 2lg:justify-center 2lg:w-full shadow-[0_2px_10px_-3px_#333]">
                    <img className="w-full h-full rounded-xl" src={Safari} alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-indigo-500 pb-4">Our Story</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8 ">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:grid-cols-2 2lg:grid-cols-4  dark:bg-gray-800 shadow-[0_2px_10px_-3px_#333] rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="w-full rounded-lg" src={Img} alt="Alexa featured Img" />
                            <p className="font-medium text-xl leading-5 text-indigo-500 mt-4">Alexa</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="w-full rounded-lg" src={Img} alt="Alexa featured Img" />
                            <p className="font-medium text-xl leading-5 text-indigo-500 mt-4">Olivia</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="w-full rounded-lg" src={Img} alt="Alexa featured Img" />
                            <p className="font-medium text-xl leading-5 text-indigo-500 mt-4">Liam</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="w-full rounded-lg" src={Img} alt="Alexa featured Img" />
                            <p className="font-medium text-xl leading-5 text-indigo-500 mt-4">Elijah</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
};
