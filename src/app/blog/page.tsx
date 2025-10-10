"use client";

import { useState, useEffect } from "react"
import axios from "axios"
import Link from "next/link"
import { useParams } from "next/navigation";
import Pagination from "./pagination";
import Image from "next/image";
import { motion } from "framer-motion";

type Blog ={
    _id:string;
    title:string;
    imageUrl:string;
    slug:string;
}

export default function Blog(){
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [items, setItems] = useState<Blog[]>([]);
    const {slug} = useParams();
    const [currentPage, setCurrentPage]= useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [currentSlide, setCurrenSlide] = useState(0);

    useEffect(()=>{
        fetchBlog();
    },[currentPage]);

    useEffect(()=>{
        fetchItem();
    },[currentPage]);
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrenSlide((prev)=>(prev + 1) % items.length);
        }, 3000);
        return ()=> clearInterval(interval);
    }, [items]);

    const fetchBlog = async()=>{
        try {
            const response = await axios.get(`https://api-alishlah-production.up.railway.app/api/auth/post?page=${currentPage}&limit=4`);
            setBlogs(response.data.posts);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('error mengambil data', error);
        }
    }

    const nextSlide = ()=>{
        setCurrenSlide((prev)=>(prev + 1) % items.length);
    }

    const prevSlide = ()=>{
        setCurrenSlide((prev)=>(prev - 1 + items.length) % items.length);
    }

    const fetchItem = async()=>{
        try {
            const response = await axios.get(`https://api-alishlah-production.up.railway.app/api/auth/post?page=${currentPage}&limit=4`);
            setItems(response.data.posts);
        } catch (error) {
            console.error('error mengambil data', error);
        }
    }

    return (
        <>  
            <div className="title-blog">
                <motion.h2
                    initial={{ opacity:0, x:-50 }}
                    whileInView={{ opacity:1, x:0 }}
                    transition={{ duration:0.6 }}
                    viewport={{ amount: 0.4, once:false }}
                >Portal Berita</motion.h2>
                <motion.div 
                    className="sub-deskripsi"
                    initial={{ opacity:0, y:50 }}
                    whileInView={{ opacity:1, y:0 }}
                    transition={{ duration:0.6 }}
                    viewport={{ amount:0.4, once:false }}>
                    <Image src="/aguspemuda.png" alt="profile" width={100} height={100} className="img" />
                    <div className="deskripsi-title">
                        <h4>Moh agus rifai</h4>
                        <h4>Author</h4>
                    </div>
                </motion.div>
            </div>
            <div className='container_blog'>
                <ul className="blog-utama">
                    {Array.isArray(blogs) && blogs.map((item)=>(
                        <li key={item._id}>
                            <Link href={`blog/${item.slug}`}>
                                <img src={`https://api-alishlah-production.up.railway.app/gmb/${item.imageUrl}`} alt="" width='200px' height="200px" 
                                 style={{ transform:`translateX(-${currentSlide * 670}px)` }}/>
                                <div className="deskripsi"  style={{ transform:`translateX(-${currentSlide * 670}px)` }}>
                                    <h3>{item.title}</h3>
                                </div>
                            </Link>
                        </li>
                    ))}
                    <div className="slider-controls">
                        <button onClick={nextSlide}>&laquo;</button>
                        <button onClick={prevSlide}>&raquo;</button>
                    </div>
                </ul>
                <div className="box">
                    <h1>All Post</h1>
                    <ul className="daftar-blog">
                        {Array.isArray(blogs) && blogs.map((blog)=>(
                            <li key={blog._id}>
                                <Link href={`blog/${blog.slug}`}>
                                    <img src={`https://api-alishlah-production.up.railway.app/gmb/${blog.imageUrl}`} width='200px' height='200px'/>
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
                        onPageChange={(page)=>setCurrentPage(page)}
                    />
                </div>
            </div>
        </>
    )
}