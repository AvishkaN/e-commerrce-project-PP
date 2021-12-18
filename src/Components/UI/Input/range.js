import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Slider from '@mui/material/Slider';

function Comp({className}) {

    const[value1,setValue1]=useState(1);
    const[value2,setValue2]=useState(0);

    useEffect(() => {

    }, [value1,value2])

    return (
        <DIV>

            <form action=""c className={className}>

                    <p className="filter-title">
                        Price
                    </p>

                    <div className="slider">
                        <input type="range" name="" id=""   min="200" max="1000" value={value1} onChange={(e)=> setValue1(e.target.value)} />
                        <input type="range" name="" id=""   min="1000" max="2000" value={value2} onChange={(e)=> setValue2(e.target.value)} />
                    </div>

                    <div className="box">
                        <input type="number" className="input"  placeholder="Min"  value={value1} onChange={(e)=>setValue1(e.target.value)}/>
                        <input type="number"  className="input"  placeholder="Max" value={value2}  onChange={(e)=>setValue2(e.target.value)}/>
                    </div>
        
            </form>

        </DIV>
    )
}

const DIV=styled.div`
        width: 100%; 
        form{

            .slider{
                display: flex;
                input{
                    background: transparent;  
                }
    
                 input[type=range] {
                    height: 41px;
                    -webkit-appearance: none;
                    margin: 10px 0;
                    width: 100%;
                    }
                    input[type=range]:focus {
                    outline: none;
                    }
                    input[type=range]::-webkit-slider-runnable-track {
                    width: 100%;
                    height: 10px;
                    cursor: pointer;
                    animate: 0.2s;
                    box-shadow: 0px 0px 0px #000000;
                    background: #84D84F; 
                    border-radius:0px;
                    border: 0px solid #000000;
                    }
                    input[type=range]::-webkit-slider-thumb {
                    box-shadow: 0px 0px 0px #000000;
                    border: 4px solid #84D84F;
                    height: 31px;
                    width: 31px;
                    border-radius: 17px;
                    background: #FFFFFF;
                    cursor: pointer;
                    -webkit-appearance: none;
                    margin-top: -12.5px;
                    }
                    input[type=range]:focus::-webkit-slider-runnable-track {
                    background: #84D84F;
                    }
                    input[type=range]::-moz-range-track {
                    width: 100%;
                    height: 10px;
                    cursor: pointer;
                    animate: 0.2s;
                    box-shadow: 0px 0px 0px #000000;
                    background: #84D84F;
                    border-radius: 5px;
                    border: 0px solid #000000;
                    }
                    input[type=range]::-moz-range-thumb {
                    box-shadow: 0px 0px 0px #000000;
                    border: 4px solid #84D84F;
                    height: 31px;
                    width: 31px;
                    border-radius: 17px;
                    background: #FFFFFF;
                    cursor: pointer;
                    }
                    input[type=range]::-ms-track {
                    width: 100%;
                    height: 10px;
                    cursor: pointer;
                    animate: 0.2s;
                    background: transparent;
                    border-color: transparent;
                    color: transparent;
                    }
                    input[type=range]::-ms-fill-lower {
                    background: #84D84F;
                    border: 0px solid #000000;
                    border-radius: 10px;
                    box-shadow: 0px 0px 0px #000000;
                    }
                    input[type=range]::-ms-fill-upper {
                    background: #84D84F;
                    border: 0px solid #000000;
                    border-radius: 10px;
                    box-shadow: 0px 0px 0px #000000;
                    }
                    input[type=range]::-ms-thumb {
                    margin-top: 1px;
                    box-shadow: 0px 0px 0px #000000;
                    border: 4px solid #84D84F;
                    height: 31px;
                    width: 31px;
                    border-radius: 17px;
                    background: #FFFFFF;
                    cursor: pointer;
                    }
                    input[type=range]:focus::-ms-fill-lower {
                    background: #84D84F;
                    }
                    input[type=range]:focus::-ms-fill-upper {
                    background: #84D84F;
                    }
            }

            .box{
                display: flex;

                input{
                    flex-basis: 45%; 
                    background: #dedede;  
                    margin: auto;  
                    border-radius: 5px; 
                    padding: 10px 17px;    
                    padding-bottom: 5px;    

                    /* &:last-child{
                        margin-left: auto;
                    } */
                }  
            }

         }
                        


`;



export default Comp;

