import User from "../models/auth.model.js";

export const getAllUser = async(req, res)=>{
    try{
        const users = await User.find();

        if(!users || users.length===0) {
             return req.status(404).json({message:"No userd found."})
            }
            res.status(200).json({
                success:true,
                users,
            }
            )

    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message,
        })

    }
}