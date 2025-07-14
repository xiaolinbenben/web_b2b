'use client'
import Link from 'next/link';
import Image from 'next/image';
import lang from "@/locales";
import React from "react";

// 模拟分类数据 - 减少到4个
const categories = [
    {
        id: 1,
        name: 'Men',
        image: 'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800&q=80',
    },
    {
        id: 2,
        name: 'Women',
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800&q=80',
    },
    {
        id: 3,
        name: 'Accessories',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800&q=80',
    },
    {
        id: 4,
        name: 'Footwear',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800&q=80',
    }
];

// 分类卡片组件
function CategoryCard({category}) {
    return (
        <Link href={`/product/category/${category.id}`} className="block group">
            <div className="relative overflow-hidden mb-3" style={{ paddingBottom: '133.33%' }}>
                <div className="absolute w-full h-full top-0 left-0 inset-0">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/img/${category.cover}`}
                        alt={category.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                    <div
                        className="bg-white text-[14px] text-center flex justify-center items-center font-semibold min-h-[40px] px-3 rounded-full absolute left-1/2 bottom-6 -translate-x-1/2">
                        {category.title}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default function OurCategories({categoryData}) {
    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{lang.OurCategories}</h2>
                    <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                        {lang.OurCategoriesTip}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-5">
                    {categoryData?.slice(0, 4).map((category) => (
                        <CategoryCard key={category.id} category={category}/>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/product"
                        className="inline-flex items-center px-6 py-3 bg-mainColorNormal text-white font-medium hover:bg-mainColorDeep transition-colors duration-300"
                    >
                        {lang.ViewMore || 'View More'}
                        <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}