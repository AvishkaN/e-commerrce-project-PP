import {createSlice} from '@reduxjs/toolkit';
// import { addDoc, collection, doc, setDoc } from "@firebase/firestore"; 
// import { db } from "../../firebase"; 

// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";


export const ProductSlice=createSlice({
    name:"Temp",
    initialState:{
        Products:[], 

    },
    reducers:{

        loadingProducts:(state)=>{   
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

     
    }
});



export const {loadingProducts,loadProductsSucsses,LoadProductError} =ProductSlice.actions; 

//selectors
export const selectProducts=(state)=>state.Products;

export default ProductSlice.reducer;


// // Asynchronous thunk action
// export const  fetchPosts =async(dispatch) =>{

//      dispatch(loadingPosts());

//       try {

//         db.collection("post")
//             .orderBy("timeStamp","desc")
//             .onSnapshot((snapshot)=>{
//                 if(snapshot.empty) dispatch(LoadPostError("Can't load Post.."));
//             dispatch(loadPostsSucsses(
//                 snapshot.docs.map(doc=>({
//                     id:doc.id,
//                     data:doc.data(),
//                 }))
//             ))
//         })


//       } catch (error) {
//       }
//   }



 export  const AddProduct=async (dispatch=null,data={})=>{
    try{

        console.log(data);
        
        const docRef = await addDoc(collection(db, "products"), data);

          console.log("Document written with ID: ", docRef.id);
        
        console.log(`11`);
    }catch(err){
        console.log(err);
    }

}
 export  const UploadFile=async (dispatch=null,file)=>{


    try{

                const storage = getStorage();
                const storageRef = ref(storage, `images/${Math.random()} ${file.name}`);

                const uploadTask = uploadBytesResumable(storageRef, file);

                // Register three observers:
                // 1. 'state_changed' observer, called any time the state changes
                // 2. Error observer, called on failure
                // 3. Completion observer, called on successful completion
                console.log(1);

              await  uploadTask.on('state_changed', 
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                  console.log(snapshot);
                  
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
                    });
                }
                );


                const y=await fileUrl;
                return fileUrl;
        
    }catch(err){
     
    }

}


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

