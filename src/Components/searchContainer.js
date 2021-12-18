import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';


function SearchComponent({className}) {

    return (   
            <Search className="search-container">
                <input type="text" placeholder="search" className="input"/>
                <SearchIcon className="icons"/>
            </Search>
        )
}


const Search=styled.div`     

          display: flex;
          align-items: center;   
          border: var(--border-style-default);
          width: 100%;     
          border-radius: 10rem;   
          background: var(--color-white);   

          input{
              flex: 1;      
              padding: 4rem 8rem;     
          }
       
          .icon{ 
            width: 25px;
            height: 25px;
            margin-right: 10px; 

            &::hover{
                background: red;    
            }
        }


`;      


export default SearchComponent;
