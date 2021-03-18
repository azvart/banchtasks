import {Request,Response} from 'express';
import service from '../service/items.service';




class ItemController{


   AddItem = async (req:Request,res:Response)=>{

        try{

            const newitem = await service.AddItem(req.body);
            return res.status(200).json({message:"Success",item:newitem});

        }catch(e){
            console.error(e);
            return res.status(500).json({message:'No added new item'});
        }



   }

   AllItem = async (req:Request,res:Response)=>{
       try{
        const allItem = await service.AllItem();
        return res.status(200).json({message:"Completed", data:allItem})
       }catch(e){
           console.error(e);
           return res.status(500).json({message:"No items"});
       }
   }
   GetCurrent = async (req:Request,res:Response)=>{
       try{
        const currentItem = await service.CurrentItem(req.params.id);
        return res.status(200).json({message:"Item founded", data: currentItem});
       }catch(e){
           console.error(e);
           return res.status(500).json({message:'No current item'});
       }
   }



}





const controller = new ItemController();
export default controller;