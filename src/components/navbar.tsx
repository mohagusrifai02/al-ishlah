import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(){
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
                        <h4>Yayasan Al-Ishlah</h4>
                    </div>
                    <FontAwesomeIcon icon={faBars} className="bars" />
                </div>
                <ul className="list">
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