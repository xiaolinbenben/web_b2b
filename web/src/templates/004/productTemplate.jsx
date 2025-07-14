import ProductList from "@/components/index/sections/template04/productList";
import Banner from "@/components/index/sections/bannerB";

export default function ProductTemplate({
                                            bannerData,
                                            categoryId,
                                            pageNumber,
                                            total,
                                            pageSize,
                                            categoryData,
                                            productData,
                                            featuredData,
                                            searchQuery
                                        }) {
    return (
        <div className="">
            <Banner title="Product" titleLink="/product" bannerData={bannerData}/>

            <ProductList
                categoryId={categoryId}
                pageNumber={pageNumber}
                total={total}
                pageSize={pageSize}
                categoryData={categoryData}
                productData={productData}
                featuredData={featuredData}
                searchQuery={searchQuery}
            />

        </div>
    );
}
