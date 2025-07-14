import Banner from "@/components/index/sections/bannerB";
import NewsList from "@/components/index/sections/template04/newsList";

export default function NewsTemplate({bannerData, pageNumber, total, newsData}){
    return (
        <div className="bg-mainColorLight">
            <Banner title="News" titleLink="/news" bannerData={bannerData}/>

            <NewsList
                pageNumber={pageNumber}
                total={total}
                newsData={newsData}
            />
        </div>
    );
}
