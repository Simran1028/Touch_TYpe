import {Typingchallenge}  from '../Components/Typingchallenge';
import  {Scorecard}  from '../Components/Scorecard';


export const Container = ({
    handleOnType,
    time,
    timestart,
    triggerTryAgain,
    mistakes,
    characters,
    words
}) => {
    

    return (
        <div className="test-container" style={{margin:'25px',marginLeft:'10%',width:'215%',minHeight:'500px',display:'flex',flexWrap:'wrap',flexDirection:'column'}}>

            {
                time>0
                    ? <div className="typing-challenge-cont" style={{display:'flex',flexGrow:'1'}}>  
                      <Typingchallenge
                      timestart={timestart}
                      time={time}
                      handleOnType={handleOnType}
                      words={words}
                      characters={characters}
                      mistakes={mistakes}
                      />
                    </div>
                    : <div className="scorecard-cont" style={{flexGrow:'1',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                            <Scorecard
                            triggerTryAgain={triggerTryAgain}
                            mistakes={mistakes}
                            characters={characters}
                            />
                    </div>
            }            
        </div >
    )
}
export default Container;