import React from 'react'
import styled from 'styled-components';

function Comp({className}) {
    return (
        <DIV className={`${className} `}>
            <ul>
                <li><p>32GB, 3GB RAM </p>  </li>
                <li><p>720 x 1600 pixels, 6.5 inches</p> </li>
                <li><p> Android 10</p></li>
                <li><p>13MP + 2MP + 5MP Selfie</p> </li> 
            </ul>

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


       ul{
                        display: flex;
                        flex-wrap: wrap;
                        li{
                            display: flex;
                            align-items: center;
                            flex-basis: 50%; 
                            p{
                                font-size: var(--font-size-18); 
                            }



                            /* .dot{ 
                                width: 14px;
                                height: 14px;
                                cursor: pointer;
                            } */

                            &:before{
                                content: "";
                                width: 8px;
                                height: 8px;
                                border-radius: 50%;
                                margin-right: 5px;
                                display: inline-block;
                                background-color: #29cf00;
                                vertical-align: middle;
                            }
                        
                        }
                    }

`;



export default Comp;
