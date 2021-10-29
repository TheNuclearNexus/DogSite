import React, {useState} from 'react'
import styled from 'styled-components';

const SpeechContainer = styled.div`
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

const SpeechText = styled.label`
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


const speechBubbleLink = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUOkZ-_dfBMYstmc4Ntn3ZZ8nkIKmu31S4q5nahpJTWC43e4ykiaRZe0e18Uavo8_HY8U:https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Speech_bubble.svg/2560px-Speech_bubble.svg.png&usqp=CAU'

function Speech() {
    const [name, setName] = useState("")
    return (
        <SpeechContainer>
            <ContentDiv>
                <input placeholder="Type a name..." onChange={e=>setName(e.target.value)}></input>
                <img src={speechBubbleLink}></img>
                <SpeechText>
                    I hate {name}
                </SpeechText>
            </ContentDiv>
        </SpeechContainer>
    )
}

export default Speech