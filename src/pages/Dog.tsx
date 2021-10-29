import React, { useState } from 'react'
import styled from 'styled-components';
import { addCurrency, events } from '..';

const imageLink = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24aqUK_Ylc8Ios0fa7LC__XCjjMlaYTu0TSYuyWaVymz3CAqxr9FS0niZchlrOXx9CFI:https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg&usqp=CAU'

const DogContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const SpinImage = styled.img`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
      width: 50%;
    }
    50% {
      width: 0%;
    }
    100% {
      transform: rotate(360deg);
      width: 50%;
    }
  }

  :hover {
    filter: brightness(85%);
  }
  :active {
    filter: brightness(50%);
  }
  animation-name: spin;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  --webkit-user-select: none;
  --webkit-user-drag: none;
`

export interface DogInfo {
  link: string,
  description: string
}

let dogCycle = false
let maxDogCount = 1;
const images: DogInfo[] = [
  {
    link:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24aqUK_Ylc8Ios0fa7LC__XCjjMlaYTu0TSYuyWaVymz3CAqxr9FS0niZchlrOXx9CFI:https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg&usqp=CAU',
    description:'Jeremy'
  },
  {
    link: 'https://www.dogtime.com/assets/uploads/2011/01/file_23012_beagle.jpg',
    description: 'Reginald, manipulative venture capitalist'
  },
  {
    link: 'https://www.dogtime.com/assets/uploads/2011/01/file_23020_dachshund-dog-breed.jpg',
    description: 'Doc, he who breathes devestation'
  },
  {
    link: 'https://www.dogtime.com/assets/uploads/2011/01/file_23160_shiba-inu.jpg',
    description: 'Geralt, the epicenter of plague'
  },
  {
    link: 'https://www.dogtime.com/assets/uploads/2011/01/file_22980_golden-retriever.jpg',
    description: 'Zetalpa, harbinger of the fifth extinction'
  },
  {
    link: 'https://www.dogtime.com/assets/uploads/2011/01/file_22988_labrador-retriever-460x290.jpg',
    description: 'Betalguese, archbishop of sloth'
  }/*,
  {
    link: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/160915599/original/eb24bd351580b901f4af06b63090d480926f1abd/draw-a-pixel-art-logo-profile-picture-or-icon.png',
    description: 'Jachro, collector of exposure'
  }*/
]
export const increaseMaxDogCount = () => {if(maxDogCount < images.length - 1) maxDogCount += 1}
export const getMaxDogCount = () => maxDogCount;

function Dog() {
    const [count, setCount] = useState(0)
    const [imageNumber, setImageNumber] = useState(0)

    const loopFunc = (num: number) => {
      if(num >= images.length || num >= maxDogCount) num = 0;
      setImageNumber(num)
      if(dogCycle) setTimeout(loopFunc, 500, num+1)
    }

    return (
        <DogContainer>

            <div style={{width:'100%', display:'flex', flexDirection:'row'}}>
              <button onClick={()=>{
                setCount(count+1)
                if(count == 9)
                  setCount(0)
              }}>Change speed</button>
              <h2> Speed: {count}</h2>
            </div>
            
            <div style={{width:'100%', display:'flex', flexDirection:'row'}}>
              <button onClick={()=>{
                setImageNumber((imageNumber+1)%(maxDogCount))
              }}>Change image</button>
              <h2> {images[imageNumber].description}</h2>
            </div>

            <div style={{width:'100%', display:'flex', flexDirection:'row'}}>
              <button onClick={()=>{

                if(!dogCycle) {
                  dogCycle = true;
                  loopFunc(imageNumber+1 % maxDogCount)
                } else {
                  dogCycle = false;
                }
              }}>Cycle dawgs</button>
            </div>

            <hr/>
            <div style={{width:'100%', display:'flex', justifyContent:'right'}}>
              <SpinImage src={images[imageNumber].link} style={{width:'200px', animationDuration: `${10-count}s`, marginRight:'20%'}} title={`(his name is ${images[imageNumber].description})`} onClick={()=>{addCurrency(10)}}/>
            </div>
        </DogContainer>
    )
}

export default Dog;