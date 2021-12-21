import styled from 'styled-components';
import WishlistItem from './WishlistItem';





function Comp({className}) {
    return (
        <DIV className={className}>
            <div className="wishlist-container-wrapper">
                    <WishlistItem/>
                    <WishlistItem/>
                    <WishlistItem/>
            </div>
        </DIV>
    )
}

const DIV=styled.div`
    /* background: green; */
    margin-bottom: 20px;

      .icon{ 
         width: 25px;
         height: 25px;
         //margin-right: 10px;  
         cursor: pointer;
	   }

      
`;



export default Comp;