import {createSlice} from '@reduxjs/toolkit';
import calcTotalCart from '../../functions/calcTotalCart';



export const cardSlice=createSlice({
    name:"cart",
    initialState:{ 
        cart:[

            {
                "data": {
                    "timeStamp": 1639197060451,
                    "ram": "8GB",
                    "price": "290.69",
                    "color": "red",
                    "description": " lite ultra pro max",
                    "productName": "Aplle mac book pro 2026",
                    "ProductImage": "https://firebasestorage.googleapis.com/v0/b/e-commerce-project-93edc.appspot.com/o/images%2F0.1849118971786745%20laptop4.png?alt=media&token=525b8961-93e4-4106-9a06-26c314dd32ad",
                    "storage": "64GB",
                    "quantity": 2,

                },
                "id": "fCTU8mFoJHx0OlUPBcRQ",
                "userEmail": "avishkaNirmitha@gmail.com"
            },
            {
                "data": {
                    "price": "100.69",
                    "timeStamp": 1639196981445,
                    "productName": "Aplle mac book pro 2025",
                    "ram": "8GB",
                    "storage": "32GB",
                    "description": "Mac super lite ultra pro max",
                    "ProductImage": "https://firebasestorage.googleapis.com/v0/b/e-commerce-project-93edc.appspot.com/o/images%2F0.20944392533949707%20laptop2.png?alt=media&token=7913b98a-443c-4813-81f5-cd88fbd5d588",
                    "color": "red",
                    "quantity": 3,

                },
                "id": "GALsx4nSGEamipDJMBKE",
                "userEmail": "avishkaNirmitha@gmail.com"
            },
            {
                "data": {
                    "storage": "1024GB",
                    "ProductImage": "https://firebasestorage.googleapis.com/v0/b/e-commerce-project-93edc.appspot.com/o/images%2F0.8535737325265793%20mobile3.png?alt=media&token=f163bc77-35ac-412e-b09d-8ee41c66d4e9",
                    "color": "black",
                    "ram": "256GB",
                    "productName": "Aplle iphone 14",
                    "price": "250.69",
                    "description": " lite ultra pro ",
                    "timeStamp": 1639197388020,
                    "quantity": 3,

                },
                "id": "Dt3pwsRMOXfIMRogmeJD",
                "userEmail": "avishkaNirmitha@gmail.com"
            },




        ], 
        total:"",

    },
    reducers:{



        addItemCart:(state,action)=>{     

            const {product, currentUserEmail, quantity:quantityCount,  cart:currentCart}=action.payload;


            // console.log(currentCart[0].id);

            const index=currentCart.findIndex(cartitem=>cartitem.id==product.id);

            
            let newCurrCart=[...currentCart];
            
            if(index>-1){ // alredy exists
                
                
                const NewProductquantity=currentCart[index].data.quantity+quantityCount;
                
                const updatedProduct={...currentCart[index],data:{...currentCart[index].data,quantity:NewProductquantity} };
                

                newCurrCart[index]=updatedProduct;
              
            }else{

                const newObj={id:product.id,userEmail:currentUserEmail, data:{...product.data,quantity:quantityCount }};
                newCurrCart.push(newObj);
            }

            state.cart=newCurrCart;

        },
        changeCartQuantity:(state,action)=>{     
            const {id,quantity, curCart:currentCart }=action.payload;

            // {id , quantity , currentCart}
            

            let newCart=[...currentCart];


            if(quantity){

                const index=newCart.findIndex(cartitem=>cartitem.id==id);
    
    
                const updatedProduct={...newCart[index],data:{...newCart[index].data,quantity:quantity} };
                    
    
                newCart[index]=updatedProduct;
            }else{
                newCart= newCart.filter(cartitem=>cartitem.id !== id)
            }


            state.cart=newCart;

            





        },
        calcTotal:(state,action)=>{     


            const {curCart}=action.payload;


            // dont have cart items 
            if(!curCart[0]){
                state.total=0;
                return 
            }


            // cart had one item
            if(curCart.length===1){
                state.total=curCart[0].data.price*curCart[0].data.quantity;
                return 
            }


            // cart have multiple items default behaviour
            const reducer = (previousValue, currentValue) =>{
                if(previousValue?.data){
                    return  (( previousValue.data.price*previousValue.data.quantity) +(currentValue.data.price*currentValue.data.quantity))
                    
                }else{
                    return  ( previousValue +(currentValue.data.price*currentValue.data.quantity))

                }
            };


            const total=curCart.reduce(reducer);


            state.total=(total).toFixed(2);



        },



    }
});



export const {addItemCart,changeCartQuantity ,calcTotal} =cardSlice.actions; 

//selectors
export const selectCart=(state)=>state.cart;

export default cardSlice.reducer;





