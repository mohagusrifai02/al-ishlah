"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const menuOpen = ()=>{
        setIsOpen(!isOpen);
    }
    const closeMenu = ()=>{
        setIsOpen(false);
    }
    return(
        <>
            <nav>
                <div className="judul">
                    <div className="icon">
                        <Image
                            src='/logo.jpeg'
                            alt="logo"
                            width={50}
                            height={50}
                        />
                        <div className="garis">
                            <h4>Pesantren Al-Ishlah</h4>
                            <p>TK dan SD IT Hidayatullah</p>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="bars" onClick={menuOpen} />
                </div>
                <ul className={`list ${isOpen ? 'open':''}`} onClick={closeMenu}>
                    <li>
                        <Link href='/'>home</Link>
                    </li>
                    <li>
                        <Link href='/about'>about</Link>
                    </li>
                    <li>
                        <Link href='/program'>program</Link>
                    </li>
                    <li>
                        <Link href='/blog'>blog</Link>
                    </li>
                    <li>
                        <Link href='/kontak'>kontak</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}