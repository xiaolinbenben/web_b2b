import React from "react";
import Link  from "next/link";
import Image from "next/image";
import lang from '@/locales';


export default function RecommendedForYou({recommendData}) {
    return (
        <div className="bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/*标题区域*/}
                <div className="mb-14">
                    <div className="text-xl text-gray-900 mb-6 uppercase text-center">
                        <span className="text-mainColorNormal tracking-[4px]">//</span>
                        <span className="text-[#4e5866] ml-2">{lang.RecommendedForYou}</span>
                    </div>
                    <p className="text-gray-900 font-bold text-2xl md:text-4xl max-w-2xl mx-auto text-center">
                        {lang.RecommendedForYouTip}
                    </p>
                </div>
                
                <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    {recommendData.map((product) => {
                        // 提取第一张图片
                        const cover = product.cover ? product.cover.split('#')[0] : '';
                        return (
                            <div key={product.id} className="group relative">
                                <div className="relative w-full h-72 overflow-hidden bg-white">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/img/${cover}`}
                                        alt={product.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-lg font-medium text-gray-900">
                                            <Link href={'/product/' + product.id}>
                                                <span aria-hidden="true" className="absolute inset-0"/>
                                                {product.title}
                                            </Link>
                                        </h3>
                                        <p className="text-lg font-medium text-mainColorNormal"></p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.category_title}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
                <div className="mt-12 text-center">
                    <Link
                        href="/product"
                        className="bg-mainColorNormal hover:bg-mainColorDeep text-white font-medium py-3 px-12 uppercase tracking-wide transition-colors duration-200 text-sm inline-flex items-center"
                    >
                        {lang.ViewAllProducts}
                        <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}
