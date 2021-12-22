
import ImageComp from '../../Components/image';
import ProductNameComp from '../../Components/ProductName';
import PriceComp from '../../Components/Price';
import styled from 'styled-components';
import Image from './../../assets/products/laptop.png';

import Button from '../../Components/UI/buttons/button';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { addItemCart, selectCart } from '../../Redux/Slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../Redux/Slices/userSlice';
import { AddRemoveFav } from '../../Redux/Slices/ProductSlice';




function Comp({product,image=Image,price=20.20,description,productName,className}) {

    const dispatch=useDispatch();
    const user=useSelector(selectUser);
    const cart=useSelector(selectCart).cart;



    const handleAddCart=()=>{

        const currentUserEmail=user.email;
        const quantity=1;

        dispatch( addItemCart({product,currentUserEmail,quantity,cart}))  // working with product 

    };


    const deleteFavHandler=()=>{
        AddRemoveFav(dispatch,product.id,user.email); 
    };

    return (
        <DIV className={className}>
            {console.log(+price)}
            <div className="wishlist-item-wrapper">

                    <div className="image">
                            <ImageComp image={image}/>
                    </div>
                    <div className="name">
                        <ProductNameComp productName={productName} description={description}/>
                    </div>
                    <div className="price">
                        <PriceComp price={(price).toFixed(2)} className={"price-text"}/>
                    </div>

                    <div className="add-to-cart-btn">
                        <Button className="btn" text={"Add To Cart"} onClick={handleAddCart}/>
                        <p>Added on Nov 5,2021 </p>
                    </div>

                    <div className="delete-btn" onClick={deleteFavHandler}>
                            <DeleteOutlineIcon className="delete-icon"/>
                    </div>
            </div>

        </DIV>
    )
}

const DIV=styled.div`

    /* background: yellow; */
    width: 100%;
    /* background: green;  */
    margin-top: 30px;
      .delete-icon{ 
         width: 30px;
         height: 30px;
         //margin-right: 10px;  
         cursor: pointer;
         color: red; 
	   }

       .wishlist-item-wrapper{
            display: flex;
            align-items: center;    

            .image{
                flex-basis:10%;
            }
            .name{
                flex-basis:25%;
                
            }
            .price{
                flex-basis:20%;

                .price-text{
                    /* font-size: 18rem; */
                }

            }
            .add-to-cart-btn{
                flex-basis:25%;

                p{
                    text-align:center;
                    font-size: 12rem;
                    /* color:var(--color-grey); */
                }

            }
            .delete-btn{
                flex-basis:20%;
                /* background: green;  */
                text-align: center;
            }
       }
`;



export default Comp;