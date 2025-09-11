import { Metadata } from "next";
import Detail from "./detailClient";

export async function generateMetadata({params} : {params: {slug: string}}): Promise<Metadata>{
    try {
         const { slug } = await params;
        const res = await fetch(`https://api-alishlah-production.up.railway.app/api/auth/dashboard/${slug}`);
        const blog = await res.json();

    return{
        title:blog.judul,
        description:blog.kategori,
        openGraph:{
            title:blog.judul,
            description:blog.kategori,
            images:[
                {
                    url : `https://api-alishlah-production.up.railway.app/api/auth/dashboard/gmb/${blog.gambar}`
                },
            ],
        }
    }    
    } catch (error) {
        console.error("Failde to generated metadata:", error);  
        return{
            title:'blog tidak ditemukan',
            description:'halaman blog ini tidak tersedia'
        }
    }
    
}

export default function Page(){
    return (
    <Detail />   
    )
}