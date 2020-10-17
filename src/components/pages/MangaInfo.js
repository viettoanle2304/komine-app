import React from 'react'
import '../../App.css'
import TitleInfo from '../TitleInfo'
import { MangaItems } from '../manga-lists/MangaItems'
import MangaDescribtion from '../MangaDescribtion'

function MangaInfo() {
    return (
        <>
            <TitleInfo 
            src={process.env.PUBLIC_URL + '/images/NarutoPoster.jpg'}
            name='Naruto'
            genres='Adventure, Fantasy'/>
            <MangaDescribtion />
        </>
    )
}

export default MangaInfo
