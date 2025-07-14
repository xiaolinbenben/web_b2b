import lang from "@/locales";
import Image from "next/image";
import Link from "next/link";

export default function CustomersSay({commentData}){

    return(
        <div className="w-full bg-white">
            <div className="py-6 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* 标题区域 */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                        {lang.OurCustomersSay}
                    </h2>

                </div>

                <div className="relative">
                    <div className="w-full h-[1px] bg-[#eee] mb-10">
                        <div className="h-[1px] w-[100px] bg-mainColorNormal"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                        {commentData.map((testimonial) => (
                            <div key={testimonial.id} className="flex flex-col">
                                {/* 引号  */}
                                <div className="text-2xl text-mainColorNormal mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48m-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48"/></svg>
                                </div>

                                {/* 评价内容 */}
                                <p className="text-gray-700 mb-8 flex-0 text-base">
                                    {testimonial.comment_content}
                                </p>

                                {/* 客户信息 */}
                                <div className="flex items-center mt-auto">
                                    <div className="w-14 h-14 rounded-full overflow-hidden mr-4 relative">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/img/${testimonial.comment_cover}`}
                                            alt={testimonial.comment_name}
                                            fill
                                            sizes="56px"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base">
                                            {testimonial.comment_name}
                                        </h3>
                                        <p className="text-gray-500 text-sm">
                                            From {testimonial.comment_location || "Unknown"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}