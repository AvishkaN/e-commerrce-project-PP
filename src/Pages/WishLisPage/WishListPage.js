import styled from 'styled-components';
import WishListContainer from './WishListContainer';
import FavoriteIcon from '@mui/icons-material/Favorite';


function Comp({className}) {
    return (
        <DIV className={className}>
            <div className="wishlist-wrapper">

                <div className="title-section">
                    <div className="heart"><FavoriteIcon className="icon heart"/></div>
                    <h1>My Wishlist</h1>
                </div>

                <div className="wishlist-container">
                        <WishListContainer/>
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