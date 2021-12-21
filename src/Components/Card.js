import React from 'react'
import styled from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { AddRemoveFav } from '../Redux/Slices/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../Redux/Slices/userSlice';


const thisUserFav=(userEmail,favUsers)=>{

    return favUsers.includes(userEmail);
};


function Card({data,id,favUsers,userEmail}) {
    const {ProductImage,color,description,price,productName ,ram,storage}=data;
    const user=useSelector(selectUser); 
    const dispatch=useDispatch();


    const handleClick=()=>{
        console.log(user);
        AddRemoveFav(dispatch,id,user.email)
    };



    return (
       
        <DIV className="cart">
            {/* {console.log(ram,color,productName ,description,ProductImage,storage,price)} */}
            {/* {console.log(ProductImage,color,description,price,productName ,ram,storage)} */}
            <div className={`card-wrapper  ${id}`}>

                <div className="product-image cart-product-image">
                    <img src={ProductImage} alt="" />
                </div>

                <p className="product-name">{productName}</p>
                <p className="small-description">{description}</p>
                <p className="price"><p>$</p>{price}</p>

                { thisUserFav(userEmail,favUsers) && <FavoriteIcon className="fav-icon"    onClick={handleClick}/>}
                { !thisUserFav(userEmail,favUsers) &&  <FavoriteBorderIcon className="black"  onClick={handleClick}/>  }
               

            </div>
        </DIV>
  
    )
}

const DIV=styled.div`
    /* flex-basis: 170px;    */
    flex-basis: 168px;   
    border : var(--border-style-default);
    cursor: pointer;
    

 
    .card-wrapper{
        padding: 7px;   
        position: relative;
        .product-image{
            width: 100%;   
            height: 152px;
            overflow-y: hidden;    
            transition: all .2s; 
            img{
                width: 100%;  
                height: 100%; 
            }

            &:hover{
                transform: scale(1.5);
                margin-top: 46px;
                margin-bottom: 46px;
            }
        }

        p{
            text-align: center; 
        }

        .product-name{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 250px;   
            font-size: 14px;
            font-weight: bold;
            margin-top: 5px;
        }

        .small-description{
            /* display:inline-block; */
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 250px;   
            font-size: 14px;
            font-weight: bold;
            margin-top: 5px;

        }

        .price{
            margin-top: 12px;
            font-weight: bold;
            display: flex;    
            justify-content: center; 
            font-size: 20px;  

            p{   

                font-size: 14px;
                margin-right: 3px;
             }
        }


        .fav-icon{ 
            width: 25px;
            height: 25px;
            //margin-right: 10px;  
            cursor: pointer;
            position: absolute;
            top: 0;
            right: 0;
            color:  var(--color-secondary);
            margin-bottom: 20px; 
            margin-left: 20px; 
            display: none;

	   }
        .black{ 
            width: 25px;
            height: 25px;
            //margin-right: 10px;  
            cursor: pointer;
            position: absolute;
            top: 0;
            right: 0;
            color:  var(--color-secondary);
            margin-bottom: 20px; 
            margin-left: 20px; 
            display: none;

	   }

       &:hover{

           .fav-icon{ 
               display: flex;
           }
           .black{ 
               display: flex;
           }
       }
    }
`;



export default Card;
