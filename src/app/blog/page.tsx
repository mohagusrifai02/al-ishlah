"use client";

import { useState, useEffect } from "react"
import axios from "axios"
import Link from "next/link"
import { useParams } from "next/navigation";
import Pagination from "./pagination";
import Image from "next/image";

type Blog ={
    id:number;
    judul:string;
    gambar:string;
    slug:string;
}

export default function Blog(){
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [items, setItems] = useState<Blog[]>([]);
    const {slug} = useParams();
    const [currentPage, setCurrentPage]= useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(()=>{
        fetchBlog();
    },[currentPage]);

    useEffect(()=>{
        fetchItem();
    },[currentPage]);
    
    const fetchBlog = async()=>{
        try {
            const response = await axios.get(`https://api-alishlah-production.up.railway.app/api/auth/dashboard?page=${currentPage}&limit=4`);
            setBlogs(response.data.data);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('error mengambil data', error);
        }
    }

    const fetchItem = async()=>{
        try {
            const response = await axios.get(`https://api-alishlah-production.up.railway.app/api/auth/dashboard?page=${currentPage}&limit=4`);
            setItems(response.data.data);
        } catch (error) {
            console.error('error mengambil data', error);
        }
    }

    return (
        <>  
            <div className="title-blog">
                <h2>Portal Berita</h2>
                <div className="sub-deskripsi">
                    <Image src="/aguspemuda.png" alt="profile" width={100} height={100} className="img" />
                    <div className="deskripsi-title">
                        <h4>Moh agus rifai</h4>
                        <h4>Author</h4>
                    </div>
                </div>
            </div>
            <div className='container_blog'>
                <ul className="blog-utama">
                    {items.map((item)=>(
                        <li key={item.id}>
                            <Link href={`blog/${item.slug}`}>
                                <img src={`https://api-alishlah-production.up.railway.app/gmb/${item.gambar}`} alt="" width='200px' height="200px" />
                                <div className="deskripsi">
                                    <h3>{item.judul}</h3>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="box">
                    <ul className="daftar-blog">
                        {blogs.map((blog)=>(
                            <li key={blog.id}>
                                <Link href={`blog/${blog.slug}`}>
                                    <img src={`https://api-alishlah-production.up.railway.app/gmb/${blog.gambar}`} width='200px' height='200px'/>
                                    <div className="deskripsi">
                                        <h3>{blog.judul}</h3>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Pagination 
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={(page)=>setCurrentPage(page)}
                    />
                </div>
            </div>
        </>
    )
}