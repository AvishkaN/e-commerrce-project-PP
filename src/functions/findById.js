

const filterprodctByID=(id,data)=>{
    const filterdData=data.filter(product=>product.id===id);
    return filterdData[0];
};

export default filterprodctByID;
