import React from 'react'
import './TitleInfo.css'

function TitleInfo(props) {
    return (
        <>
            <div className="poster-container">
                <div className="poster">
                    <img src={props.src} alt="Manga Poster"/>
                </div>
                <p>{props.genres}</p>
                <h1>{props.name}</h1>
            </div>
        </>
    )
}

export default TitleInfo
