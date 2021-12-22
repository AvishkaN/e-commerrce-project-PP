import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Card from './Card';
import findById from './../functions/findById';
import Image from './../assets/products/mac.png';
import Image2 from './../assets/products/laptop.png';
import Image3 from './../assets/products/laptop2.png';
import Image35 from './../assets/products/laptop4.png';
import Image4 from './../assets/products/mobile.png';
import Image5 from './../assets/products/mobile2.png';
import Image6 from './../assets/products/mobile3.png';


import { clickedProductFN, curUserIsFavouritedFN, filterProducts, LoadProducts, selectProducts } from '../Redux/Slices/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ShowSinglePageComponent } from '../Redux/Slices/clickSlice';
import { selectUser } from '../Redux/Slices/userSlice';

function Comp() {
    const dispatch=useDispatch();
    const products=useSelector(selectProducts);
    const user=useSelector(selectUser);


    useEffect(()=>{
        LoadProducts(dispatch,user.email);
        dispatch(curUserIsFavouritedFN({products:products.Products,userEmail:user.email}));
        filterProducts();
    },[]);




    
    const handleClick=(e)=>{


        const selectCart=e.target?.closest('.cart-product-image')?.classList[1];  // select image

        if(selectCart=="cart-product-image"){  // if cart image clicked --> open single product component

            const id=e.target.closest('.card-wrapper')?.classList[1];
            const selectProduct=findById(id,products.Products);
    
    
    
            dispatch(clickedProductFN(selectProduct));
            dispatch(ShowSinglePageComponent());
        }


    };

    return (
        <DIV onClick={handleClick}> 
            <div className="card-container-wrapper">
                    {
                        products.Products.map(product=>(
                            <Card key={product.id} data={product.data} id={product.id}  favUsers={product.data.favUsers} userEmail={user.email}/>

                        ))
                    }

                {/* <Card Image={Image} name={"Apple MacBook Pro"} price={"39.50"} smallDescription={"256Gb Grey Late 2020"} />
                <Card Image={Image2} name={"Apple MacBook Pro"} price={"39.50"} smallDescription={"256Gb Grey Late 2020"} />
                <Card Image={Image3} name={"Apple MacBook Pro"} price={"39.50"} smallDescription={"256Gb Grey Late 2020"} />
                <Card Image={Image4} name={"Apple iphone"} price={"39.50"} smallDescription={"256Gb Grey Late 4GB asdfsadfdfsddsfsdf 2020"} />
            
                <Card Image={Image5} name={"Apple MacBook Pro"} price={"39.50"} smallDescription={"256Gb Grey Late 2020"} />
                <Card Image={Image6} name={"Apple MacBook Pro"} price={"39.50"} smallDescription={"256Gb Grey Late 2020"} />
                <Card Image={Image35} name={"Apple MacBook Pro"} price={"39.50"} smallDescription={"256Gb Grey Late 2020"} />
                <Card Image={Image} name={"Apple MacBook Pro"} price={"39.50"} smallDescription={"256Gb Grey Late 2020"} />
                
                <Card Image={Image2} name={"Apple MacBook Pro"} price={"39.50"} smallDescription={"256Gb Grey Late 2020"} />
                <Card Image={Image3} name={"Apple MacBook Pro"} price={"39.50"} smallDescription={"256Gb Grey Late 2020"} />
                <Card Image={Image4} name={"Apple MacBook Pro"} price={"39.50"} smallDescription={"256Gb Grey Late 2020"} />
                <Card Image={Image5} name={"Apple MacBook Pro"} price={"39.50"} smallDescription={"256Gb Grey Late 2020"} />
                
                <Card Image={Image6} name={"Apple MacBook Pro"} price={"39.50"} smallDescription={"256Gb Grey Late 2020"} />
                <Card Image={Image35} name={"Apple MacBook Pro"} price={"39.50"} smallDescription={"256Gb Grey Late 2020"} />
                <Card Image={Image} name={"Apple MacBook Pro"} price={"39.50"} smallDescription={"256Gb Grey Late 2020"} />
                <Card Image={Image2} name={"Apple MacBook Pro"} price={"39.50"} smallDescription={"256Gb Grey Late 2020"} />
                
                <Card Image={Image3} name={"Apple MacBook Pro"} price={"39.50"} smallDescription={"256Gb Grey Late 2020"} />
                <Card Image={Image4} name={"Apple MacBook Pro"} price={"39.50"} smallDescription={"256Gb Grey Late 2020"} />
                <Card Image={Image5} name={"Apple MacBook Pro"} price={"39.50"} smallDescription={"256Gb Grey Late 2020"} />
                <Card Image={Image6} name={"Apple MacBook Pro"} price={"39.50"} smallDescription={"256Gb Grey Late 2020"} />
                
                <Card Image={Image35} name={"Apple MacBook Pro"} price={"39.50"} smallDescription={"256Gb Grey Late 2020"} /> */}
            </div>
           {products.loading && (<div className="overlay">
                <div className="content">
                <div class="loader"></div>
                </div>
            </div>)}
        </DIV>
    )
}

const DIV=styled.div`
    width: 100%;
    .card-container-wrapper{
        display: flex;
        flex-wrap: wrap; 
        width: 97%;       
        margin: 40px auto;
        transition: flex-wrap .2s;  
        /* justify-content: center;  */

        justify-content: flex-start; 
    }

    .overlay{ 
        width: 100%;
        height: 100vh;
        background: #e8e8e8;
        display: flex;
        /* align-items: center; */
        /* justify-content: center; */
        /* filter: blur(4px); */
        backdrop-filter: blur(10px);
        /* background: yellow;  */
        
        .content{
            /* /*
            */
            /* width: 100%; */
        /* background: green; */
            /* height: 100%;        */
            /* display: flex;
            justify-content: center;
            align-items: center;     */
            margin: 85px auto;    
            .loader{


                    border: 10px solid transparent;
                    border-radius: 50%;
                    border-top: 10px solid var(--color-primary);
                    border-right: 10px solid var(--color-primary);
                    width: 115px;
                    height: 115px;
                    -webkit-animation: spin 2s linear infinite;
                    -webkit-animation: spin 1s linear infinite;
                    animation: spin 1s linear infinite;
                    overflow-y: hidden;

                        /* Safari */
                        @-webkit-keyframes spin {
                        0% { -webkit-transform: rotate(0deg); }
                        100% { -webkit-transform: rotate(360deg); }
                        }

                        @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                        }
            }
        }
    }
  
`;



export default Comp;
