import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import {AddProduct, UploadFile} from '../Redux/Slices/ProductSlice';

function Comp() {

    const formRef=useRef();
    const fileRef=useRef();
    const [imgUrl,setImgUrl]=useState(undefined);

    useEffect(()=>{

        if(imgUrl){
            submitHandler(imgUrl);
        }
    },[imgUrl]);



    const handlefileUpload=async(e)=>{
        e.preventDefault();

        const file=fileRef.current.files[0];

        UploadFile(`_`,file,setImgUrl);   // sent file and use selector


        
    };


    const submitHandler=(imgUrl)=>{


        const data={inputs:[...[formRef.current][0]]};

        let lastDataObj={};


        const newObj=data.inputs.map(input=>{
            // console.log(input.className, input.value );
            return [ input.className , input.value ]
        }
        );
        newObj.pop(); // remove last elememt because its button input
        
        const newObj2=newObj.map(input=>{
        
            // return input
            lastDataObj={...lastDataObj, ...{ [input[0]] : input[1] }}
        });


        lastDataObj.ProductImage=imgUrl;

        AddProduct('_',lastDataObj);

        // handlefileUpload();  /// photo file upload
    };




    return (
        <DIV>
            <form onSubmit={handlefileUpload} ref={formRef}>
                    <label htmlFor="fname">Product Image:</label>
                    <input type="file"  className="ProductImage" ref={fileRef} required/>
                    {/* <input type="button"  className="Product " value="upload" onClick={handlefileUpload}></input> */}
                    {/* <button   className="Product-upload " onClick={handlefileUpload}>upload</button> */}


                    <label htmlFor="fname">Product Name:</label>
                    <input type="text"  className="productName"/>

                    <label htmlFor="lname">description</label>
                    <input type="text"  className="description"/>


                    <label htmlFor="lname">price</label>
                    <input type="text"  className="price"/>

                    <label htmlFor="lname">Color</label>
                    <input type="text"  className="color"/>

                    <label htmlFor="lname">Ram</label>
                    <input type="text"  className="ram"/>

                    <label htmlFor="lname">Storage</label>
                    <input  type="text"  className="storage"/>
                                    {/* id="lname" name="lname" */}

             


                    <input type="submit" value="Add product" />
            </form> 


        </DIV>
    )
}

const DIV=styled.div`
margin-top: 95px;
width: 100%;
/* background: yellow; */
      .icon{ 
         width: 25px;
         height: 25px;
         //margin-right: 10px;  
         cursor: pointer;
	   }

       form{
           font-size: 18rem;        
           width: 50%;
           margin: 20px auto; 
           display: flex;
           flex-direction: column; 

           label{
               font-size: inherit;
            }
            input{
               font-size: inherit;

           }
       }
`;



export default Comp;
