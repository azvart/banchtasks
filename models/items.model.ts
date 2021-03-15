import mongoose,{Schema,Document,Model} from 'mongoose';

export interface Items extends Document{
    header:string,
    description:string,
    price:number,
    count:number,
}

interface ItemsModel extends Model<Items>{

}


const ItemsSchema:Schema = new Schema({
    header:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
 

},{versionKey:false});


const Item = mongoose.model('items',ItemsSchema);

export default Item;