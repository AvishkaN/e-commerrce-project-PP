import styled from 'styled-components';


function SocialLogin({className,text,Svg}) {

    return (   
            <DIV className={`${className}`}>
                <img className="icon" src={Svg} alt="" />
                <p>continue with {text}</p>
            </DIV>
    )
}


const DIV=styled.button`     

    /* background: green;  */
    width: 100%; 
    display: flex;
    align-items: center;
    /* justify-content: center;  */
    border: 1px solid #000;
    padding-left: 25%; 

    margin-bottom: 15px; 
    border-radius: 20px; 
    background: transparent;  
    padding-top:1px;
    padding-bottom:1px;

    &:hover{
        background: #84d84f3d; 
    }


    .icon{   
         width: 35px;
         height: 35px;
         //margin-right: 10px;  
         cursor: pointer;
	   }

       p{
           margin-left: 5px; 
       }
`;      


export default SocialLogin;
