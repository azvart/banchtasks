import {Request, Response} from 'express';
import stripe_service from '../service/stripe.service';




class StripeController{


    Payment = async (req:Request,res:Response)=>{
        try{
            
            const payment = await stripe_service.Payment(req.body);
            return res.send(200).json({message:'Success',data:payment})


        }catch(e){
            console.error(e);
        }
    }


}








const stripe_controller = new StripeController();


export default stripe_controller;