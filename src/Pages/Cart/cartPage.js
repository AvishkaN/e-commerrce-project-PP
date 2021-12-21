import React, { useEffect } from 'react'
import styled from 'styled-components';
import Cart from './CartItem';
import PriceComp from './../../Components/Price';

// import macImg from '../../assets/products/mac.png';
import macImg from '../../assets/products/mac.png';
import mobileImg from '../../assets/products/mobile2.png';
import { useSelector } from 'react-redux';
import { calcTotal, selectCart } from '../../Redux/Slices/cartSlice';
import calcTotalCart from '../../functions/calcTotalCart';
import { useDispatch } from 'react-redux';


function Comp() {

    const cart=useSelector(selectCart);
    const dispatch=useDispatch(cart.cart);

    useEffect(()=>{

        // calculate total

        dispatch(calcTotal({curCart:cart.cart}))
    },[cart.cart]);

    return (
        <DIV>
                        {console.log("🔥🔥",cart)}
                <div className="cart-wrapper">
                    <div className="title"><p> Shopping cart</p></div>
                    <div className="shopping-cart-list">



                        {cart.cart.length && cart.cart.map(cartitem=>{
                            return (
                            <Cart key={cartitem.id} id={cartitem.id} image={cartitem.data.ProductImage} price={cartitem.data.price} productName={cartitem.data.productName}  quantityProp={cartitem.data.quantity} description={cartitem.data.description}/>
                            )})
                        }


                            {/* cart empty */}
                        {!cart.cart.length &&   (<p>dont have cart </p>)}
                        


                    </div>

                    <div className="price-section">
                        <PriceComp price={cart.total} className={"price-section-p"}/>
                    </div> 
                </div>
        </DIV>
    )
}

const DIV=styled.div`

.cart-wrapper{

    display: flex;
    flex-direction: column; 
    width: 90%; 
    margin: 140px auto; 


    .title{ 
        margin-bottom:var(--margin--35);
        p{
            font-size: 33rem;
        }
    }
    .shopping-cart-list{
    }

    .price-section{
        /* display: flex;
        justify-content: right;  
        align-items: center;  */

        .price-section-p{
            font-size: 30rem;
            /* background: green; */
            width: 20%;
            margin-left: auto; 
            text-align: center;
            /* text-align: right; */
        }
    }
    
}
      .icon{ 
         width: 25px;
         height: 25px;
         //margin-right: 10px;  
         cursor: pointer;
	   }
`;



export default Comp;