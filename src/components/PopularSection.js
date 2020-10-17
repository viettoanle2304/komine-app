import React from 'react'
import { Link } from 'react-router-dom'
import { MangaItems } from './manga-lists/MangaItems'
import './PopularSection.css'
import PopularCards from './PopularCards'

function PopularSection(props) {
    return (
        <>
            <div className="cards" style={{background: '#fff'}}>
                <Link to='/popular' className="cards__title" id='popular-section__link'>
                    <h1 id='main-title'> MOST POPULAR</h1>
                </Link>
            </div>
            <div className="popular-sections">
            <div className="popular-sections__container">
                <div className="popular-week" style={{minHeight: `${props.height}px`}}>
                    <div className="cards" style={{background: '#fff'}}>
                        <Link to='/popular' className="cards__title" id='popular-section__link'>
                            <h1 id='week-title'> THIS WEEK <i class="fas fa-chevron-right"></i></h1>
                        </Link>
                    </div>
                    <div className="popular-week__cards--container">
                        {MangaItems.sort((a, b) => a.week_rank > b.week_rank ? 1 : -1).slice(0, props.number).map((item, index) => {
                                return (
                                    <PopularCards 
                                    ranking={item.week_rank}
                                    src={item.cover_image}
                                    genres={item.genres}
                                    name={item.name}
                                    chap={item.chaps[0]}
                                    />
                                )
                        })}
                    </div>
                </div>
                <div className="popular-month" style={{minHeight: `${props.height}px`}}>
                    <div className="cards" style={{background: '#fff'}}>
                        <Link to='/popular' className="cards__title" id='popular-section__link'>
                            <h1 id='month-title'> THIS MONTH <i class="fas fa-chevron-right"></i></h1>
                        </Link>
                    </div>
                    <div className="popular-week__cards--container">
                        {MangaItems.sort((a, b) => a.month_rank > b.month_rank ? 1 : -1).slice(0, props.number).map((item, index) => {
                                return (
                                    <PopularCards 
                                    ranking={item.month_rank}
                                    src={item.cover_image}
                                    genres={item.genres}
                                    name={item.name}
                                    chap={item.chaps[0]}
                                    />
                                )
                        })}
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default PopularSection
