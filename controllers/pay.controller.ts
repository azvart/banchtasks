import {Request,Response} from 'express';
import pay_service from '../service/pay.service';


class PayController{

    GetToken = async (req:Request,res:Response) =>{
        try{

            const data= await pay_service.GetToken();
            
            return res.status(200).json({message:'Token',token:data});

        }catch(e){
            console.error(e);
            return res.status(500).json({message:"Failed"});
        }
    }
    PayMethod = async (req:Request,res:Response)=>{
        try{
            console.log(req.body);
            const data = await pay_service.PayMethod(req.body);

            return res.status(200).json({response:data});

        }catch(e){
            console.error(e);
            return res.status(500).json({message:"Pay failed"});
        }
    }


}







const pay_controller = new PayController();
export default pay_controller;