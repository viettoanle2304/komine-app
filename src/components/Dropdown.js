import React from 'react'
import { Link } from 'react-router-dom'
import { MangaItems } from './manga-lists/MangaItems'
import './Dropdown.css'

function Dropdown() {
    return (
        <>
            <div className="dropdown-container">
                <button id='prev-chap'><i class="fas fa-chevron-circle-left"></i></button>
                <form>
                    <label>
                        <select name="chap" id="chap">
                            {MangaItems.map((item, index) => {
                                if (item.name === 'Naruto')
                                return (
                                    item.chaps.slice(0, 5).map(i =>
                                            <option value={i}>Chap {i}</option>
                                    )
                                )
                            })}
                        </select>
                    </label>
                </form>
                <button id='next-chap'><i class="fas fa-chevron-circle-right"></i></button>
            </div>
        </>
    )
}

export default Dropdown
