module.exports={
    getAll:(req,res)=>{
        return res.status(200).json({Msg:`All Products`});
    },
    getByID:(req,res)=>{
        let prodid=req.params.id;
        return res.status(200).json({Msg:`Product ID : ${prodid}`});
    },
    addNew:(req,res)=>{
        console.log(req.body);
        return res.status(200).json({Msg:`New Product Added`});
    },
    Update:(req,res)=>{
        console.log(req.body);
        let prodid=req.params.id;
        return res.status(200).json({Msg:`${prodid} Has Been Updated`});
    },
    Delete:(req,res)=>{
        let prodid=req.params.id;
        return res.status(200).json({Msg:`${prodid} Has Been Deleted`});
    }
};