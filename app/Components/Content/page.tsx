import './content.css'
import Data from '../../../data.json'

export default function page(){
    const contents = Data.contents
    return(
        <div className='content'>
            {contents.map((content, index) =>(  
                <div key={index} className="phase-two-container">
                    <div className="item-one">
                        <p>{content.para1}</p>
                    </div>
                    <div className="phase-two-right-subcontainer">
                        <div className="item-two">
                            <p>{content.para2}</p>
                        </div>
                        <div className="item-three">
                            <p>{content.para3}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}