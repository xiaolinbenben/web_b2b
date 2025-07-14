import lang from "@/locales";
import Image from "next/image";
import React from "react";

export default function ContactUs({contactData}) {
    return (
        <div className="relative h-[400px] md:h-[600px] w-full">
            {/* 背景图片 */}
            <div className="absolute w-full h-full top-0 left-0 inset-0">
                <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/img/${contactData}`}
                    alt="contact us"
                    fill
                    sizes="100vw"
                    priority
                    className="object-cover"
                />
                {/* 深色遮罩 */}
                <div className="absolute  w-full h-full top-0 left-0 inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>

                {/*白色遮罩*/}
                <div className="absolute left-0 top-0 w-full h-[30px] md:h-[55px] overflow-hidden">
                    <svg 
                        className="w-full h-full" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="#FFFFFF"  
                        viewBox="0 0 1000 100" 
                        preserveAspectRatio="none"
                        style={{
                            display: 'block',
                            border: 'none',
                            outline: 'none'
                        }}
                    >
                        <path 
                            className="elementor-shape-fill" 
                            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
                            c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
                            c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
                        />
                    </svg>
                </div>
            </div>

            {/* 内容区域 */}
            <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
                <h2 className="text-2xl md:text-4xl font-bold mb-6">{lang.ContactUs}</h2>
                <p className="text-base md:text-xl mb-4 max-w-2xl">
                    {lang.ContactUsTip1}
                </p>
                <p className="text-base md:text-xl mb-8 max-w-2xl">
                    {lang.ContactUsTip2}
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-transparent hover:bg-white border-2 border-white hover:border-white text-white hover:text-gray-800 px-8 py-3 transition-all duration-300 text-lg shadow-md hover:shadow-lg"
                >
                    {lang.GetAQuote}
                </a>
            </div>
        </div>
    );
}