'use client';
import {useEffect} from "react";
import {useRouter} from "next/navigation";

export default function Page() {

    const router = useRouter();

    useEffect(() => {
        let admintoken = localStorage.getItem('admintoken');
        if(!admintoken){
            router.push('/adminLogin');
        }else {
            router.push('/admin/main');
        }
    }, []);

    return (
        <div>

        </div>
    )
}