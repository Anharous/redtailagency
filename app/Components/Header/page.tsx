"use client"
import Image from "next/image"
import { useEffect } from "react";
import './header.css'

export default function Page() {  
    useEffect(() => {
        const scrollButton = document.getElementById('scrollButton');
        
        const scrollToFormPage = () => {
            const formPage = document.getElementById('formPage')?.offsetTop;
            
            window.scrollTo({
                top: formPage,
                behavior: 'smooth'
            });
        };

        if (scrollButton) {
            scrollButton.addEventListener('click', scrollToFormPage);
            return () => {
                scrollButton.removeEventListener('click', scrollToFormPage);
            };
        }
    }, []);
    
    return(
        <div className="header">
            <div className="header-logo">
                <Image src="/header-logo.svg" alt="logo" width={206} height={56} id="header-img"/>
            </div>
            <div className="header-button">
                <button id="scrollButton">Quotes</button>
            </div>
        </div>
    )
}