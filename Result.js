import React from 'react';

export const Result = ({ cardName, cardValue }) => {
    return (
        <div style={{display: 'flex',
            flexDirection: 'column',
            justifyContent:'center',
            alignItems: 'center',
            flexGrow: '1',
            padding: '10px'}}>
            <p style={{margin:'0',fontSize:'15px',marginBottom:'-15px'}}>{cardName}</p>
            <p style={{margin:'0',fontSize:'50px',fontWeight:'800'}}>{cardValue}</p>
        </div>
    )
}

 export default Result;
