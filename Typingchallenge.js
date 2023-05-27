// import React from 'react'

export const  Typingchallenge=({
handleOnType,
time,
timestart
})=>{
  return (
    <div className="typing-challenge" style={{display:'flex',flexDirection:'column',alignItems:'center',flexGrow:'1',justifyContent:'center'}}>
        <div className="timer" style={{margin:'-7px'}}>
            <p style={{padding:'8px',fontSize:'40px',fontWeight:'600'}}>00:{time< 10 ? `0${time}`:time}</p>
            {/* <p style={{position:'relative'}}>{!timestart && 'Start the test!!'}</p> */}
        </div>
        <div className='textarea' style={{margin:'16px',display:'flex',flexDirection:'row',flexGrow:'1',width:'80%',position:'sticky'}}>
            <div className='left' style={{display:'flex',width:'50%',flexGrow:'1'}}>
              <textarea className ='paragraph'style={{textAlign:'left',flexGrow:'1',height:'400px',width:'100%',padding:'10px',lineHeight:'18px',flexWrap:'wrap',boxShadow:'0 1px 3px rgba(0,0,0,0.12)'}} 
              disabled={true}
              value="Cake or pie? I can tell a lot about you by which one you pick. It may seem silly, but cake people and pie people are really different. I know which one I hope you are, but that's not for me to decide. So, what is it? Cake or pie?"

              />
            </div>
            <div className='right'style={{display:'flex',width:'50%',flexGrow:'1'}}>
            <textarea style={{textAlign:'left',flexGrow:'1',height:'400px',width:'100%',padding:'10px',lineHeight:'18px',flexWrap:'wrap',boxShadow:'0 1px 3px rgba(0,0,0,0.12)'}}
            onChange={(e)=>handleOnType(e.target.value)}
            className="text-area"
            placeholder="Start typing here!!!"

              />
               </div>
        </div>

    </div>
  )
}
export default Typingchallenge;