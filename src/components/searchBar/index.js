import React, {useEffect, useRef} from 'react';
import './index.css'

const SearchBar = (props) => {


    function handleInputChange(e) {
        const text = e.target.value
        if (text.length === 13) {
            props.handleBarcodeInput(text)
            e.target.value = ''
        }
    }


    return (
        <div>
            <input
                ref={props.inputRef}
                className='searchbar-input'
                placeholder='Search / Barcode / Item Name'
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SearchBar;