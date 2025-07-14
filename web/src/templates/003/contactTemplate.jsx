
import RecommendedForYou from "@/components/index/sections/recommendedForYou";
import Banner from "@/components/index/sections/banner";
import GetInTouch from "@/components/index/sections/template03/getInTouch";

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

        </div>
    );
}