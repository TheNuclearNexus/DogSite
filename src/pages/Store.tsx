import React, {useRef, useState} from 'react'
import styled from 'styled-components';
import { addCurrency, events } from '..';
import { increaseMaxDogCount } from './Dog';
import { getCurrency } from '..';

const StoreContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 50%; 
`

const StoreText = styled.label`
    color: black;
    margin-top: -50%; 
    margin-left: 10%; //adding pixels to the [direction]

    width: 500px;
    height: 200px;

    text-align: center;
    font-size: 28px;
    font-weight: bold;
    vertical-align: center;
`

function Store() {
    const errorLabel = useRef(null);

    return (
      <div style={{display:'flex', alignItems:'center', gap: 8}}>
            <button onClick={()=>addCurrency(10)}>Add Monei</button>
            <button onClick={()=>{
                if(getCurrency() < 200) {
                  if(errorLabel.current != null) {
                    const lbl = errorLabel.current as HTMLLabelElement
                    lbl.textContent = 'Not enough currency!'
                  }
                } else {
                  addCurrency(-200)
                  increaseMaxDogCount()
                }
            }}>buy new dog</button>
            <label ref={errorLabel}></label>
        </div>
    )
}

export default Store