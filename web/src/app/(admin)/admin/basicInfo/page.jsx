'use client';
import React, {useEffect, useState} from 'react';
import {Tabs} from "antd";
import SiteSettings from "@/components/admin/basicInfo/siteSettings";
import BannerSettings from "@/components/admin/basicInfo/bannerSettings";

export default function Page() {
    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: '网站信息',
            children: <SiteSettings />,
        },
        {
            key: '3',
            label: 'Banner信息',
            children: <BannerSettings />,
        },
    ];

    return (
        <>
            <div className="bg-gray-100 px-4 py-4">
                <div>
                    <Tabs
                        indicator={{ size: (origin) => 24, align: 'center' }}
                        tabBarStyle={{paddingLeft: '20px', outline: 'none',fontWeight: '400'}}
                        className="bg-white custom-tab" defaultActiveKey="1" items={items} onChange={onChange}/>
                </div>
            </div>
        </>
    );
};