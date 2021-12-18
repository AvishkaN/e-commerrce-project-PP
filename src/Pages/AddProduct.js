import React from 'react'
import styled from 'styled-components';
import AddCardComp from './../Components/AddProductComp';

function Comp() {
    return (
        <DIV>
            <AddCardComp/>

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
