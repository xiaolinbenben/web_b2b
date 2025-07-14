import CaseDetail from "@/components/index/sections/template04/caseDetail";


export default function CaseDetailTemplate({detailData, categoryData, recommendData}){
    return (
        <CaseDetail 
            detailData={detailData}
            categoryData={categoryData}
            recommendData={recommendData}
        />
    );
}