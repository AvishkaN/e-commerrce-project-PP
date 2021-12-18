

const calcTotalCart=(cart)=>{
  const total=cart.reduce((prevValue,curValue)=>{

    console.log(cart);
    //   console.log(prevValue.data);

      if(prevValue.data){

          
          const prev=prevValue.data.price*prevValue.data.quantity;
          const cur=curValue.data.price*curValue.data.quantity;
          return prev+cur;
        }
    })


    console.log(typeof total);

    if((typeof total)=="object"){
        return 0
    }

    return total;

};

export default calcTotalCart;
