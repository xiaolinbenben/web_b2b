

import Carousel from "@/components/index/sections/template04/carousel";
import FtArea from "@/components/index/sections/template04/ftArea";
import OurCategories from "@/components/index/sections/template04/ourCategories";
import FeaturedProducts from "@/components/index/sections/template04/featuredProducts";
import AboutUs from "@/components/index/sections/template04/aboutUs";
import CompanyNews from "@/components/index/sections/template04/companyNews";
import CustomersSay from "@/components/index/sections/template04/customersSay";
import ContactUs from "@/components/index/sections/template04/contactUs";


export default function HomeTemplate({bannerData, featuredData, categoryData, aboutData, companyName, statsData, commentData, newsData, heroText, contactData}) {
    return (
        <div className="flex flex-col">
            <div className="w-full h-[300px] md:h-[500px] lg:h-[calc(100vh-80px)]">
                <Carousel bannerData={bannerData} heroText={heroText}/>
            </div>




            <OurCategories categoryData={categoryData}/>

            <AboutUs aboutData={aboutData} companyName={companyName} statsData={statsData}/>

            <FeaturedProducts featuredData={featuredData}/>

            <CustomersSay commentData={commentData}/>

            <CompanyNews newsData={newsData}/>

            <ContactUs contactData={contactData} />


        </div>
    );
}
