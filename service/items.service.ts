import Items from '../models/items.model';
import braintree from 'braintree';


interface Data{
    header:string,
    description:string,
    price:number,
}




class ItemService{


    AddItem = async (data:Data)=>{
        try{

            const newItem = new Items(data);

            return await newItem.save();


        }catch(e){
            console.error(e);
        }
    }

    AllItem = async () =>{
        try{    

            const allItem = await Items.find();
            return allItem;


        }catch(e){
            console.error(e);
        }
    }

    CurrentItem = async (id:string)=>{
        try{
            
            const current_item = await Items.findById(id);

            return current_item;
        }catch(e){
            console.error(e);
        }
    }

    Payment = async ()=>{
        try{
            
           
        }catch(e){
            console.error(e);
        }
    }
    


}




const service = new ItemService();


export default service;