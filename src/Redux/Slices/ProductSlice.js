import {createSlice} from '@reduxjs/toolkit';
import { addDoc, collection, doc, setDoc,getDocs ,query, where, getDoc} from "@firebase/firestore"; 
import { db } from "../../firebase"; 

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";



export const ProductSlice=createSlice({
    name:"Product",
    initialState:{
        Products:[], 
        loading: false,
        hasErrors: false,
        error: null,
        clickedProduct:null,
    },
    reducers:{

        loadingProducts:(state)=>{   
            console.log(`loadingProducts....`); 
            console.log(`@@@@@`);

            state.loading=true; 
        },
        loadProductsSucsses:(state,action)=>{   
            state.Products=action.payload; 
            state.loading=false; 
            state.hasErrors=false; 
            
        },
        
        LoadProductError:(state,error)=>{   
            state.hasErrors=true; 
            state.loading=false; 
            state.error=error; 

        },
        clickedProductFN:(state,action)=>{   
            state.clickedProduct=action.payload; 

        },

    }
});



export const {loadingProducts,loadProductsSucsses,LoadProductError,clickedProductFN} =ProductSlice.actions; 

//selectors
export const selectProducts=(state)=>state.products;

export default ProductSlice.reducer;





 export  const LoadProducts=async (dispatch=null)=>{
     dispatch(loadingProducts());
    try{

        const querySnapshot = await getDocs(collection(db, "products"));

        console.log(`1`);

        let data=[];
        
       querySnapshot.forEach((doc) => {
        data.push({  
             id:doc.id,
            data:doc.data() 
        });
        });  
        console.log(data);
        dispatch(loadProductsSucsses(data));

    }catch(err){

    }

};


 export  const AddProduct=async (dispatch=null,data={})=>{
    try{

        // timeStamp:firebase.firestore.FieldValue.serverTimestamp(), 
        const docRef = await addDoc(collection(db, "products"), {...data,timeStamp:new Date().getTime()} ); 
        console.log(docRef);
        
    }catch(err){
        console.log(err);
    }

};

 export  const UploadFile=async (dispatch=null,file,setImgUrl)=>{

    let fileUrl;

    try{

                const storage = getStorage();
                const storageRef = ref(storage, `images/${Math.random()} ${file.name}`);

                const uploadTask = uploadBytesResumable(storageRef, file);

                // Register three observers:
                // 1. 'state_changed' observer, called any time the state changes
                // 2. Error observer, called on failure
                // 3. Completion observer, called on successful completion

              await  uploadTask.on('state_changed', 
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                  
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    }
                }, 
                (error) => {
                    // Handle unsuccessful uploads
                }, 
               async () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                   await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                        fileUrl=downloadURL; 
                        setImgUrl(downloadURL);
                    });
                }
                );


                const y=await fileUrl;
                return fileUrl;
        
    }catch(err){
     
    }

};




export  const filterProducts=async (dispatch=null)=>{
    // dispatch(loadingProducts());
   try{
    console.log(`filtering...`);

        const q = query(collection(db, "products"), where("price", "==", "250.69"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, "💗 => ", doc.data());
        });

        // console.log(`💗`,querySnapshot[0]);
        // console.log(`💗`,querySnapshot);
    //     console.log(`💗`,querySnapshot._snapshot.docChanges);
    //     console.log(`💗`,querySnapshot._snapshot.docChanges[1].doc.data.value.mapValue.fields);
    //     // console.log(`💗`,querySnapshot._snapshot.docChanges[2].doc.data.value.mapValue.fields);
    //     // console.log(`💗`,typeof querySnapshot);
    //     // console.log(`💗`);

    //  querySnapshot._snapshot.forEach.map((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, "💗 => ", doc.data());
    //     });



   }catch(err){

   }

};


export  const findProductById=async (dispatch=null,id)=>{
   try{

    
    const snap = await getDoc(doc(db, 'products', id))


    return snap.data();

   }catch(err){

   }

};




// export  const DeletePost=async (id,dispatch)=>{

//     try{
        
        
//         await db.collection("post").doc(id.id).delete().then(() => {
//             dispatch(closeOverlayFN());  
  
//         }).catch((error) => {
//         });

//     }catch(err){

//     }

// }


// export  const EditPost=async (id,message,user,dispatch)=>{


    
    
//     try{
//         const Doc = db.collection('post').doc(id);
//         await Doc.update({  
//             message:message,
//             timeStamp:firebase.firestore.FieldValue.serverTimestamp(), 
//         }); 
//         dispatch(closeOverlayFN());       
//         dispatch(closePostEditor());       
      
        
        
        
//     }catch(error){  
//         console.error("Error writing document: ", error);

//     }

// };

// const filteredPost=(posts,id)=>{
//  const likedByArr=posts.filter(post=>post.id===id);
// //  console.log(x.data.likedBy);  

// //  console.log(likedByArr);
//  return likedByArr;  
// };


// export  const LikePost=async (postId,posts,userEmail)=>{

//     // liked userers array
//     const likedByArr= filteredPost(posts,postId)[0].data.likedBy;
    
//      // current user is liked this post before ?
//     const isLikedBeforeArr=likedByArr.filter(userEmailAddress=>userEmailAddress==userEmail);
    
//     let newUpdatedArr;
    
//     if(isLikedBeforeArr.length){ // current user is liked this post 

//         newUpdatedArr=likedByArr.filter(emaiL=>{  // remove current user from likedUseres array
//             return emaiL!==userEmail
//         });

//     }else{  // current user didn't liked this post 
//         newUpdatedArr=likedByArr.concat(userEmail); // add this use likedUseres array

//     }


    
//     try{ 
//         // update  firebase new userLikedArray 

//         const Doc = db.collection('post').doc(postId);
//         await Doc.update({likedBy:newUpdatedArr}); 

//     }catch(err){

//     }

// };

