import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import CardContainer from './../Components/CardContainer'
import FilterSlide from './../Components/FilterSlide'
import Overlay from './../Components/UI/Overlay/Overlay'

import FilterListIcon from '@mui/icons-material/FilterList';
import { useDispatch, useSelector } from 'react-redux';
import clickSlice, { selectClicks } from '../Redux/Slices/clickSlice';
import { useHistory } from 'react-router';
import { selectUser } from '../Redux/Slices/userSlice';

function HomePage() {

    const[showFilterSlide,setShowFilterState]=useState(false);
    const[showOverLay,setShowOverLay]=useState(true);
    const user=useSelector(selectUser); 

    const dispatch=useDispatch();
    const clicks=useSelector(selectClicks);
    let history = useHistory();

    useEffect(()=>{

        console.log(user);
        if(!user){
            history.push('/login');
        }

    },[]);

    return (
        <DIV>
            <div className="home-wrapper">
        {console.log(clicks)}
                {!showFilterSlide && <div className="filter" onClick={()=>setShowFilterState(true)}><FilterListIcon className="icon"/></div>}
                {showFilterSlide && <FilterSlide className="filter-slide" setShowFilterState={setShowFilterState}/>}
                

                <div className="products">
                    <CardContainer/>
                </div>

            {clicks.showOverlay && <Overlay/>}
            </div>


        </DIV>
    )
}

const DIV=styled.main`
    /* background: yellow; */
    width: 100%; 
     
    .home-wrapper{ 
      
        display: flex;
        width: 100%;
        margin: 0 auto; 
        position: relative;
        
        .filter{
            flex-basis: 4%;
            background: var( --color-grey); 
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;   
            cursor: pointer;


            /* position: fixed;
            height: 100%; */

            
            .icon{
                width: 40px; 
                height: 40px;  
                margin-right: 10px;  
                cursor: pointer;
            }
        }
        
        .filter-slide{ 
            margin-top: var(--margin-fixed-position);
        }

        .products{
            flex-basis: 96%;
            /* min-height: 90vh; */
            /* background: grey;   */
            /* min-height: 100%; */
            position: relative; 
            max-height:100vh;     
            overflow:auto;

            margin-top: 76px;
            z-index: 20;

            &::-webkit-scrollbar {  // hide scrollbar
                width: 0 !important 
            }
        }

    }
`;



export default HomePage;
