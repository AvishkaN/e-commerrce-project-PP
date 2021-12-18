import styled from 'styled-components';
import BackgroundImage from '../assets/loginBackground.png';
import Input from '../Components/UI/Input/input';
import PasswordInput from '../Components/UI/Input/passwordInput';
import Button from '../Components/UI/buttons/button';


function Register() {

    return (   
        <DIV>
            <div className="wrapper">
                <h1>SIGN UP</h1>
                <form action="">
                    <Input placeholder={"Enter Your Name"} className={"input-o"}/>
                    <Input placeholder={"Enter Your Email"} className={"input-o"}/>
                    <PasswordInput placeholder={"Enter  Password"} className={"input-o"}/>
                    <PasswordInput placeholder={"confirm Password"} className={"input-o"}/>
                    <div className="terms-conditon">
                        <input type="checkbox" className="checkbox" id="check"></input>
                        <label for="check">I agree all statements in Terms of service</label>
                   </div>
                   <Button text={"SIGN UP"} className="button-o"/>

                    <div className="alredey-txt">
                        <p>Have alredy an account ? &nbsp;</p><a href="">Login here</a>
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
        width: 45%; 
        background: #fff; 
        margin: auto auto;  
        padding: 25rem 76rem;    
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

            .button-o{
                transform: translateY(10rem);
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

            .alredey-txt{
                display: flex;
                align-items: center; 
                justify-content: center; 
                margin-top: var(--margin-big-bottom);

                a{
                    /* margin-left: var(--margin-12); */

                }
            }
        }
    }

`;      


export default Register;
