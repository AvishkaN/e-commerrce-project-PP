import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import macImg from '../../assets/products/mac.png';

import ImageComp from '../../Components/image';
import ProductNameComp from '../../Components/ProductName';
import QuantitySectionComp from '../../Components/UI/QuantitySection';
import PriceComp from '../../Components/Price';
import { changeCartQuantity, selectCart } from '../../Redux/Slices/cartSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function Comp({id,image,price,description,quantityProp,productName}) {

    const [quantity,setQuantity]=useState(quantityProp);  
    const curCart=useSelector(selectCart).cart;
    const dispatch=useDispatch();




    useEffect(()=>{

        // dispatch --> - id ,quantity

        dispatch(changeCartQuantity({id,quantity,curCart}));
        // console.log(id);
        // console.log(quantity);
        // console.log(curCart);
        // dispatch(changeCartQuantity(id));

    },[quantity]);


    


    return (
        <DIV>
            {console.log(productName)}
            <div className="wrapper">
                <div className="wrapper-2">
                        <div className="image">
                            <ImageComp image={image}/>
                        </div>
                        <div className="name">
                            <ProductNameComp productName={productName} description={description}/>
                        </div>
                        <div className="quantity-section">
                            <QuantitySectionComp quantity={quantity} setQuantity={setQuantity} minNum={0}/>
                        </div>
                        <div className="price">
                            {console.log(`🎉`,(price*quantity).toFixed(2)    )}
                            <PriceComp price={(price*quantity).toFixed(2)}/>
                        </div>
                 </div>
         
            </div>

            <div className="hr">
                <div className="hr-rule"></div>
            </div>
        </DIV>
    )
}

const DIV=styled.div`
    margin-bottom: 25rem;
      .icon{ 
         width: 25px;
         height: 25px;
         //margin-right: 10px;  
         cursor: pointer;
	   }

      .wrapper{
          
          .wrapper-2{
              display: flex;

              .image{
                   flex-basis: 8%;
                   /* background:green; */
               }
               
               .name{
                   flex-basis: 40%;
                   
                   /* background:yellow; */
               }
               
               .quantity-section{
                   flex-basis: 25%;
                   display: flex;
                   margin: auto; 
                
                  
               }
               
               .price{
                   flex-basis: 20%;
                   /* background:orange; */
       
              }
          }
          
        }
        &:last-child{
            .hr{
                display: flex;
                justify-content: flex-end; 
                
                .hr-rule{
                    flex-basis: 40%;
                    border-top: 1px solid #000;

                }
              }
          } 


`;



export default Comp;