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


const Carousel = ({bannerData}) => {

    const coverArr = bannerData ? bannerData.split('#') : [];

    const colorValue = "bg-black/20 hover:bg-black/50 text-white hover:text-white border border-white/30 backdrop-blur-sm";
    return (
        <div className="relative w-full h-full bg-gray-300">
            <Swiper
                className="w-full h-full"
                modules={[Navigation, Autoplay, EffectFade]}
                spaceBetween={30}
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
                        <Link href="/product" className="block relative w-full h-full cursor-pointer">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/img/${image}`}
                                alt="Hero Section"
                                fill
                                sizes="100vw"
                                className="object-cover"
                                quality={90}
                                priority={index === 0}
                            />
                        </Link>
                    </SwiperSlide>
                ))}

            </Swiper>
            {/* 自定义导航按钮 */}
            {
                coverArr.length > 1 ? (
                    <>
                        <button
                            className={`custom-prev z-10 absolute top-1/2 left-5 transform -translate-y-1/2 p-3 ${colorValue} rounded-full shadow-lg focus:outline-none transition-all duration-300 ease-in-out`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                />
                            </svg>
                        </button>
                        <button
                            className={`custom-next z-10 absolute top-1/2 right-5 transform -translate-y-1/2 p-3 ${colorValue} rounded-full shadow-lg focus:outline-none transition-all duration-300 ease-in-out`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-5 h-5"
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