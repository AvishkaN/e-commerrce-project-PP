import React from 'react'
import StarSection from '../stars/StarSection'
import styled from 'styled-components';

import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

function Comp() {
    return (
        <DIV>
           <StarSection  fillStars={4}/>
            <div className="row-2">
                <div className="name">by Prasantha R</div>
                <div className="verified"> 
                    <VerifiedUserIcon className="icon"/>
                    <p>Verified Purchase</p>
                </div>
            </div>
            <div className="row-3">
                <p>
                    good product
                </p>
            </div>
        </DIV>
    )
}

const DIV=styled.div`

    margin: 20px 0;
    /* border-top: 1px solid #000; */
    border-bottom: var(--border-style-default);
    padding-bottom: 20px; 

      .icon{ 
         width: 25px;
         height: 25px;
         //margin-right: 10px;  
         cursor: pointer;
         color:#4caf50;
	   }

       .row-2{
           display: flex;
           align-items: center;  
           .name{

           }

           .verified{
               display: flex;
               align-items: center; 
               margin-left: 10px;

               p{
                color:#4caf50;
                margin-left: 2px;
               }
           }
       }

       .row-3{

                p{
                    
                    font-size: 19rem;  
                }

       }
`;



export default Comp;
