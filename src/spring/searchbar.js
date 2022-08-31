import React from 'react';
import './search_style.css';

const SearchBar = () => {
    return (
        <div className='color-bg'>
            <nav>
                <form class="d-flex my-2">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                </form>
                <div class="scroll-bg">
                    <div class="scroll-div">
                        <div class="scroll-obect">
                       
                        </div></div>
                </div>
            </nav>
        </div>
    )
}

export default SearchBar
