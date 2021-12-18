import styled from 'styled-components';
import BackgroundImage from '../assets/loginBackground.png';
import Input from '../Components/UI/Input/input';
import PasswordInput from '../Components/UI/Input/passwordInput';
import Button from '../Components/UI/buttons/button';
import SocialLogin from '../Components/SocialLogin';


import FbSvg from '../assets/svg/facebook.svg';
import GoogleSvg from '../assets/svg/google.svg';
import TwitterSvg from '../assets/svg/twitter.svg';
import { googleLogin, selectUser } from '../Redux/Slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router';


function LoginPage() {

    const dispatch=useDispatch();
    const user=useSelector(selectUser);
    let history = useHistory();

    useEffect(()=>{

        if(user){
            history.push('/');
        }
    },[user]);


    const loginHandler=(e)=>{
        e.preventDefault();

        const clasS=e.target.closest('button').classList[2];

        if(clasS=="google"){
            googleLogin(dispatch);
        }
    }

    return (   
        <DIV>
            {console.log(Boolean(user))}
            <div className="wrapper">
                <h1>Login</h1>
                <form action="">
                    <Input placeholder={"Enter Your Email"} className={"input-o"}/>
                    <PasswordInput placeholder={"Enter  Password"} className={"input-o"}/>
 
                   <Button text={"LOGIN"}/>


                    <div className="social-login-container" onClick={loginHandler}>
                            <SocialLogin className="google social-login" text="Google" Svg={GoogleSvg}/>
                            <SocialLogin className="facebook"  text="Facebook" Svg={FbSvg}/>
                            <SocialLogin className="twitter"  text="Twitter" Svg={TwitterSvg}/>
                    </div>


                    <div className="alredey-txt">
                        <p>You haven't account? &nbsp;</p><a href="">Login here</a>
                    </div>
                </form>

            </div>
        </DIV>
    )
}


const DIV=styled.div`    
    position: relative;
    width: 100vw;
    min-height: 100vh;
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;        
    background-position: center;  
    /* background-color: black;     */
    box-shadow:inset 0 0 0 2000rem #84d84f61; 
    display: flex;
    /* align-items: center;  */    

    .wrapper{
        width: 35%; 
        background: #fff; 
        margin: auto auto;  
        padding: 25rem 70rem;    
        border-radius : 20rem;  
        
        /* margin-top: auto;   */

        h1{ 
            text-align: center;    
            padding-bottom: 26rem;
        }
        form{
            display: flex;
            flex-direction: column;

            .input-o{
                margin-bottom: var(--margin-15);
            }

            .terms-conditon{
                display: flex; 
                align-items: center; 
                margin-bottom: var(--margin-15);

                label{ 
                    margin-left: var(--margin-12);
                    cursor: pointer;
                }
             }

             .social-login{
                margin-top:40rem;
                cursor: pointer;

             }

            .alredey-txt{
                display: flex;
                align-items: center; 
                justify-content: center; 
                margin-top:20rem;

                /* margin-top: var(--margin-big-bottom); */

                a{
                    /* margin-left: var(--margin-12); */

                }
            }
        }
    }

`;      


export default LoginPage;
