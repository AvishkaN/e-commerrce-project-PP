import styled from 'styled-components';
import WishListContainer from './WishListContainer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect } from 'react';
import { LoadProducts, selectProducts } from '../../Redux/Slices/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../Redux/Slices/userSlice';


function Comp({className}) {
    const user=useSelector(selectUser);
    const products=useSelector(selectProducts);
    const dispatch=useDispatch();


    useEffect(()=>{

        LoadProducts(dispatch,user.email);

    },[])

    return (
        <DIV className={className}>
            {console.log(products.Wishlists) }
            <div className="wishlist-wrapper">

                <div className="title-section">
                    <div className="heart"><FavoriteIcon className="icon heart"/></div>
                    <h1>My Wishlist</h1>
                </div>

                <div className="wishlist-container">
                        <WishListContainer Wishlists={products.Wishlists}/>
                </div>
            </div>
        </DIV>
    )
}

const DIV=styled.div`
    margin-top: 95px; 

      .icon{ 
         width: 60px;
         height: 60px;
         //margin-right: 10px;  
         cursor: pointer;
	   }

       .wishlist-wrapper{
           
           .title-section{
                text-align: center;
                .heart{
                    color: #F24E1E;
                }
                h2{

                }
            }

            .wishlist-container{
               width: 88%;
               margin:0 auto;
            }
       }
`;



export default Comp;