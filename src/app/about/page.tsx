"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'

const About =()=>{
    return (
        <>
            <motion.div 
                className="container_about"
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.6 }}
                viewport={{ amount:0.4, once:false }}
            >
                <div className="gambar">
                    <div className="lingkaran"></div>
                    <Image 
                        src='/aguspemuda.png'
                        alt='about'
                        width={200}
                        height={200}
                    />
                    </div>
                <motion.div 
                    className="deskripsi"
                    initial={{ opacity:0, x:-50 }}
                    whileInView={{ opacity:1, x:0 }}
                    transition={{ duration:0.6 }}
                    viewport={{ amount:0.4, once:false }}
                >
                    <div className="title">
                        <h1>About Us</h1>
                        <h3>Yayasan Al-Ishlah</h3>
                    </div>
                    <h3>Yayasan Al-Ishlah bergerak di bidang pendidikan, dakwah, dan sosial, berfokus pada pembinaan generasi berakhlak serta kepedulian terhadap anak yatim, piatu, dan dhuafa melalui program berkelanjutan.</h3>
                    <div className="ttd">
                        <h4>Moh Agus Rifai</h4>
                        <p>Humas Yayasan Ai-Ishlah</p>
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}

export default About