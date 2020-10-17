import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import './manga-lists/MangaItems'
import { MangaItems } from './manga-lists/MangaItems'
import { Link } from 'react-router-dom'

function Cards(props) {
    return (
        <>
        <div className="cards" style={{background: props.color}}>
            <Link to={props.link} className="cards__title">
                <h1> {props.title} <i class="fas fa-chevron-right"></i></h1>
            </Link>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {MangaItems.map((item, index) => {
                            return (
                                <CardItem 
                                key={index}
                                title={item.name}
                                path={item.path}
                                genres={item.genres}
                                src={process.env.PUBLIC_URL + item.cover_image}
                                text={item.text}
                                chap={item.chaps[0]}
                                />
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cards
