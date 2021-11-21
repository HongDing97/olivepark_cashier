import React, {useEffect, useRef} from 'react';
import thanks from './thanks.png'
import './index.css'


const TransparentMask = props => {

    const mask = useRef()
    const img = useRef()

    useEffect(() => {
        mask.current.className += ' blur'
        setTimeout(() => img.current.className += ' pic-display',
            100
        )

        setTimeout(() => {
                mask.current.className += ' clear-blur'
                img.current.className = ''
            }, 2000
        )
    })

    return (
        <div ref={mask} className='transparent-mask'>
            <img ref={img} alt='thanks' src={thanks}/>
        </div>
    );
}

export default TransparentMask