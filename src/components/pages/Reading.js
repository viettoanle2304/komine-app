import React from 'react'
import '../../App'
import Dropdown from '../Dropdown'
import ReadingArea from '../ReadingArea'
import TitleInfo from '../TitleInfo'

function Reading() {
    return (
        <>
            <TitleInfo 
            src={process.env.PUBLIC_URL + '/images/NarutoPoster.jpg'}
            name='Naruto'
            genres='Adventure, Fantasy'/>
            <Dropdown />
            <ReadingArea />
        </>
    )
}

export default Reading
