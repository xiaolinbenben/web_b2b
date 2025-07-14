import Link from 'next/link';
import lang from "@/locales"
import Image from 'next/image';
import CopyrightBar from "@/components/index/sections/copyrightBar";

export default function Footer({sectionData}) {
    return (
        <div className="bg-white">
            <div className="w-full h-[1px] bg-gray-200"></div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/*logo区域*/}
                    <div className="flex flex-col items-center md:items-start">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Logo</span>
                            <img
                                alt="logo"
                                src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/img/${sectionData.basicSite.site_logo}`}
                                className="h-12 w-auto"
                            />
                        </Link>
                    </div>
                    {/* 菜单区域 */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold mb-6">Menu</h3>
                        <ul className="space-y-1.5">
                            {sectionData.navData.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href}
                                          className="text-mainColorNormal hover:text-mainColorNormalAlpha-80 transition-colors">
                                        {lang[item.name] || item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 社交媒体区域 */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
                        <ul className="space-y-1.5">
                            <li><a target="_black" href={sectionData.contactData.global_linkedin}
                                   className="text-mainColorNormal hover:text-mainColorNormalAlpha-80">LinkedIn</a></li>
                            <li><a target="_black" href={sectionData.contactData.global_facebook}
                                   className="text-mainColorNormal hover:text-mainColorNormalAlpha-80">Facebook</a></li>
                            <li><a target="_black" href={sectionData.contactData.global_youtube}
                                   className="text-mainColorNormal hover:text-mainColorNormalAlpha-80">YouTube</a></li>
                            <li><a target="_black" href={sectionData.contactData.global_instagram}
                                   className="text-mainColorNormal hover:text-mainColorNormalAlpha-80">Instagram</a>
                            </li>
                            <li><a target="_black" href={sectionData.contactData.global_twitter}
                                   className="text-mainColorNormal hover:text-mainColorNormalAlpha-80">Twitter</a></li>
                        </ul>
                    </div>

                    {/* 办公地址区域 */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold mb-6">Office Address</h3>
                        <address className="not-italic space-y-1.5 text-gray-700">
                            <p className="text-mainColorNormal hover:text-mainColorNormalAlpha-80">{sectionData.contactData.global_address}</p>
                            <p>
                                <a href={`tel:${sectionData.contactData.global_phone}`}
                                   className="text-mainColorNormal hover:text-mainColorNormalAlpha-80">
                                    {sectionData.contactData.global_phone}
                                </a>
                            </p>
                            <p>
                                <a href={`mailto:${sectionData.contactData.global_email}`}
                                   className="text-mainColorNormal hover:text-mainColorNormalAlpha-80">
                                    {sectionData.contactData.global_email}
                                </a>
                            </p>
                        </address>
                    </div>
                </div>
            </div>
            {/* 版权信息 */}
            <div className="bg-mainColorLight py-7 text-center">
                <CopyrightBar siteName={sectionData.basicSite.site_name} classStyle="text-sm text-gray-600"/>
            </div>
        </div>
    )
}
