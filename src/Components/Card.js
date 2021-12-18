import React from 'react'
import styled from 'styled-components';

function Card({data,id}) {
    const {ProductImage,color,description,price,productName ,ram,storage}=data;



    return (
       
        <DIV >
            {/* {console.log(ram,color,productName ,description,ProductImage,storage,price)} */}
            {/* {console.log(ProductImage,color,description,price,productName ,ram,storage)} */}
            <div className={`card-wrapper  ${id}`}>

                <div className="product-image">
                    <img src={ProductImage} alt="" />
                </div>

                <p className="product-name">{productName}</p>
                <p className="small-description">{description}</p>
                <p className="price"><p>$</p>{price}</p>


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
    }
`;



export default Card;
