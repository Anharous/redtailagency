"use client"
import Image from "next/image";
import Data from "../../../data.json"
import { useEffect } from "react";
import './hero.css'

export default function page(){
    const heros= Data.heros

    useEffect(() => {
        const buttonIds = [
            'heroButton-one',
            'heroButton-two',
            'heroButton-three',
            'heroButton-four',
            'heroButton-five',
            'heroButton-six',
            'heroButton-seven',
            'heroButton-eight',
            'heroButton-nine',
            'heroButton-ten'
        ];

        const scrollToFormPage = () => {
            const formPage = document.getElementById('formPage')?.offsetTop;
            
            if (formPage !== undefined) {
                window.scrollTo({
                    top: formPage,
                    behavior: 'smooth'
                });
            }
        };

        const buttons = buttonIds.map(id => document.getElementById(id)).filter(button => button !== null);

        buttons.forEach(button => {
            button.addEventListener('click', scrollToFormPage);
        });

        // Clean up the event listeners when the component unmounts
        return () => {
            buttons.forEach(button => {
                button.removeEventListener('click', scrollToFormPage);
            });
        };
    }, []);

    return(
        <>
            <div className="slider">
                {heros.map((hero,index) => (       
                <div key={index} className="slides">
                    <div className="slide">
                        <Image src={hero.image} alt="Image-one" width={1519} height={723} className="hero-img"/></div>
                    <div className="hero-para">
                        <h1>{hero.name}</h1>
                        <p>{hero.description}</p>
                        <button id={hero.buttonId}>{hero.button}</button>
                    </div>
                </div>   
                ))}          
            </div>
        </>
    )
}