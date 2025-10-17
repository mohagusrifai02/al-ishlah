"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'
import { AnimatedCounter, SantriPutra, SantriPutri, PengurusPutra, PengurusPutri } from '@/components/AnimatedCounter';
import Link from 'next/link';

const About =()=>{
    return (
        <>
            <div className="container_about">
                <motion.div 
                    className="hero-about"
                    initial={{ opacity:0, scale:0.8 }}
                    whileInView={{ opacity:1, scale:1 }}
                    transition={{ duration:0.6 }}
                    viewport={{ amount:0.4, once:true }}>
                    <motion.div
                        className="hero-gambar"
                        initial={{ opacity:0, scale:0.8 }}
                        whileInView={{ opacity:1, scale:1 }}
                        transition={{ duration:0.6 }}
                        viewport={{ amount:0.4, once:true }}>
                        <Image 
                            src='/mbakmbak.jpg'
                            className='img-1'
                            alt='about hero'
                            width={600}
                            height={400}
                        />
                        <Image 
                            src='/piknik.jpg'
                            className='img-2'
                            alt='about hero'
                            width={600}
                            height={400}
                        />
                    </motion.div>
                
                    <div className="deskripsi">
                        <div className="logo">
                            <Image 
                            src='/alishlah.png'
                            alt='hidayatullah'
                            width={100}
                            height={100}
                            />
                            <Image 
                                src='/logo.jpeg'
                                alt='alishlah'
                                width={70}
                                height={70}
                            />
                        </div>
                        <h1>Tentang Kami</h1>
                        <p>Pesantren Al-Ishlah didirikan pada tahun 1995 dengan tujuan memberikan pendidikan agama dan umum yang berkualitas kepada generasi muda. Kami berkomitmen untuk mencetak insan yang berakhlak mulia, berilmu, dan siap menghadapi tantangan zaman.</p>
                        <Link href="/kontak" className='tbl-kontak'>Hubungi Kami</Link>
                    </div>
                </motion.div>
            </div>
            <div className="title">
                <h1>Statistik dan Pendidikan</h1>
            </div>
            <div className="jumlah">
                <motion.div 
                    initial= {{opacity:0, scale:0.8}}
                    whileInView = {{ opacity:1, scale:1 }}
                    transition = {{ duration:0.6}}
                    viewport= {{ amount:0.4, once:true}}
                    className="santri putra">
                    <div className="card-santri">
                        <Image 
                            src="/anakmuslim.png"
                            alt="semuasantriputra"
                            width={100}
                            height={100}
                        />
                        <div className="deskripsi">
                            <h2>Jumlah Santri</h2>
                            <AnimatedCounter />
                        </div>
                    </div>
                    <ul className="card-sekolah">
                        <li>
                            <h3>TK</h3>
                            <span>5</span>
                        </li>
                        <li>
                            <h3>SD</h3>
                            <span>20</span>
                        </li>
                        <li>
                            <h3>SMP</h3>
                            <span>10</span>
                        </li>
                        <li>
                            <h3>SMA</h3>
                            <span>5</span>
                        </li>
                    </ul>
                </motion.div>
                <motion.div 
                    initial= {{opacity:0, scale:0.8}}
                    whileInView = {{ opacity:1, scale:1 }}
                    transition = {{ duration:0.6}}
                    viewport= {{ amount:0.4, once:true}}
                    className="santri putra">
                    <div className="card-santri">
                        <Image 
                            src="/anakmuslim.png"
                            alt="santriputra"
                            width={100}
                            height={100}
                        />
                        <div className="deskripsi">
                            <h2>Santriwan</h2>
                            <SantriPutra />
                        </div>
                    </div>
                    <ul className="card-sekolah">
                        <li>
                            <h3>TK</h3>
                            <span>2</span>
                        </li>
                        <li>
                            <h3>SD</h3>
                            <span>10</span>
                        </li>
                        <li>
                            <h3>SMP</h3>
                            <span>7</span>
                        </li>
                        <li>
                            <h3>SMA</h3>
                            <span>1</span>
                        </li>
                    </ul>
                </motion.div>
                <motion.div 
                    initial= {{opacity:0, scale:0.8}}
                    whileInView = {{ opacity:1, scale:1 }}
                    transition = {{ duration:0.6}}
                    viewport= {{ amount:0.4, once:true}}
                    className="santri putri">
                    <div className="card-santri">
                        <Image 
                            src="/anakmuslimah.png"
                            alt="santriputri"
                            width={100}
                            height={100}
                        />
                        <div className="deskripsi">
                            <h2>Santriwati</h2>
                            <SantriPutri />
                        </div>
                    </div>
                    <ul className="card-sekolah">
                        <li>
                            <h3>TK</h3>
                            <span>0</span>
                        </li>
                        <li>
                            <h3>SD</h3>
                            <span>10</span>
                        </li>
                        <li>
                            <h3>SMP</h3>
                            <span>5</span>
                        </li>
                        <li>
                            <h3>SMA</h3>
                            <span>5</span>
                        </li>
                    </ul>
                </motion.div>
                <motion.div 
                    initial= {{opacity:0, scale:0.8}}
                    whileInView = {{ opacity:1, scale:1 }}
                    transition = {{ duration:0.6}}
                    viewport= {{ amount:0.4, once:true}}
                    className="santri pengurus-putra">
                    <div className="card-santri">
                        <Image 
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
                    <ul className="card-sekolah">
                        <li>
                            <h3>SMA</h3>
                            <span>3</span>
                        </li>
                        <li>
                            <h3>S1</h3>
                            <span>5</span>
                        </li>
                        <li>
                            <h3>S2</h3>
                            <span>1</span>
                        </li>
                        <li>
                            <h3>Hafiz</h3>
                            <span>1</span>
                        </li>
                    </ul>
                </motion.div>
                <motion.div 
                    initial= {{opacity:0, scale:0.8}}
                    whileInView = {{ opacity:1, scale:1 }}
                    transition = {{ duration:0.6}}
                    viewport= {{ amount:0.4, once:true}}
                    className="santri pengurus-putri">
                    <div className="card-santri">
                        <Image 
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
                    <ul className="card-sekolah">
                        <li>
                            <h3>SMA</h3>
                            <span>3</span>
                        </li>
                        <li>
                            <h3>S1</h3>
                            <span>1</span>
                        </li>
                        <li>
                            <h3>S2</h3>
                            <span>0</span>
                        </li>
                        <li>
                            <h3>Hafiz</h3>
                            <span>1</span>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </>
    )
}

export default About