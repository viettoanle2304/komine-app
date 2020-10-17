import React from 'react'
import './MangaDescribtion.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import { MangaItems } from './manga-lists/MangaItems'

function MangaDescribtion() {
    const Cards = ({ ep }) => {
        return (
            <Link className= 'chapters-info' to='/reading?Name=Naruto' >
            <div className="chapter-info">
                <i class="fas fa-book-reader"></i>
                <p id='chap'>Chap {ep}</p>
                <p id='date'>Oct 11, 2020</p>  
                <p id='followers'><i class="far fa-heart"></i> 5,135</p>
            </div>
            </Link>
        )
    }

    return (
        <>
            <div className="chapter-container">
                <div className="chapters">
                <ul className='chapter'>
                {MangaItems.map((item, index) => {
                    if (item.name === 'Naruto') {
                        return (
                            item.chaps.slice(0, 5).map(i =>
                            <li className='chapter-number'>
                                <Cards ep={i} />
                            </li>
                            )
                        )
                    }
                })}
                </ul>
                </div>
                <div className="manga-description">
                    <div className="manga-description__reading-info">
                        <div className="reader-count">
                            <p><i class="fas fa-book-reader"></i> 50.5k</p>
                        </div>
                        <div className="rating-star">
                            <p id='rating-score'><i class="fas fa-star"></i> 4.85</p>
                            <p id='icon'>Rate</p>
                        </div>
                    </div>
                    <div className="manga-description__info">
                        <h3><i class="fas fa-heart"></i> DESCRIPTION</h3>
                    </div>
                    <div className="manga-desciption__text">
                        {MangaItems.map((item, index) => {
                            if (item.name === "Naruto") {
                                return (
                                    <p>{item.text}</p>
                                )
                            }
                        })}
                    </div>
                    <div className="btn-cfa">
                        <Link to='/reading?Name=Naruto' className='btn-mobile'>
                            <button
                q           className='btn btn--outline btn--large'>
                                READ NOW <i class="fas fa-chevron-right"></i>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MangaDescribtion
