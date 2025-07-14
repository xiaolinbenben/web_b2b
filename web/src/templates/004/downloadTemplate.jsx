import Banner from "@/components/index/sections/bannerB";
import DownloadList from "@/components/index/sections/template04/downloadList";

export default function DownloadTemplate({bannerData, downloadData}){
    return (
        <div>
            <Banner title="Download" titleLink="/download" bannerData={bannerData}/>

            <DownloadList downloadData={downloadData} />
        </div>
    );
}