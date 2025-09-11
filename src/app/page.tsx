"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container_home">
            <motion.div 
                className="gambar"
                initial={{ opacity:0, y:50 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.6 }}
                viewport={{ amount: 0.4, once:false }}
            >
                <div className="lingkaran"></div>
                <Image
                  src="/hafiz.png"
                  alt="hafiz"
                  width={200}
                  height={200}
                />
            </motion.div>
            <motion.div 
                className="deskripsi"
                initial={{ opacity:0, x:-50 }}
                whileInView={{ opacity:1, x:0 }}
                transition={{ duration:0.6 }}
                viewport={{ amount:0.4, once:false }}
            >
                <div className="title">
                    <h1>Yayasan Al-Ishlah</h1>
                    <h3>Hidayatullah Kabupaten Tegal</h3>
                </div>
                <h3>Membangun Generasi Berkarakter, Mengubah Masa Depan Bangsa.</h3>
            </motion.div>
           </div>
  );
}
