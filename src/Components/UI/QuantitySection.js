import React, { useState } from 'react'
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Comp({className,quantity,setQuantity,minNum=1}) {
    return (
        <DIV className={`${className} `}>
    
            <div className="quantity-box">
                <button className="add-btn" onClick={()=>setQuantity(quantity+1)}><AddIcon className="icon"/></button>
                <div className="number"><p>{quantity}</p></div>
                <button className="remove-btn" onClick={()=>quantity>minNum && setQuantity(quantity-1)}><RemoveIcon className="icon"/></button>
            </div>

        </DIV>
    )
}

const DIV=styled.div`
width: 100%;
      .icon{ 
         width: 25px;
         height: 25px;
         //margin-right: 10px;  
         cursor: pointer;
	   }

       .quantity-box{
            display: flex;
            text-align: center; 
            justify-content: center; 

            button{
                display: flex;
                align-items: center;
                justify-content: center; 
                width: 35px;
                height: 35px;
                background: transparent; 
                background: var(--color-grey);
                border: none; 
                border-radius:20px; 

                &:hover{
                    background: #80808040;
                }
            }

            .number{
                /* border: 1px solid #000; */
                display: flex;
                align-items: center;
                justify-content: center; 
                width: 35px;
                height: 35px;
            }
        }

`;



export default Comp;
