'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {Navigation, Autoplay, Pagination, EffectFade} from "swiper/modules";
import lang from '@/locales';



const Carousel = ({bannerData, heroText}) => {
    const coverArr = bannerData ? bannerData.split('#') : [];

    const colorValue = "bg-mainColorNormalAlpha-50 hover:bg-mainColorNormal text-white hover:text-white backdrop-blur-sm";
    const commonStyle = "z-10 absolute flex items-center justify-center transform -translate-y-1/2 w-[40px] h-[40px] focus:outline-none transition-all duration-300 ease-in-out hidden md:block";
    return (
        <div className="relative w-full h-full bg-gray-300">
            <Swiper
                className="w-full h-full"
                modules={[Navigation, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                pagination={{
                    clickable: true, // 确保分页器可以点击
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                speed={1500}
                effect="fade" // 设置为淡入淡出效果
                fadeEffect={{crossFade: false}} // 可选：添加交叉淡化效果
                loop={true}
                allowTouchMove={true}
                preventInteractionOnTransition={false} // 允许在过渡期间进行交互
            >
                {coverArr.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="block relative w-full h-full">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/img/${image}`}
                                alt="Hero Section"
                                fill
                                sizes="100vw"
                                className="object-cover"
                                quality={90}
                                priority={index === 0}
                            />
                            {/*蒙层*/}
                            <div className="absolute w-full h-full top-0 left-0 inset-0 bg-mainColorNormalAlpha-20"></div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
            <div className="absolute w-full h-full top-0 left-0 inset-0 flex items-center justify-center lg:justify-start lg:pl-24 z-[5]">
                {/*hero 文本区域*/}
                <div className="text-center lg:text-left p-4 sm:p-6 md:p-8 rounded-lg max-w-2xl pointer-events-none">
                    <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-6 tracking-wide">
                        {heroText || ''}
                    </h1>
                    <div className="mt-6 md:mt-16">
                        <Link 
                            href={'/contact'}
                            className="inline-block bg-white/70 text-mainColorDeep hover:bg-mainColorNormal hover:text-white font-bold text-sm sm:text-[16px] px-5 sm:px-16 py-2 sm:py-3 transition-all duration-300 border-[2px] border-white hover:border-mainColorNormal pointer-events-auto"
                        >
                            {lang.GetAFreeQuoteBtn}
                        </Link>
                    </div>
                </div>
            </div>
            {/* 自定义导航按钮 */}
            {
                coverArr.length > 1 ? (
                    <>
                        <button
                            className={`custom-prev top-1/2 left-0 ${commonStyle}  ${colorValue}`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-5 h-5 mx-auto"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                />
                            </svg>
                        </button>
                        <button
                            className={`custom-next top-1/2 right-0 ${commonStyle} ${colorValue}`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-5 h-5 mx-auto"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </button>
                    </>

                ) : null
            }

        </div>
    );
};

export default Carousel;