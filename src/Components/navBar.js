import React from 'react'
import styled from 'styled-components';
import Logo from '../assets/navbar/logo.png';
import SearchContainer from './searchContainer';
// import Overlay from './UI/Overlay/Overlay';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ShowHideMenuFN } from '../Redux/Slices/clickSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



function Nav() {
    const dispatch=useDispatch();

    return (
        <DIV>
            <div className="wrapper">
                <div className="row-1">
                    <Link to="/">
                            <div className="logo-left">
                                <img src={Logo} alt="" />
                            </div>
                    </Link>
                    <div className="search-center">
                        <SearchContainer className="icons"/>  
                    </div>
                    <div className="right">
                        {/* Account */}
                        <svg  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="svg-inline--fa fa-user-circle fa-w-16 icon " data-icon="user-circle" data-prefix="far" viewBox="0 0 496 512" > <path fill="currentColor" d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z" ></path> </svg>
                        

                        <Link to="/cart">
                            <svg className="icon shopping-cart" xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" > <g fill="#000" strokeMiterlimit="10" strokeWidth="0" transform="matrix(.72 0 0 .72 128 128) matrix(3.89 0 0 3.89 -175.05 -175.05)" > <path d="M72.975 58.994h-41.12a3.5 3.5 0 01-3.347-2.477L15.199 13.006H3.5a3.5 3.5 0 110-7h14.289a3.5 3.5 0 013.347 2.476l13.309 43.512h36.204l10.585-25.191H45a3.5 3.5 0 110-7h41.5a3.5 3.5 0 013.227 4.856L76.201 56.85a3.5 3.5 0 01-3.226 2.144z"></path> <circle cx="28.88" cy="74.33" r="6.16"></circle> <circle cx="74.59" cy="74.33" r="6.16"></circle> </g> </svg>
                        </Link>
                            
                            
                            
                            <div className="moreicon"  onClick={()=>dispatch(ShowHideMenuFN())}>
                                <MoreVertIcon className="icon"/>
                            </div>
                    </div>
                </div>
                <div className="row-2">
                    <div className="row2-wrapper">
                        <a href="" className="a">Electronics</a>
                        <a href="" className="a">Mobile</a>
                        <a href="" className="a">Radio</a>
                        <a href="" className="a">Gadjet</a>
                        <a href="" className="a">Clothes</a>
                        <a href="" className="a">Computer</a>
                        <a href="" className="a">Speaakers</a>
                        <a href="" className="a">Monitor</a>
                        <a href="" className="a">HeadPhones</a>

                    </div>
                
                </div>
            </div>
        </DIV>
    )
}

const DIV=styled.nav` 
    position: fixed; 
    width: 100%; 
    z-index: 100;
    background: var(--color-light-grey); 

    
    .wrapper{  
        width: 95%;
        margin: 6rem auto;


        .row-1{
            display: flex;
            align-items: center;  
            justify-content: space-between;
            /* width: 100%;  */
            
            .logo-left{
                img{
                    width:40px; 
                }
            }
            .search-center{
                width: 54%;

                    .icons{ 
                        width: 30px;
                        height: 29px;
                        margin-right: 10px;  
                        cursor: pointer;
                    }

            }       
            .right{
                display: flex;
                align-items: center; 
                .icon{ 
                width: 25px;
                height: 25px;
                margin-right: 10px;  
                cursor: pointer;
                border-radius: 20px; 
                padding: 5px; 
                box-sizing:content-box; 
                display: flex;
                align-items: center;
                justify-content: space-between; 
                
                
                    &:hover{
                        background: var(--icon-hover-color);     
                    }
                }

            }
        }

        .row-2{
            width: 100%;
            margin-top: 9rem;
            margin-bottom: 9rem;
            background: var(--color-light-grey); 
            position: relative;     
            height: 100%;  
 
            .row2-wrapper{
                display: flex;
                justify-content: space-between; 
            }
        }
    }
`;



export default Nav;
