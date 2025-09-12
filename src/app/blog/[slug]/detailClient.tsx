"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import Pagination from "../pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

type Detail ={
    id:number;
    judul:string;
    kategori:string;
    paragraf:string;
    gambar:string;
    slug:string;
}

const Detail = ()=>{
    const {slug} = useParams();
    const [blog,setBlog]= useState<Detail | null>(null);
    const [blogs, setBlogs] = useState<Detail[]>([]);
    const [currentPage, setCurrentPage]= useState(1);
    const [totalPages, setTotalPages]= useState(1);

     useEffect(()=>{
         fetchBlog();
     },[slug, currentPage]);

    useEffect(()=>{
        fetchBlogs();
    },[currentPage]);

    const fetchBlog = async()=>{
         try {
             const response = await axios.get(`https://api-alishlah-production.up.railway.app/api/auth/dashboard/${slug}`);
             setBlog(response.data);
         } catch (error) {
             console.error('error det data', error);
         }
     }

    const fetchBlogs = async()=>{
        try {
            const response = await axios.get(`https://api-alishlah-production.up.railway.app/api/auth/dashboard?page=${currentPage}&limit=4`);
            setBlogs(response.data.data);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('error get blogs', error);
        }
    }

    return(
        <>
            <div className="container_detail">
                {blog && (<ul className="blog-single">
                    <li className="title">
                        <h2>{ blog.judul }</h2>
                        <div className="sub-deskripsi">
                            <Image src="/aguspemuda.png" alt="profile" width={100} height={100} className="img" />
                            <div className="deskripsi-title">
                                <h4>Written by moh agus rifai</h4>
                                <h4>Category: { blog.kategori }</h4>
                            </div>
                        </div>
                    </li>
                    <li>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#25D366' }} />
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faFacebook} style={{ color: '#1877F2' }} />
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faInstagram} style={{ color: '#E1306C' }} />
                            </li>
                        </ul>
                    </li>
                    <li className="image">
                        <img src={`https://api-alishlah-production.up.railway.app/gmb/${blog.gambar}`} alt="" width='200px' height='200px'/>
                        <p>source : { blog.gambar }</p>
                    </li>
                    <li>
                        <p>{ blog.paragraf }</p>
                    </li>
                </ul>
                )}
                <div className="blog-detail">
                    <ul className="daftar-blog">
                        {blogs.map(blog=>(
                            <li key={blog.id}>
                                <Link href={`${blog.slug}`}>
                                    <img src={`https://api-alishlah-production.up.railway.app/gmb/${blog.gambar}`} alt="" width='200px' height='200px' />
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
                        onPageChange={(pages)=>setCurrentPage(pages)}
                    />
                </div>
            </div>
        </>
        
    )
}

export default Detail;