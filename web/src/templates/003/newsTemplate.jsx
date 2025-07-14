import NewsList from "@/components/index/sections/newsList";
import Banner from "@/components/index/sections/banner";

export default function NewsTemplate({bannerData, pageNumber, total, newsData}){
    return (
        <div className="bg-mainColorLight">
            <div className="w-full h-[200px]">
                <Banner title="News" bannerData={bannerData}/>
            </div>

            <NewsList
                pageNumber={pageNumber}
                total={total}
                newsData={newsData}
            />
        </div>
    );
}
