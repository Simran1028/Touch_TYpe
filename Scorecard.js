import React from 'react'

import Result from "./Result";

export const Scorecard=({
  mistakes,
characters,
triggerTryAgain
})=>{
  return (
    
    <div className='scorecard-container' style={{ display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'200%',height:'650px'}}>
     <h1 style={{margin:'10px',fontSize:'35px',marginBottom:'10px'}}><u>TRY AGAIN</u></h1>
     <div className='result-container' style={{fontSize:'28px',margin:'7px'}}>
      {/* <p><b>Characters:</b>{characters}</p>
      <p><b>Mistakes:</b>{mistakes}</p>
      <p><b>Speed:</b>100</p> */}
     </div>
     <button onClick ={() => triggerTryAgain()}className='start-button' style={{ margintop:'20px',border:'none',borderRadius:'4px',padding:'12px 16px'}}>
        <u>Click Here</u>
     </button>
    </div>
  )
  }
 export default Scorecard;




