import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Image from '../../assets/products/mobile.png';
import StarSection from '../../Components/UI/stars/StarSection';
import ReviewSection from '../../Components/UI/reviews/ReviewSection';

import ReviewBar from '../../Pages/SingleProduct/ReviewBar';
import Button from '../../Components/UI/buttons/button';
import QuantitySection from '../../Components/UI/QuantitySection';
import List from '../../Components/UI/List/list';
import Table from '../../Components/Table';


import Dot from '@mui/icons-material/FiberManualRecord';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { allComponentHide, selectClicks } from '../../Redux/Slices/clickSlice';
import { findProductById, selectProducts } from '../../Redux/Slices/ProductSlice';
import { useHistory, useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { login, selectUser } from '../../Redux/Slices/userSlice';
import { addItemCart, selectCart } from '../../Redux/Slices/cartSlice';

const Style = {
    width:"50px",
    height:"50px",

};


function Comp({className,removeMarginTop,byDirectLink=null}) {

    const[product,setProduct]=useState({});
    const dispatch=useDispatch();
    const products=useSelector(selectProducts);
    const user=useSelector(selectUser);
    const cart=useSelector(selectCart).cart;
    const [quantity,setQuantity]=useState(1);


    const {productId}=useParams();


    const handleCart=()=>{

        const currentUserEmail=user.email;
       dispatch( addItemCart({product,currentUserEmail,quantity,cart}))
        
    };


    useEffect(async()=>{
        
        if(products.clickedProduct){
            // console.log(products.clickedProduct);
            setProduct(products.clickedProduct);
        }
        if(!products.clickedProduct){
            const product=await findProductById('_',productId);
            // console.log(product);
            setProduct({data:product,id:productId});
        }

        //clear all click state
        if(productId){

            dispatch(allComponentHide())
        }

    },[]);

    return (
        <DIV   className={`${className} ${removeMarginTop}`}>
            <div className="signle-page-comp-wrapper">
                {console.log(product)}
                <div className="product-image-col">
                    <div className="image-section">
                        <div className="image">
                            <img src={product?.data?.ProductImage} alt="" /> 
                        </div>
                        <div className="slider">
                            slider
                        </div>
                    </div>
                </div>
                <div className="product-description-col">
                    <div className="title-section">
                        
                        <div className="col-1">
                                <div className="title">
                                    <p>{product?.data?.productName}</p>
                                </div>
                                <div className="secondary-title">


                                    <div className="reviews">
                                            <StarSection/>
                                    </div>
                                    <div className="rating-count">
                                        541 Ratings&nbsp;|
                                    </div>
                                    <div className="answered-questions-count">
                                        &nbsp;Answered Questions
                                    </div>
                                </div>
                        </div>
                                
                        <div className="col-2">

                            {!productId &&  (  
                            <Link to={`products/${product.id}`}>
                                        <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width={61} height={60} viewBox="0 0 61 60" fill="none"> <path fillRule="evenodd" clipRule="evenodd" d="M57.5003 24.4736C58.0627 24.4766 58.6121 24.3036 59.0714 23.9789C59.5307 23.6542 59.877 23.194 60.0618 22.6628C60.2466 22.1315 60.2607 21.5558 60.1021 21.0161C59.9435 20.4765 59.6202 19.9999 59.1773 19.6531L34.9861 0.667749C34.5143 0.297387 33.9325 0.0948854 33.3326 0.0922681C32.7328 0.0896509 32.1492 0.287067 31.6742 0.653297L7.31821 19.4268C6.87235 19.7697 6.54486 20.2435 6.38157 20.7817C6.21827 21.32 6.22736 21.8958 6.40754 22.4287C6.58771 22.9615 6.92997 23.4247 7.38642 23.7534C7.84287 24.0821 8.39067 24.2598 8.95314 24.2618L19.7144 24.3087C19.3491 38.8149 16.5649 45.7721 13.5559 49.2598C10.696 52.5756 7.34629 53.1705 3.83734 53.789L2.93311 53.9496C2.28607 54.0678 1.70454 54.4184 1.2979 54.9354C0.891273 55.4524 0.687574 56.1002 0.72514 56.7568C0.762705 57.4135 1.03894 58.0338 1.50188 58.5011C1.96482 58.9683 2.58254 59.2503 3.23884 59.2939C10.6484 59.7875 21.3911 59.1412 30.3978 53.9454C39.1396 48.9022 45.8844 39.7803 46.6527 24.4263L57.5003 24.4736Z" fill="black" /> </svg>
                                </Link>
                            )
                            }

                            <p className="tooltip">
                                open full screen
                            </p>
                        </div>        
                    </div>
                    
                    
                    
                    
                    <div className="price">
                        <p>$ {product?.data?.price}</p>
                    </div>
                    <div className="little-details">
                        <p>
                            <span className="span--1">model</span>
                            <span className="span--2">:</span>
                            <span className="span--3">{product?.data?.productName}</span>
                        </p>
                        <p>
                            <span className="span--1">color</span>
                            <span className="span--2">:</span>
                            <span className="span--3">{product?.data?.color}</span>
                        </p>
                        <p>
                            <span className="span--1">Storage</span>
                            <span className="span--2">:</span>
                            <span className="span--3">{product?.data?.storage}</span>
                        </p>
                    </div>
                    <div className="quantity-section">
                        <p>Quantity</p>
                        <QuantitySection className="" quantity={quantity} setQuantity={setQuantity}/>
                    </div>

                    <div className="add-to-cart-btn">
                        <Button className="btn" text={"Add To Cart"} onClick={handleCart}/>
                    </div>

                   <div className="list">
                        <p className="title">Product details of {product?.data?.productName} - {product?.data?.storage}</p>
                            <List/>
                        
                    </div>
                    <div className="description">
                        <p>
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eligendi eos id commodi ad quidem omnis excepturi quia, doloremque, tempore illo ut explicabo error laboriosam enim. Quia, optio nulla dolores inventore, temporibus omnis deleniti quo exercitationem alias accusamus repellendus excepturi ut impedit hic sapiente, veritatis quod vel voluptate dignissimos in quidem delectus nobis neque dolorem. Neque nihil aut sapiente minus illum officiis, quae eos temporibus consequatur! Deleniti laudantium tempora facere inventore illum tenetur vel, quibusdam aperiam iusto vero consequatur voluptate voluptas quas iste earum veniam excepturi doloribus fugit molestiae fuga dolorum? Dicta animi neque nam at! Nobis inventore error saepe!
                        </p>
                        <p>
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eligendi eos id commodi ad quidem omnis excepturi quia, doloremque, tempore illo ut explicabo error laboriosam enim. Quia, optio nulla dolores inventore, temporibus omnis deleniti quo exercitationem alias accusamus repellendus excepturi ut impedit hic sapiente, veritatis quod vel voluptate dignissimos in quidem delectus nobis neque dolorem. Neque nihil aut sapiente minus illum officiis, quae eos temporibus consequatur! Deleniti laudantium tempora facere inventore illum tenetur vel, quibusdam aperiam iusto vero consequatur voluptate voluptas quas iste earum veniam excepturi doloribus fugit molestiae fuga dolorum? Dicta animi neque nam at! Nobis inventore error saepe!
                        </p>
                    </div>
                    <div className="table">
                         <p className="title">Samsung Galaxy A12 128GB Specifications</p>
                            ----------------------
                                    <Table/>
                            ----------------------

                    </div>
                    <div className="avg-reviews-display ">
                            <div className="reviews-col--1">
                                <p className="number">
                                    <span className="Big-number">4.9</span>
                                    <span className="little-number">/5</span>
                                </p>
                                <div className="stars">
                                    <StarSection propStyle={Style} fillStars={4}/>
                                </div>
                                <div className="rating-count">
                                    <p>541 Ratings</p>
                                </div>
                            </div>
                            <div className="reviews-col--2">
                               <ReviewBar barProgress={60} count={50} fillStars={5}/>
                               <ReviewBar barProgress={50} count={40} fillStars={4}/>
                               <ReviewBar barProgress={40} count={32} fillStars={3}/>
                               <ReviewBar barProgress={30} count={20} fillStars={2}/>
                               <ReviewBar barProgress={20} count={15} fillStars={1}/>
                            </div>
                    </div>
                    <div className="add-review">
                            add review                        
                    </ div>
                    <div className="all-reviews">
                        all reviews
                        <ReviewSection/>
                    </div>
                </div>
            </div>
            
        </DIV>
    )
}

const DIV=styled.div`

    margin-top: 95px; 
    border-radius: 22px;
    /* background: coral; */
    background: #fff;

      .icon{ 
         width: 25px;
         height: 25px;
         //margin-right: 10px;  
         cursor: pointer;
	   }

       .signle-page-comp-wrapper{
           display: flex;
           width: 95%;
           margin: 0 auto;
           margin-top: 40px; 
           /* background: green; */

           .product-image-col{
               flex-basis: 25%;


               .image-section{
                   /* width: 100%; */

                   /**** */

                   position: fixed;
                   width: 18%; 

                   /**** */
                   .image{
                       img{
                            width: 100%; 
                       }
                   }
               }
            }
            .product-description-col{
                flex-basis: 75%;
                font-size: 18rem; 
                /* background: yellow; */

                .title{
                    P{
                        font-size: 28px;
                    }
                }


                .title-section{
                    display: flex;
                    /* flex-direction: column;  */
                    justify-content: space-between;

                    .col-1{

                    .secondary-title{
                        display: flex;
                        align-items: center; 
                        font-size: var(--font-size-18); 
                        color: #3DBDE1;
                        .reviews{
    
                        }
    
                        .rating-count{ 
                            font-size: inherit;
                            margin-left: 12px;
                        }
                        
                        .answered-questions-count{
                            font-size: inherit;
                        }
    
                    }
                    .price{
                        margin-top: var( --margin-20);
                        margin-bottom: var( --margin-20);
                        p{
                            font-size: 33px;
                            font-weight: bold;
                        }
                    }

                    }

                    .col-2{
                        display: flex;
                        flex-direction: column;
                        margin-right: 50px;
                        justify-content: center;
                        align-items: center; 
                        .arrow-icon{
                            width: 48px;
                            /* height: 25px; */
                            //margin-right: 10px;  
                            cursor: pointer;
                            path{
                                
                                &:hover{
                                    fill: var(--color-primary);  

                                }
                            }
                        }

                        .tooltip{
                            background: #84d84f;
                            color: #fff;
                            padding: 4px;
                            box-sizing: border-box;
                            border-radius: 10px;
                            font-size: 15px;
                            /* display: none; */
                            opacity: 0;
                            
                        }


                        &:hover{
                            
                            .tooltip{
                               display: flex;
                                opacity: 1; 
                            }
                        }
                    }
                }


                .little-details{
                    
                        p{
                            display: flex;
                            font-size: 22rem; 

                            &>*{

                                font-size: inherit; 
                            }
                            .span--1{
                                flex-basis: 18%;
                                /* background: lightblue; */
                            }
                            .span--2{
                                
                                flex-basis: 1%;
                                /* background: green; */
                            }
                            .span--3{
                                flex-basis: 40%;
                                /* background: yellow; */
                                /* text-align: right; */
                                margin-left: 35px;
                            }
                        }
                    
                }

                .quantity-section{
                    display: flex; 
                    align-items: center;
                    margin: var(--margin-12) 0;
                    margin: 15px 0;

                    p{
                        font-size: 22rem; 
                    }

                }

                .add-to-cart-btn{ 
                    width: 100%;
                    .btn{ 
                        width: 40%;
                        margin: var(--margin-12) 0;
                    }
                }

                .list{ 
                    margin:var(--margin-12) auto;
                    /* margin-bottom: 10px; */

                    .title{
                            font-size: var(--font-size-18); 
                            background: var(--color-grey);
                            padding: 8px 4px;
                            margin-bottom:var(--margin-12) ;

                    }


                }

                .description{
                    p{
                        font-size: 17rem;  
                    }
                }

                .table{
                    margin: var(--margin-12) 0;

                    .title{    
                        font-size: var(--font-size-18); 
                        background: var(--color-grey);
                        padding: 8px 4px;
                    }
                    
                    table{
                        /* margin: var(--margin-12) 0; */
                        margin: var( --margin-20) 0;

                    }
                }

                .avg-reviews-display{
                    display: flex;
                    .reviews{
                        &-col--1{
                            flex-basis: 50%;
                            /* background: yellow; */

                            .number{
                                .Big-number{
                                    font-size: 37rem;
                                }
                                .little-number{
                                    font-size: 30rem;

                                }
                            }
                        }

                        .stars{

                        }

                        .rating-count{
                            p{

                            }
                        }
                        &-col--2{
                            flex-basis: 50%;

                        }
                    }
                }

                .add-review{

                }

                .all-reviews{
                    .review{

                    }
                }
           }
       }
`;



export default Comp;
