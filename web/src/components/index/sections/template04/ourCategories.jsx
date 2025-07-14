'use client'
import Link from 'next/link';
import Image from 'next/image';
import lang from "@/locales";
import React, {useState, useEffect} from "react";

// 分类卡片组件
function CategoryCard({category}) {
    return (
        <Link href={`/product/category/${category.id}`} className="block group">
            <div className="relative overflow-hidden mb-4" style={{ paddingBottom: '100%' }}>
                <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/img/${category.cover}`}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    }}
                />
            </div>
            <h3 className="text-center font-semibold text-base md:text-lg text-gray-800">{category.title}</h3>
        </Link>
    );
}

export default function OurCategories({categoryData}) {
    // 添加客户端初始化状态
    const [isClient, setIsClient] = useState(false);

    // 仅在客户端执行的useEffect
    useEffect(() => {
        setIsClient(true);
    }, []);

    // 使用内联样式来防止初始状态的闪烁
    const initialHiddenStyle = {
        opacity: isClient ? 1 : 0,
        transition: 'opacity 0.2s ease-in-out',
        minHeight: '100px'
    };

    return (
        <div className="py-6 md:py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                        {lang.ProductCategories || 'Product Categories'}
                    </h2>
                    <Link
                        href="/product"
                        className="text-mainColorNormal hover:text-mainColorDeep transition-colors duration-200 text-sm md:text-base flex items-center"
                    >
                        {lang.ViewMore || 'View All'}
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

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {categoryData?.slice(0,4).map((category) => (
                            <div key={category.id}
                                 className="transform transition-transform duration-300 hover:-translate-y-1">
                                <CategoryCard category={category}/>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}