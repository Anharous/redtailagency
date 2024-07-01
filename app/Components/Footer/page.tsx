import Image from "next/image";
import './footer.css'
import Link from "next/link";
import Data from '../../../data.json'

export default function page(){
    const icons= Data.footer_icons
    const contacts = Data.footer_contacts
    const links = Data.footer_links


    return(
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <Image src='/footer-logo.svg' alt="footer-logo.svg" width={202} height={56}/>
                    <p>Benefit from our decades of industry experience and knowledge, ensuring you receive expert guidance and support at every step of your life insurance journey.</p>
                    <div className="footer-icons">
                        {icons.map((icon,index) =>(
                            <div key={index} className="icons">
                                <Image src={icon.icon} alt={icon.alt} width={40} height={40}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="footer-vertical-line"></div>
                <div className="footer-top-right">
                    <h2>Contact info</h2>
                    {contacts.map((contact,index) =>(
                 
                    <div key={index} className="contact">
                        <Image src={contact.image} alt={contact.alt} width={24} height={24}/>
                        <p>{contact.para}</p>
                    </div>
                    
                    ))}
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-copyright">
                    <p>© 2024 Redtail Insurance Agency, New York, NY. All Rights Reserved.</p>
                </div>
                <div className="footer-bottom-link">
                {links.map((link, index) => (
                    <div key={index} className="link">
                        <Link href={link.link} id="footer-link-one">{link.para}</Link>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}