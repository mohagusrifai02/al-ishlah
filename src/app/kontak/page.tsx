import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons/faMapLocation";


const Kontak =()=>{
    return (
        <>
            <div className="container_kontak">
                <div className="gambar">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31689.64209728876!2d109.12013951083982!3d-6.8659889000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb789c3d39423%3A0x9f0177c89a379363!2sYayasan%20Al-Islah!5e0!3m2!1sen!2sid!4v1756535495422!5m2!1sen!2sid" 
                    width="600" 
                    height="450" 
                    style={{border:0}}
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="deskripsi">
                    <div className="title">
                        <h1>Contact Us</h1>
                        <h3>Yayasan Al-Ishlah</h3>
                    </div>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faMapLocation}/>&nbsp;
                            <span>JL. Jali Selatan, Kel. Dampyak, Kramat, Tegal</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPhone}/>&nbsp;
                            <span>(0283) 353858</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer">
                <FontAwesomeIcon icon={faCopyright}/> &nbsp;
                <span>2025 Yayasan Al-Ishlah. All rights reserved</span>
            </div>
        </>
    )
}

export default Kontak;