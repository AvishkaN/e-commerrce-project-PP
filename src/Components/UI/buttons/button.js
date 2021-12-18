import styled from 'styled-components';


function ButtonComponent({text,className,onClick}) {

    return (   
        <Button className={`${className} sign-up-btn button`} onClick={onClick}>{text}</Button>
        )
}


const Button=styled.button`     
      

      width: 100%;

        padding: 6rem; 
        background: var(--color-primary);
        color: var(--color-white);
        font-weight: bold; 
        border-radius: 5rem;

        &:hover{
                background:#6cbf37;
        }

`;      


export default ButtonComponent;
