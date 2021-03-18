import {Request, Response} from 'express';
import stripe_service from '../service/stripe.service';




class StripeController{


    Payment = async (req:Request,res:Response)=>{
        try{
            
            const payment = await stripe_service.Payment(req.body);
            return res.status(200).json({message:'Success',data:payment})


        }catch(e){
            console.error(e);
            return res.status(500).json({message:'Falure'})
        }
    }

    GetToken = async (req:Request,res:Response)=>{
        try{
            const getToken = await stripe_service.GetToken(req.body);
            return res.status(200).json({message:'Success',token:getToken});
        }catch(e){
            console.error(e);
            return res.status(500).json({message:"Failure"});
        }
    }
}








const stripe_controller = new StripeController();


export default stripe_controller;