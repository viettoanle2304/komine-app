import React from 'react'
import './PopularCards.css'
import { Link } from 'react-router-dom'

function PopularCards(props) {
    return (
        <>
            <div className="popular-cards__container">
                <div className="ranking">
                    <p>{props.ranking}</p>
                </div>
                <div className="popular-cards__content">
                    <div className="popular-cards__content--detail">
                        <div className="popular-cards__content--pic">
                            <img src={process.env.PUBLIC_URL + props.src} alt="Top Manga"/>
                        </div>
                        <div className="popular-cards__content--info">
                            <h4>{props.genres}</h4>
                            <h3>{props.name}</h3>
                            <p>Chap {props.chap}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularCards
