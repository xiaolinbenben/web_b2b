import CaseList from "@/components/index/sections/caseList";
import Banner from "@/components/index/sections/banner";

export default function CaseTemplate({bannerData, pageNumber, total, caseData}) {
    return (
        <div className="bg-mainColorLight">
            <div className="w-full h-[200px]">
                <Banner title="Case" bannerData={bannerData}/>
            </div>

            <CaseList pageNumber={pageNumber} total={total} caseData={caseData}/>
        </div>
    )
}
