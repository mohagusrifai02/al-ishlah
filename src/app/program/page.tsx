"use client";

import { motion } from 'framer-motion'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMosque, faSchool, faHandHoldingHand } from '@fortawesome/free-solid-svg-icons';

const Program=()=>{
    return (
        <>
            <div className="container_program">
                <h1>Program Unggulan</h1>
                <ul className="box">
                    <motion.li
                        initial={{ opacity:0, y:50 }}
                        whileInView={{ opacity:1, y:0 }}
                        transition={{ duration:0.6 }}
                        viewport={{ amount:0.4, once:false }}
                    >
                        <div className="img">
                            <FontAwesomeIcon icon={faMosque} className='icon'/>
                            <h3>Dakwah</h3>
                        </div>
                        <div className="deskripsi">
                            <h3>Dakwah</h3>
                            <p>Melalui kegiatan dakwah yang inklusif dan berkelanjutan, kami berkomitmen menyebarkan nilai-nilai kebaikan, memperkuat ukhuwah Islamiyah, dan membangun kesadaran spiritual di tengah masyarakat.</p>
                        </div>
                    </motion.li>
                    <motion.li
                        initial={{ opacity:0, y:50 }}
                        whileInView={{ opacity:1, y:0 }}
                        transition={{ duration:0.6 }}
                        viewport={{ amount:0.4, once:false }}
                    >
                        <div className="img">
                            <FontAwesomeIcon icon={faHandHoldingHand} className='icon'/>
                            <h3>Sosial</h3>
                        </div>
                        <div className="deskripsi">
                            <h3>Sosial</h3>
                            <p>Yayasan Al-Ishlah berkomitmen menghadirkan kepantian yang layak dan penuh kasih bagi anak-anak yatim, piatu, dan dhuafa. Melalui pendidikan, pembinaan karakter, dan pemenuhan kebutuhan dasar.</p>
                        </div>
                    </motion.li>
                    <motion.li
                        initial={{ opacity:0, y:50 }}
                        whileInView={{ opacity:1, y:0 }}
                        transition={{ duration:0.6 }}
                        viewport={{ amount:0.4, once:false }}
                    >
                        <div className="img">
                            <FontAwesomeIcon icon={faSchool} className='icon'/>
                            <h3>Pendidikan</h3>
                        </div>
                        <div className="deskripsi">
                            <h3>Pendidikan</h3>
                            <p>Membuka akses pendidikan berkualitas yang berlandaskan nilai-nilai Islam, Yayasan Al-Ishlah membina generasi muda agar tumbuh menjadi insan berilmu, berakhlak, dan siap berkontribusi bagi masyarakat.</p>
                        </div>
                    </motion.li>
                </ul>
            </div>
        </>
    )
}

export default Program;