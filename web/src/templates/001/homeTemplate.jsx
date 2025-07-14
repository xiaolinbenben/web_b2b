import Carousel from "@/components/index/sections/template01/carousel";
import FeaturedProducts from "@/components/index/sections/template01/featuredProducts";
import FacilityArea from "@/components/index/sections/facilityArea";
import OurCategories from "@/components/index/sections/template01/ourCategories";
import AboutUs from "@/components/index/sections/aboutUs";
import CustomersSay from "@/components/index/sections/customersSay";
import CompanyNews from "@/components/index/sections/companyNews";

export default function HomeTemplate({bannerData, featuredData, categoryData, aboutData, companyName, statsData, commentData, newsData}) {
    return (
        <div className="flex flex-col">
            <div className="w-full h-[200px] md:h-[300px] lg:h-[600px]">
                <Carousel bannerData={bannerData}/>
            </div>

            <FeaturedProducts featuredData={featuredData}/>

            <OurCategories categoryData={categoryData}/>

            <AboutUs aboutData={aboutData} companyName={companyName} statsData={statsData}/>

            <CustomersSay commentData={commentData}/>

            <CompanyNews newsData={newsData}/>

            <FacilityArea/>
        </div>
    );
}
