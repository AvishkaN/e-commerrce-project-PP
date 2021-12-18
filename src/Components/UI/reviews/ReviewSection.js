import React from 'react'
import styled from 'styled-components';
import Review from './Review';

function Comp() {
    return (
        <DIV>
            <Review/>
            <Review/>
            <Review/>
            <Review/>
        </DIV>
    )
}

const DIV=styled.div`
      .icon{ 
         width: 25px;
         height: 25px;
         //margin-right: 10px;  
         cursor: pointer;
	   }
`;



export default Comp;
