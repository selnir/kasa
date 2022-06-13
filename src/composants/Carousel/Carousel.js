import React from "react";
import "../Carousel/Carousel.scss";
import { useState } from "react";
import { useEffect } from "react";
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";


// export default function ResponsiveCarouselComponent(props) {
//     return (
//         <div>
//             <div className="carousel-container">
//                 <Carousel infiniteLoop autoPlay useKeyboardArrows centerMode dynamicHeight>
//                 {props.name.map((image)=> <div><img src={image} alt={image}></img></div>) }                
//                 </Carousel>
//             </div>
//         </div>
//     );
// }

const Carousel = (props) => {
    const {children} = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

// Set the length to match current children from props
        useEffect(() => {
        setLength(children.length)
        }, [children])

        const next = () => {
            if (currentIndex < (length - 1)) {
                setCurrentIndex(prevState => prevState + 1)
            }else if(currentIndex===(length-1))
            {
                setCurrentIndex(prevState =>0)
            }
        }
        
        const prev = () => {
            if (currentIndex > 0) {
                setCurrentIndex(prevState => prevState - 1)
            }else if(currentIndex===0){
                setCurrentIndex(prevState => length-1)
            }
        }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <button onClick={prev} className="left-arrow">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <div className="carousel-content-wrapper">
                <div
                    className="carousel-content"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }} >
                        {children}
                    </div>
                </div>
                <button onClick={next} className="right-arrow">
                <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    )
}

export default Carousel