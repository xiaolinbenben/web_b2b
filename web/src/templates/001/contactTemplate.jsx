import GetInTouch from "@/components/index/sections/getInTouch";
import RecommendedForYou from "@/components/index/sections/recommendedForYou";
import FacilityArea from "@/components/index/sections/facilityArea";
import Banner from "@/components/index/sections/banner";

export default function ContactTemplate({bannerData, contactData, recommendData}){
    return (
        <div className="flex flex-col">
            <div className="w-full h-[200px]">
                <Banner title="Contact Us" bannerData={bannerData}/>
            </div>

            <GetInTouch contactData={contactData}/>

            {
                recommendData?.length > 0 && (
                    <RecommendedForYou recommendData={recommendData}/>
                )
            }

            <FacilityArea/>
        </div>
    );
}