import styled from 'styled-components';


function INPUT({placeholder,className}) {

    return (   
            <Input type="text"  className={className} placeholder={placeholder}/>
    )
}


const Input=styled.input`     
        border:  var(--border-style-default); 
        padding: 6rem; 

`;      


export default INPUT;
