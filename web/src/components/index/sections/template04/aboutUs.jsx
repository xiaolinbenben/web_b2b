'use client'
import Image from 'next/image';
import Link from 'next/link';
import lang from "@/locales";
import React from "react";

export default function AboutUs({aboutData, companyName, statsData}) {
    // 卡片基本样式
    const baseCardStyle = "p-6 rounded-0";
    
    // 卡片样式
    const cardStyles = [
        `${baseCardStyle} bg-gradient-to-br from-blue-50 to-indigo-100`,
        `${baseCardStyle} bg-gradient-to-br from-green-50 to-teal-100`,
        `${baseCardStyle} bg-gradient-to-br from-amber-50 to-yellow-100`,
        `${baseCardStyle} bg-gradient-to-br from-rose-50 to-pink-100`
    ];
    
    return (
        <div className="py-6 md:py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 标题区域 */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                        {lang.AboutUs}
                    </h2>
                </div>

                <div className="relative">
                    <div className="w-full h-[1px] bg-[#eee] mb-10">
                        <div className="h-[1px] w-[100px] bg-mainColorNormal"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* 左侧 */}
                        <div className="flex flex-col justify-center">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                {companyName}
                            </h3>
                            <p className="mb-6 text-gray-700"
                               dangerouslySetInnerHTML={{__html: aboutData.aboutText}}>
                            </p>

                            <Link href="/about"
                                  className="inline-flex items-center px-6 py-3 bg-mainColorNormal text-white font-medium hover:bg-mainColorDeep transition-colors duration-300 self-start">
                                {lang.ViewMore}
                                <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                          clipRule="evenodd"/>
                                </svg>
                            </Link>
                        </div>

                        {/* 右侧 */}
                        <div className="relative h-[300px] lg:h-full overflow-hidden">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/img/${aboutData.aboutCover}`}
                                alt={companyName}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>

                {/* 统计指标 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 text-center">
                    <div className={cardStyles[0]}>
                        <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">{statsData.param_one_value}</div>
                        <div className="text-gray-700 font-medium">{statsData.param_one_name}</div>
                    </div>
                    <div className={cardStyles[1]}>
                        <div className="text-3xl md:text-4xl font-bold text-teal-700 mb-2">{statsData.param_two_value}</div>
                        <div className="text-gray-700 font-medium">{statsData.param_two_name}</div>
                    </div>
                    <div className={cardStyles[2]}>
                        <div className="text-3xl md:text-4xl font-bold text-amber-700 mb-2">{statsData.param_three_value}</div>
                        <div className="text-gray-700 font-medium">{statsData.param_three_name}</div>
                    </div>
                    <div className={cardStyles[3]}>
                        <div className="text-3xl md:text-4xl font-bold text-rose-700 mb-2">{statsData.param_four_value}</div>
                        <div className="text-gray-700 font-medium">{statsData.param_four_name}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}