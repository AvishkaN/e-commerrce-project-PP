import React from 'react'
import styled from 'styled-components';

function Comp({price,className=""}) {

    return (
        <DIV>
            <p className={`${className}`}>$ {price}</p>
        </DIV>
    )
}

const DIV=styled.div`

        width: 100%;
        height: 100%; 
        display: flex;
        justify-content: center;
        align-items: center; 

      .icon{ 
         width: 25px;
         height: 25px;
         //margin-right: 10px;  
         cursor: pointer;
	   }

       p{
           font-weight: bold; 
           font-size: 22rem;
       }
`;



export default Comp;