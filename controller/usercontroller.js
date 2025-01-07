import user from '../model/usermodel.js';

export const create =  async (req,res)=>{
    try{
        let userdata = new user(req.body);
        const {email} = userdata;

        //awit is used to wait and collect the data by taking time
        const userExist = await user.findOne({email});

        if (userExist){
            return res.status(400).json({message:"User already exist "});
        }
        const saveduser = await userdata.save();
        res.status(200).json({saveduser})
        
    }
    catch(err){
        res.status(500).json({error:"internal server error"})
    }
}

export const fetch =  async(req,res)=>{
    try{
        const users = await user.find();
        if(user.length === 0){
        // const id = req.params.id;
        // const userData = await user.findById(id); 
        // if (!userData){
            return res.status(404).json({message:"No user found"});
        }
        res.status(200).json({users});
    }
    catch(err){
        res.status(500).json({error:"Internal server error"})
    }    
}
export const update =  async(req,res)=>{
    try{
        const id = req.params.id;
        const userExist = await user.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message:"User not found"});
        }
        const updateUser = await user.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({updateUser});

    }
    catch(err){
        res.status(500).json({error:"internal server error"})
    }    
}
export const deleteUser =  async(req,res)=>{
    try{
        const id = req.params.id;
        const userExist = await user.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message:"User not found"});
        }
        await user.findByIdAndDelete(id);
        res.status(200).json({message:"User deleted Successfully"});
    }
    catch(err){
        res.status(500).json({error:"internal server error"})
    }    
}

