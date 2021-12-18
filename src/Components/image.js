import React from 'react'
import styled from 'styled-components';



function Comp({className,image}) {
    return (
        <DIV className={`${className} `}>
            <img src={image} alt="" />
        </DIV>
    )
}

const DIV=styled.div`
     width: 100%;

    img{
        width: 100%; 
    }
`;



export default Comp;