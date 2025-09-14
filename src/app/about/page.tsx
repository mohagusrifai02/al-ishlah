"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'
import { AnimatedCounter, SantriPutra, SantriPutri, PengurusPutra, PengurusPutri } from '@/components/AnimatedCounter';

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
            <div className="jumlah">
                <div className="santri semua">
                    <div className="img">
                        <Image 
                            src="/anakmuslim.png"
                            alt="semuasantriputra"
                            width={100}
                            height={100}
                        />
                        <Image 
                            src="/anakmuslimah.png"
                            alt="semuasantriputri"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="deskripsi">
                        <h2>Jumlah Santri</h2>
                        <AnimatedCounter />
                    </div>
                </div>
                <div className="santri putra">
                    <Image 
                    className='img'
                        src="/anakmuslim.png"
                        alt="santriputra"
                        width={100}
                        height={100}
                    />
                    <div className="deskripsi">
                        <h2>Santri Putra</h2>
                        <SantriPutra />
                    </div>
                </div>
                <div className="santri putri">
                    <Image 
                        className='img'
                        src="/anakmuslimah.png"
                        alt="santriputri"
                        width={100}
                        height={100}
                    />
                    <div className="deskripsi">
                        <h2>Santri Putri</h2>
                        <SantriPutri />
                    </div>
                </div>
                <div className="santri pengurus-putra">
                    <Image 
                        className='img'
                        src="/muslim.png"
                        alt="pengurusputra"
                        width={100}
                        height={100}
                    />
                    <div className="deskripsi">
                        <h2>Pengurus Putra</h2>
                        <PengurusPutra />
                    </div>
                </div>
                <div className="santri pengurus-putri">
                    <Image 
                        className='img'
                        src="/muslimah.png"
                        alt="pengurusputri"
                        width={100}
                        height={100}
                    />
                    <div className="deskripsi">
                        <h2>Pengurus Putri</h2>
                        <PengurusPutri />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About