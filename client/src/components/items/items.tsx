import React,{useContext,useCallback} from 'react';
import {Link} from 'react-router-dom';
import {ItemContext,Context} from '../../redux/reducer/context';
import * as card from './items.module.css';
import axios from 'axios';

const Items:React.FC = () =>{

    const {item}:any = useContext(ItemContext);
    const {dispatch}:any = useContext(Context);
    const AddCart = useCallback((id)=>{
        axios.get(`http://localhost:5002/${id}`)
        .then((response:any)=>{
            dispatch({
                type:"ADD_ITEM_CART",
                payload:response.data.data
            })
        });
    },[]);
    
    return(
            <>
            {  item.map((e:any)=>{
               return <div className={card.card} key={e._id}>
                    <h1>{e.header}</h1>
                    <p>{e.description}</p>
                    <span>{e.price} BY</span>
                    <button onClick={()=>AddCart(e._id)} >Add to Cart</button>
                </div>
            })}
            <Link to='/add_item'>Add Item</Link>
        </>
        
    )
}







export default React.memo(Items);