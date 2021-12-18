import styled from 'styled-components';
import StarIcon from '@mui/icons-material/Star';


const Style = {
    width:"25px",
    height:"25px",

  };


  
  
  function SingleComp({text,className,propStyle=null,fillStars=5}) {
      
      const genarateArr=(fillStarss,checkvalue)=>{

        const array=  [0,0,0,0,0];
        const filledArry=array.fill(1,0,fillStarss)

        const lastArr=filledArry.filter(element=>element===checkvalue);
        return lastArr;

      };


    return (   
        <DIV className={`${className} `}>
            {/* <StarIcon className="icon" style={propStyle?propStyle:Style}/>
            <StarIcon className="icon" style={propStyle?propStyle:Style}/>
            <StarIcon className="icon" style={propStyle?propStyle:Style}/>
            <StarIcon className="icon" style={propStyle?propStyle:Style}/>
            <StarIcon className="icon" style={propStyle?propStyle:Style}/> */}

            {
                // checkvalue =1 for flled stars
                genarateArr(fillStars,1).map(el=>(            
                <StarIcon className="icon" style={propStyle?propStyle:Style}/>
                ))
                
            }

            {
                 // checkvalue =0 for flled stars
                genarateArr(fillStars,0).map(el=>(            
                <StarIcon className="icon-empty-star" style={propStyle?propStyle:Style}/>
                ))
                
            }
        </DIV>
        )
}


const DIV=styled.div`     
       .icon{ 
         /* width: 25px;
         height: 25px; */
         //margin-right: 10px;  
         fill: var(--star-color);
         cursor: pointer;
	   }
       .icon-empty-star{ 
         fill: var(--color-grey);
         cursor: pointer;
	   }
      display: flex;
`;      


export default SingleComp;
