import React from 'react'
import '../../App.css'
import Slider from '../Slider'
import Cards from '../Cards'

function Home () {
    return (
        <>
            <Slider />
            <Cards title='Latest Manga Release' color='#fff' link='/latest'/>
            <Cards title='New Posted' color='#ffe6e1' link='/komine-app'/>
        </>
    )
}

export default Home