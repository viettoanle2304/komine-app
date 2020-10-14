import React, { useState, useEffect } from 'react'
import './Slider.css'

function Slider() {
    function ImgCom({ src }) {
        return (
            <img src={src} alt="manga-images"/>
        )
    }

    let photos = [<ImgCom src={process.env.PUBLIC_URL + '/images/OnePunchMan.jpg'} />,
    <ImgCom src={process.env.PUBLIC_URL + '/images/Naruto.jpg'} />,
    <ImgCom src={process.env.PUBLIC_URL + '/images/OnePiece.jpg'} />,
    <ImgCom src={process.env.PUBLIC_URL + '/images/TenseiShitaraSlime.jpg'} />,
    <ImgCom src={process.env.PUBLIC_URL + '/images/TateNoYushaNoNariagari.jpg'} />]

    const [x, setX] = useState(0)

    const goLeftHandler = () => {
        x == 0 ? setX(-100*(photos.length-1)) : setX(x + 100)
    }

    const goRightHandler = () => {
        x == -100*(photos.length-1) ? setX(0) : setX(x - 100)
    }

    useEffect(() => {
        const interval = setInterval(goRightHandler, 3000)
        return () => clearInterval(interval)
    })

    return (
        <div className='slider-container'>
            {
                photos.map((item, index) => {
                    return (
                        <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>{item}</div>
                    )
                })
            }
            <button id='goLeft' onClick={goLeftHandler}><i class="fas fa-chevron-circle-left"></i></button>
            <button id='goRight' onClick={goRightHandler}><i class="fas fa-chevron-circle-right"></i></button>
        </div>
    )
}

export default Slider
