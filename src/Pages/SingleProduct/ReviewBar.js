import styled from 'styled-components';
import StarSection from '../../Components/UI/stars/StarSection';

function SingleComp({className,count=50,barProgress=50 ,fillStars}) {

    return (   
        <DIV className={`${className} `} progress={barProgress}>
             <div className="bar">
                    <div className="stars"><StarSection fillStars={fillStars}/></div>
                    <div className="line"> <div className="count-bar">&nbsp;</div> </div>
                    <div className="count">{count}</div>
            </div>
        </DIV>
        )
}


const DIV=styled.div`     

.bar{

    display: flex; 
    align-items: center;
    .stars{
        margin-left: 8px;
        margin-right: 8px;
        /* flex-basis: 40%; */
    }
    .line{
        /* flex-basis: 40%; */
        /* border: 2px solid #000; */
        width: 36%; 
        height: 16px;
        background: var(--color-grey);
        overflow-y: hidden;  
        
        .count-bar{
            width: 50%; 
            width: ${props => props.progress}%;
            
            background-color: var(--star-color);
            /* background-color: red; */
            /* overflow-y: hidden;   */
        }
    }
    .count{
        margin-left: 15px; 
        /* flex-basis: 5%; */
    }
        
    }
    
    `;      


export default SingleComp;