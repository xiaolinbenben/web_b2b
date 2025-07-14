import Link from 'next/link';
import Image from 'next/image';
import lang from "@/locales";
import React from "react";

// 产品卡片组件
function ProductCard({ product }) {
    // 提取第一张图片
    const cover = product.cover ? product.cover.split('#')[0] : '';
    return (
        <div className="group">
            <div className="relative mb-4 overflow-hidden bg-gray-100" style={{ paddingBottom: '100%' }}>
                <Link href={`/product/${product.id}`}>
                    <div className="absolute w-full h-full top-0 left-0 inset-0 transition-transform duration-300 group-hover:scale-105">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/img/${cover}`}
                            alt={product.title}
                            fill
                            quality={90}
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%'
                            }}
                        />
                    </div>
                </Link>
            </div>

            <h3 className="text-base md:text-lg font-medium text-center">
                <Link href={`/product/${product.id}`} className="hover:text-mainColorNormal transition-colors">
                    {product.title}
                </Link>
            </h3>
        </div>
    );
}

export default function FeaturedProducts({featuredData}) {
    return (
        <div className="py-6 sm:py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* 标题区域 */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                        {lang.FeaturedProducts}
                    </h2>
                    <Link 
                        href="/product" 
                        className="text-mainColorNormal hover:text-mainColorDeep transition-colors duration-200 text-sm md:text-base flex items-center"
                    >
                        {lang.ViewMore}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                             stroke="currentColor" className="w-4 h-4 ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                        </svg>
                    </Link>
                </div>

                <div className="relative">
                    <div className="w-full h-[1px] bg-[#eee] mb-10">
                        <div className="h-[1px] w-[100px] bg-mainColorNormal"></div>
                    </div>
                
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {featuredData.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}