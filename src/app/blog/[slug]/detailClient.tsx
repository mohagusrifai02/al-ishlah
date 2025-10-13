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
    _id:string;
    title:string;
    imageUrl:string;
    slug:string;
    content:string;
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
             const response = await axios.get(`https://api-alishlah-production.up.railway.app/api/auth/post/${slug}`);
             setBlog(response.data.posts);
         } catch (error) {
             console.error('error det data', error);
         }
     }

    const fetchBlogs = async()=>{
        try {
            const response = await axios.get(`https://api-alishlah-production.up.railway.app/api/auth/post?page=${currentPage}&limit=4`);
            setBlogs(response.data.posts);
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
                        <h2>{ blog.title }</h2>
                        <div className="sub-deskripsi">
                            <Image src="/aguspemuda.png" alt="profile" width={100} height={100} className="img" />
                            <div className="deskripsi-title">
                                <h4>Written by moh agus rifai</h4>
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
                        <Image src={`https://api-alishlah-production.up.railway.app${blog.imageUrl}`} alt="" width={200} height={200} />
                    </li>
                    <li>
                        <p dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, "<br />") }} />
                    </li>
                </ul>
                )}
                <div className="blog-detail">
                    <h1>All Post</h1>
                    <ul className="daftar-blog">
                        {blogs.map(blog=>(
                            <li key={blog._id}>
                                <Link href={`${blog.slug}`}>
                                    <Image src={`https://api-alishlah-production.up.railway.app${blog.imageUrl}`} alt="" width={200} height={200} />
                                    <div className="deskripsi">
                                        <h3>{blog.title}</h3>
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