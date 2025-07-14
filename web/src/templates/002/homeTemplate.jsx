
import AboutUs from "@/components/index/sections/aboutUs";
import CustomersSay from "@/components/index/sections/customersSay";
import CompanyNews from "@/components/index/sections/companyNews";
import FtArea from "@/components/index/sections/template02/ftArea";
import FeaturedProducts from "@/components/index/sections/template02/featuredProducts";
import OurCategories from "@/components/index/sections/template02/ourCategories";
import Carousel from "@/components/index/sections/template02/carousel";

export default function HomeTemplate({bannerData, featuredData, categoryData, aboutData, companyName, statsData, commentData, newsData}) {
    return (
        <div className="flex flex-col">
            <div className="w-full h-[200px] md:h-[300px] lg:h-[calc(100vh-116px)]">
                <Carousel bannerData={bannerData}/>
            </div>

            <FtArea />

            {/*分割线*/}
            <div className="bg-white py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="w-full bg-mainColorNormalAlpha-20 h-[1px]"></div>
                </div>
            </div>

            <OurCategories categoryData={categoryData}/>

            <FeaturedProducts featuredData={featuredData}/>

            <AboutUs aboutData={aboutData} companyName={companyName} statsData={statsData}/>

            <CustomersSay commentData={commentData}/>

            <CompanyNews newsData={newsData}/>


        </div>
    );
}
