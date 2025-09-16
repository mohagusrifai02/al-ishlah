import { Metadata } from "next";
import Detail from "./detailClient";

export async function generateMetadata({params} : {params: {slug: string}}): Promise<Metadata>{
    try {
         const { slug } = params;
        const res = await fetch(`https://api-alishlah-production.up.railway.app/api/auth/dashboard/${slug}`);
        const blog = await res.json();

    return{
        title:blog.judul,
        description:blog.paragraf,
        openGraph:{
            title:blog.judul,
            description:blog.paragraf,
            images:[
                {
                    url : `https://api-alishlah-production.up.railway.app/gmb/${blog.gambar}`
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