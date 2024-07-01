import Image from "next/image";
import Data from "../../../data.json"
import './hero.css'

export default function page(){
    const heros= Data.heros

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
                        <button>{hero.button}</button>
                    </div>
                </div>   
                ))}          
            </div>
        </>
    )
}