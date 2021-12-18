import React, { useState } from 'react'
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Comp({className,name,lists,changeFilteredArrHandler}) {

    const[showList,setShowList]=useState(true);


    return (
        <DIV> 

          

            <div className={`title margin-bottom-5 ${className}`} onClick={()=>setShowList(!showList)}>
                <p>{name}</p>
               {showList && <KeyboardArrowUpIcon className="icon"/>}
               {!showList && <KeyboardArrowDownIcon className="icon"/>}
                
            </div>

           {showList && (<div className="wrapper">

                <form action="">

                    {lists.map(list=>(

                        <div key={`${list}`}>
                            <input id={list} type="checkbox"  onChange={e=>changeFilteredArrHandler(list,name)}/>
                            <label htmlFor={list}>{list}</label>
                        </div>
                     ))}



                </form>

            </div>)}
        </DIV>
    )
}

const DIV=styled.div`
      .icon{ 
         width: 25px;
         height: 25px;
         cursor: pointer;
	   }


       .title{
           display: flex;
           cursor: pointer;
           justify-content: space-between;
           padding: 5px; 
           p{
                font-weight: bold; 
                font-size: 19rem;    
           }
       }

       .wrapper{
           width: 100%;
           form{
               width: 85%;
               margin: 0 auto; 
               div{
                   display: flex; 
                   align-items: center; 
                   font-size: 17px;  
                   cursor: pointer;

                   input{
                    margin-right: 10rem;    
                    font-size: inherit;
                    width: 16px;
                    background: yellow;
                    height: 30px;
                }
                label{
                    font-size: inherit;
                    cursor: pointer;

                }

                input[type="checkbox"] { 
                        background-color: red;
                }



               }
           }
       }
`;



export default Comp;
