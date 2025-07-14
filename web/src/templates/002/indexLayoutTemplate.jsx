import {GoogleAnalytics} from "@next/third-parties/google";

import ScrollBar from "@/components/index/sections/scrollBar";
import NavBar from "@/components/index/sections/template02/navBar";
import Footer from "@/components/index/sections/template02/footer";
import SendMessage from "@/components/index/sections/sendMessage";
import TipBar from "@/components/index/sections/tipbar";

export default function IndexLayoutTemplate({navSectionData, footerSectionData, children}) {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <NavBar sectionData={navSectionData}/>
                <main className="flex-grow">
                    {children}
                </main>
                <Footer sectionData={footerSectionData}/>
                <ScrollBar/>
                <SendMessage />
                <TipBar sectionData={navSectionData}/>
            </div>
            {/*谷歌分析*/}
            <GoogleAnalytics gaId={navSectionData.basicSite.site_gaid} />
        </>
    );
}
