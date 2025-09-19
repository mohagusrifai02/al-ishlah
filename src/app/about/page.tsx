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
                <div className="book">
                    <div className="cover">
                        <h1>Mukaddimah book</h1>
                        <Image 
                            src='/logo.jpeg'
                            alt='logo'
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="page"></div>
                    <div className="page"></div>
                    <div className="page"></div>
                    <div className="page"></div>
                    <div className="page img-page">
                        <Image 
                            className='img'
                            src='/mbakmbak.jpg'
                            alt='mbak'
                            width={150}
                            height={150}
                        />
                    </div>
                    <div className="last-page">
                        <div className="title">
                            <h1>About Us</h1>
                            <h3>Yayasan Al-Ishlah</h3>
                        </div>
                        <h3>Yayasan Al-Ishlah bergerak di bidang pendidikan, dakwah, dan sosial, berfokus pada pembinaan generasi berakhlak serta kepedulian terhadap anak yatim, piatu, dan dhuafa melalui program berkelanjutan.</h3>
                    </div>
                    <div className="back-cover"></div>
                </div>
            </motion.div>
            <div className="title">
                <h1>Statistik dan Pendidikan</h1>
            </div>
            <div className="jumlah">
                <motion.div 
                    initial= {{opacity:0, scale:0.8}}
                    whileInView = {{ opacity:1, scale:1 }}
                    transition = {{ duration:0.6}}
                    viewport= {{ amount:0.4, once:false}}
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
                    viewport= {{ amount:0.4, once:false}}
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
                    viewport= {{ amount:0.4, once:false}}
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
                    viewport= {{ amount:0.4, once:false}}
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
                    viewport= {{ amount:0.4, once:false}}
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