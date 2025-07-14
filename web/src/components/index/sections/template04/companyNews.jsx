import Link from 'next/link';
import Image from 'next/image';
import {formatDate} from "@/utils/tools";
import lang from "@/locales";


export default function CompanyNews({newsData}) {
  return (
      <div className="mx-auto max-w-7xl py-6 md:py-12 px-6 lg:px-8 bg-white">
        {/* 标题区域 */}
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                {lang.CompanyNews}
            </h2>
            <Link 
                href="/news" 
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
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsData.map((post) => (
                    <Link 
                        key={post.id}
                        href={'/news/'+post.id}
                        className="group flex flex-col bg-white overflow-hidden transition-all duration-300"
                    >
                        {/* 图片容器 */}
                        <div className="relative w-full h-0 pb-[70%] overflow-hidden">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/img/${post.cover}`}
                                alt={post.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105" 
                                priority={newsData.indexOf(post) < 3}
                            />
                        </div>

                        {/* 内容区域 */}
                        <div className="py-4 flex flex-col">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-mainColorNormal transition-colors duration-300">
                                {post.title}
                            </h3>
                            
                            {/* 日期显示 */}
                            <div className="mt-auto text-gray-500 text-sm">
                                {formatDate(post.create_time, 'DD-MM-YY')}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </div>
  )
}
