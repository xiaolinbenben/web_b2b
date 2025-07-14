import Banner from "@/components/index/sections/bannerB";
import CaseList from "@/components/index/sections/template04/caseList";

export default function CaseTemplate({bannerData, pageNumber, total, caseData}) {
    return (
        <div className="bg-mainColorLight">
            <Banner title="Case" titleLink="/case" bannerData={bannerData}/>

            <CaseList pageNumber={pageNumber} total={total} caseData={caseData}/>
        </div>
    )
}
