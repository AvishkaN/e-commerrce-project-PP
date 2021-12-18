import React, { useState } from 'react'
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Range from '../Components/UI/Input/range';
import FilterCard from '../Components/FilterItemCard';

function Comp({className,setShowFilterState}) {

    const[filterArr,setFilterArr]=useState([]);


    const changeFilteredArrHandler=(list,name)=>{

        let newArr=filterArr.filter(listItem=>listItem===list);
        
        if(!newArr.length){  // add new value to array 
            newArr=[...filterArr,list];
        }else{              // alredy exists
            newArr=filterArr.filter(listItem=>listItem!==list);
            
        }
        
        setFilterArr(newArr);
        
        

    };


    return (
        <DIV className={className}>

            <div className="title">
                <ArrowBackIosIcon className="svg-icons" onClick={()=>setShowFilterState(false)}/>
                <p>filter</p>
            </div>

            <div className="filter-slide-wrapper">
                    <div className="filter-item">
                            <Range className="range"/>
                    </div>
                    
                    <div className="filter-item margin-top-25 ">
                        <FilterCard name="Color" lists={["red","green","yellow","ceyon","purple"]} changeFilteredArrHandler={changeFilteredArrHandler}/> 
                        <FilterCard className="margin-top-5" name="Storage" lists={["16GB","32GB","128GB","256GB","512GB"]}  changeFilteredArrHandler={changeFilteredArrHandler}/> 
                        <FilterCard className="margin-top-5" name="Ram" lists={["4GB","6GB","8GB","16GB"]} changeFilteredArrHandler={changeFilteredArrHandler}/> 
                    </div>


            </div>

        </DIV>
    )
}

const DIV=styled.div`
              flex-basis: 20%;
              background: yellow;  
            background: var(--color-light-grey); 
            display: flex;
            flex-direction: column; 

            .title{
                display: flex;
                align-items: center; 
                padding-left: 16px;
                padding-top: 9px;

                p{
                    font-size: 22px;  

                }
                .svg-icons{ 
    
                    width: 30px;
                    height: 29px;
                    margin-right: 10px;  
                    cursor: pointer;


                    /* width: 25px;
                    height: 25px; */
                    /* margin-right: 10px;   */
                    /* cursor: pointer; */
                    border-radius: 20px; 
                    padding: 5px; 
                    box-sizing:content-box; 
                    display: flex;
                    align-items: center;
                    justify-content: center;   
                    
        
                    &:hover{
                        background: var(--icon-hover-color);     
                    } 
                }
            }


            .filter-slide-wrapper{
                width: 90%;
                margin: 20px auto;  
                background: var(--color-white);

                .filter-item{
                    width: 100%;
                }
            }

`;



export default Comp;
