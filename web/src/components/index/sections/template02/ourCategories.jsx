'use client'
import Link from 'next/link';
import Image from 'next/image';
import lang from "@/locales";

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
function CategoryCard({ category }) {
    return (
        <Link href={`/product/category/${category.id}`} className="block group">
            <div className="relative overflow-hidden mb-3" style={{ paddingBottom: '100%' }}>
                <div className="absolute w-full h-full top-0 left-0">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/img/${category.cover}`}
                        alt={category.title}
                        fill
                        className="rounded-[25%] object-cover"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                </div>
            </div>
            <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-700 group-hover:text-mainColorNormal transition-colors">{category.title}</h3>
            </div>
        </Link>
    );
}

export default function OurCategories({categoryData}) {
    return  (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{lang.OurCategories}</h2>
                    <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                        {lang.OurCategoriesTip}
                    </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-20">
                    {categoryData.map((category) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>

            </div>
        </div>
    )
}