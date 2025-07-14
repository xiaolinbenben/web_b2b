import DownloadList from "@/components/index/sections/downloadList";
import Banner from "@/components/index/sections/banner";

export default function DownloadTemplate({bannerData, downloadData}){
    return (
        <div>
            <div className="w-full h-[200px]">
                <Banner title="Download" bannerData={bannerData}/>
            </div>

            <DownloadList downloadData={downloadData} />
        </div>
    );
}