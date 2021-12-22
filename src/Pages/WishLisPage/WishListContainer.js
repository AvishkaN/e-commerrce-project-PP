import styled from 'styled-components';
import WishlistItem from './WishlistItem';





function Comp({className,Wishlists}) {
    return (
        <DIV className={className}>
            <div className="wishlist-container-wrapper">

                {Wishlists.map(wishlist=>(  <WishlistItem product={wishlist} key={wishlist.id} productName={wishlist.data.productName} image={wishlist.data.ProductImage}  description={wishlist.data.description}  price={+wishlist.data.price}/>))}
                  
                    {/* <WishlistItem/>
                    <WishlistItem/> */}
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