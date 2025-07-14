import FaqList from "@/components/index/sections/faqList";
import Banner from "@/components/index/sections/bannerB";

export default function FaqTemplate({bannerData, faqData}){
    return (
        <div className="bg-white">
            <Banner title="Faq" titleLink="/faq" bannerData={bannerData}/>


            <FaqList faqData={faqData} />

        </div>
    );
}
