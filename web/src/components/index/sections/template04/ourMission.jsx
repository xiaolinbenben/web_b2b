import lang from "@/locales";
import Image from "next/image";

const stats = [
    { label: 'Global Customers', value: '10,000+' },
    { label: 'Countries Served', value: '80+' },
    { label: 'Years Experience', value: '18+' },
]

export default function OurMission({missionData, statsData}) {
    return (
        <div className="bg-white pt-8 pb-8 lg:pt-10 lg:pb-16">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row px-6 lg:px-8">
                {/* 左侧：图片 */}
                <div className="w-full lg:w-1/2 flex flex-col lg:mr-8">
                    <div className="relative h-60 lg:h-96 bg-gray-100 rounded-3xl overflow-hidden mb-8">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/img/${missionData.missionCover}`}
                            alt="Our Global Mission"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
                
                {/* 右侧：使命描述 */}
                <div className="flex flex-col w-full lg:w-1/2 p-0 mb-8 lg:mb-0">
                    {/*标题区域*/}
                    <div className="text-xl text-gray-900 mb-6 uppercase">
                        <span className="text-mainColorNormal tracking-[4px]">//</span>
                        <span className="text-[#4e5866] ml-2">{lang.OurMission}
                        </span>
                    </div>
                    <p className="text-gray-700"
                       dangerouslySetInnerHTML={{ __html: missionData.missionText }}>
                    </p>
                </div>
            </div>
        </div>
    )
}