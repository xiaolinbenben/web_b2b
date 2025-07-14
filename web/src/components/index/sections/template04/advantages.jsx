import React from "react";
import Image from "next/image";
import lang from "@/locales";


export default function Advantages({advantageData}) {
    return (
        <section className="relative pt-20 pb-16 bg-mainColorLight">
            <div className="absolute left-0 top-0 w-full h-[30px] md:h-[55px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF"  width="100%" height="100%" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="elementor-shape-fill" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                </svg>
            </div>


            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    {/*标题区域*/}
                    <div className="text-xl text-gray-900 mb-6 uppercase">
                        <span className="text-mainColorNormal tracking-[4px]">//</span>
                        <span className="text-[#4e5866] ml-2">{lang.OurAdvantages}
                        </span>
                    </div>
                    <p className="text-gray-900 text-2xl md:text-4xl max-w-3xl mx-auto mb-4 px-4">
                        {lang.OurAdvantagesTip}
                    </p>
                </div>

                {/* 卡片列表 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {advantageData.map((advantage) => (
                        <div key={advantage.id} 
                             className="bg-white rounded-3xl p-8 flex flex-col border border-gray-200 ">
                            <div className="mb-5 mx-auto rounded-full flex items-center justify-center border border-mainColorLight relative w-[64px] h-[64px]">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/img/${advantage.advantage_image}`}
                                    alt={advantage.advantage_title}
                                    fill
                                    sizes="64px"
                                    className="object-contain rounded-full"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{advantage.advantage_title}</h3>
                            <p className="text-gray-600">{advantage.advantage_description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}