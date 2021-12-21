import React from 'react'
import styled from 'styled-components';



function Comp({className,description="lite ultra pro max",productName="Apple MacBook Pro"}) {
    return (
        <DIV className={`${className} `}>
          <p className="title-1">{productName}</p>
          <p className="title-2">{description}</p>
        </DIV>
    )
}

const DIV=styled.div`
     width: 100%;
     height: 100%; 
     display: flex;
     justify-content: center;
     align-items: center; 
     flex-direction: column; 
    .title-1{
        font-size:26rem;
        font-weight: bold; 
    }
    .title-2{
        font-size:15rem;

    }
 
`;



export default Comp;