import Banner from "@/components/index/sections/bannerB";
import WhoWeAre from "@/components/index/sections/template04/whoWeAre";
import OurMission from "@/components/index/sections/template04/ourMission";
import Advantages from "@/components/index/sections/template04/advantages";
import OurFactory from "@/components/index/sections/template04/ourFactory";
import ContactUs from "@/components/index/sections/template04/contactUs";
import Certification from "@/components/index/sections/template04/certification";

export default function AboutTemplate({
                                          bannerData,
                                          aboutData,
                                          missionData,
                                          statsData,
                                          advantageData,
                                          companyImageData,
                                          certificationImageData,
                                          contactData
                                      }) {
    return (
        <div className="flex flex-col">

            <Banner title="About Us" titleLink="/about" bannerData={bannerData}/>

            <div>
                {/* Who We Are 区域 */}
                <WhoWeAre aboutData={aboutData}/>

                {/*Our mission section */}
                <OurMission missionData={missionData} statsData={statsData}/>

                {/* Our Advantages 区域 */}
                {advantageData?.length > 0 && (
                    <Advantages advantageData={advantageData}/>
                )}

                {/* Our Factory 区域 */}
                {companyImageData?.length > 0 && (
                    <OurFactory companyImageData={companyImageData}/>
                )}

                {/* certification 区域 */}
                {certificationImageData?.length > 0 && (
                    <Certification certificationImageData={certificationImageData}/>
                )}

                <ContactUs contactData={contactData}/>
            </div>
        </div>
    );
}
