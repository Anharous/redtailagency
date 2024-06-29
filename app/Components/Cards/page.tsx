"use client"
import Image from "next/image";
import './cards.css'
import Data from '../../../data.json'

import { useState } from 'react';


export default function page() {
    const cards= Data.cards
    const [readMoreStates, setReadMoreStates] = useState(Array(cards.length).fill(false));

    const toggleReadMore = (index: number) => {
        const newReadMoreStates = [...readMoreStates];
        newReadMoreStates[index] = !newReadMoreStates[index];
        setReadMoreStates(newReadMoreStates);
    };

    return (
        <div className="cards-container">
            <div className="cards-head">
                <h1>Completing your financial blueprint</h1>
                <div className="cards-line"></div>
            </div>
            <div className="cards-item-container">
                {cards.map((card, index) => (
                    <div key={index} className="cards-item">
                        <Image src={card.image} alt="file" width={64} height={64} />
                        <p>{card.name}</p>
                        <h4>{card.title}</h4>
                        <div className="cards-item-line"></div>
                        <div className={`cards-para ${readMoreStates[index] ? 'expanded' : ''}`}>
                            <p>{card.description}</p>
                        </div>
                        <h5 onClick={() => toggleReadMore(index)}>
                            {readMoreStates[index] ? 'Read Less' : 'Read More'}
                        </h5>
                    </div>
                ))}
            </div>
        </div>
    );
}
