import Link from 'next/link';
import Image from 'next/image';
import lang from "@/locales";

// 产品卡片组件
function ProductCard({ product }) {
    // 提取第一张图片
    const cover = product.cover ? product.cover.split('#')[0] : '';
    return (
        <div className="group">
            <div className="relative mb-4 overflow-hidden bg-gray-100" style={{ paddingBottom: '100%' }}>
                <Link href={`/product/${product.id}`}>
                    <div className="absolute w-full h-full top-0 left-0 transition-transform duration-300 group-hover:scale-105">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/img/${cover}`}
                            alt={product.title}
                            fill
                            quality={90}
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
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
        <div className="py-12 sm:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{lang.FeaturedProducts}</h2>
                    <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                        {lang.FeaturedProductsTip}
                    </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                    {featuredData?.slice(0, 8).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}