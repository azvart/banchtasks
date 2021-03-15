import mongoose, {Schema,Document,Model} from 'mongoose';


interface User extends Document{
    name:string,
    password:string,
    email:string,
}

interface UserModel extends Model<User>{

}



const UserSchema:Schema = new Schema({
    name:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true
    }
},{versionKey:false});


const Users = mongoose.model('users',UserSchema);

export default Users;