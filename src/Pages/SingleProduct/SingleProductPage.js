import React from 'react'
import styled from 'styled-components';
import SingleProductPage from './SinglePageProductComp';

function Comp({className,removeMarginTop}) {
    return (
        <DIV className={`${className}`}>

            <SingleProductPage removeMarginTop={removeMarginTop}/>
            
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
   

       .x{
       }
`;



export default Comp;
