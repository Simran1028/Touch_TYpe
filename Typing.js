import React from 'react';
import {Result} from '../Components/Result';
import { Typingchallenge } from '../Components/Typingchallenge';
export const Typing = ({
handleOnType,
time,
mistakes,
characters,
words
})=>{
  return (
    
    <div className="typing-challenge-container " style={{ display: 'flex',flexDirection:'column', flexGrow: '1' }}>
      
      <div className='details-container' style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
     <>
        <Result
          cardName="Words"
          cardValue={words}
        />
        <Result
          cardName="Characters"
          cardValue={characters}
        />
        <Result
          cardName="Mistakes"
          cardValue={mistakes}
        />
        </>
      </div>
      <div className='type-challenge-cont' style={{display:'flex',flexGrow:'1'}}>
        <Typingchallenge
         timestart={timestart}
         time={time}
         handleOnType={handleOnType}
        />
      </div>
    </div>
  )
}

export default Typing;

