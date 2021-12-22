import {createSlice} from '@reduxjs/toolkit';


import {  getAuth,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from '@firebase/auth';


export const userSlice=createSlice({
    name:"user",
    initialState:{
        // default
        // user:null,

        // tempory  for building reason 
        
        user:{
            
            email:"avishkaNirmitha@gmail.com",
            uid:"5vkjUDtcTGbbiJuOEh7FMZbPFZx1",
            displayName:"avNIr",
            photoUrl:null
        }

    },
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
        },
        logout:(state)=>{
            console.log('slice');
            state.user=null;
        }
    }
});


export const {login,logout} =userSlice.actions;


//selectors
export const selectUser=(state)=>state.user.user;

export default userSlice.reducer;


export const googleLogin=(dispatch)=>{

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        console.log(user);

        dispatch(login(user));

        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });

};
// export const googleLogin=(dispatch)=>{

//             const auth = getAuth();
//             createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 // Signed in 
//                 const user = userCredential.user;
//                 dispatch(login(user))
//                 // ...
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 // ..
//             });

// };



