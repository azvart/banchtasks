import React,{useState} from 'react';
import axios from 'axios';
import * as form from './form.module.css';


const ItemAdded:React.FC = ()=>{
    const [item,setItem] = useState({});
    const Item_Added_Submit = (event:React.FormEvent)=>{
        event.preventDefault();
        axios({
            method:'post',
            url:'http://localhost:5001/add',
            data:item
        });
    }
    const Item_Change = (e:any) =>{
        setItem({...item,[e.target.name]: e.target.value});
    }
    return(
        <form className={form.form}  onSubmit={Item_Added_Submit}>
            <div>
            <input type="text" name='header' placeholder='header' onChange={(e)=>Item_Change(e)}/>
            </div>
            <div>
            <input type="text" name='description' placeholder='description' onChange={(e)=>Item_Change(e)}/>
            </div>
            <div>
            <input type="text" name='price' placeholder='price' onChange={(e)=>Item_Change(e)}/>
            </div>
            <div>
                <button type='submit'>
                    Add Item
                </button>
            </div>
        </form>
    )
}









export default ItemAdded;