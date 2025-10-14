import { Metadata } from "next";
import Detail from "./detailClient";

export async function generateMetadata({params} : {params: {slug: string}}): Promise<Metadata>{
    try {
         const { slug } = params;
        const res = await fetch(`https://api-alishlah-production.up.railway.app/api/auth/post/${slug}`,
        { next: { revalidate: 10 } }
        );
        const blog = await res.json();

    return{
        title:blog.title,
        description:blog.content,
        openGraph:{
            title:blog.title,
            description:blog.content,
            images:[
                {
                    url : `https://api-alishlah-production.up.railway.app${blog.imageUrl}`
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