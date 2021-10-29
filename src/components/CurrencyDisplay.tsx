import React, {useRef} from 'react'
import {events} from '../index'

function CurrencyDisplay(props: any) {
    const currencyLabel = useRef(null)

    events.on('change-currency', (v) => {
        if(currencyLabel.current != null) {
            const lbl = currencyLabel.current as HTMLLabelElement
            lbl.textContent = `Currency: ${v}` 
        }
    })

    return (
        <label style={props.style} ref={currencyLabel}>Currency: 0</label>
    )
}

export default CurrencyDisplay;