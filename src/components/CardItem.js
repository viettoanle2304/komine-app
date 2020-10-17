import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
    return (
        <>
            <li className="cards__item">
                <Link className="cards__item--link" to={props.path}>
                    <figure className="cards__item__pic--wrap" data-category={props.genres} data-chap={props.chap}>
                        <img src={props.src} alt="Manga" className="cards__item--img"/>
                    </figure>
                    <h4>{props.title}</h4>
                    <div className="cards__item--info">
                            <h5 className="cards__item--text">
                                {props.text}
                            </h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
