import ProductList from "@/components/index/sections/productList";
import FacilityArea from "@/components/index/sections/facilityArea";
import Banner from "@/components/index/sections/banner";

export default function ProductTemplate({
                                            bannerData,
                                            categoryId,
                                            pageNumber,
                                            total,
                                            categoryData,
                                            productData,
                                            featuredData,
                                            searchQuery
                                        }) {
    return (
        <div className="">
            <div className="w-full h-[200px]">
                <Banner title="Products" bannerData={bannerData}/>
            </div>

            <ProductList
                categoryId={categoryId}
                pageNumber={pageNumber}
                total={total}
                categoryData={categoryData}
                productData={productData}
                featuredData={featuredData}
                searchQuery={searchQuery}
            />

            <FacilityArea/>
        </div>
    );
}
