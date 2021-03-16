import React,{useContext,useState} from 'react';
import {Context,SumContext} from '../../redux/reducer/context';
import {Link} from 'react-router-dom';

const Cart:React.FC = () =>{
    const {state}:any = useContext(Context);
    const {TotalSum}:any = useContext(SumContext);

    

 


  


    return(
        <div>
            {state.cart.map((e:any,index:number)=>{
                return <div key={index}>
                    <h1>{e.header}</h1>
                    <p>{e.price}</p>
                    <span>{e.count}</span>
                </div>
            })}
            <span> Total Sum : {TotalSum}</span>
            <Link to='/braintree'>Оплатить с помощью BrainTree</Link>
            <Link to='/stripes'>Оплатить с помощью Stripes</Link>
        </div>
    )
}







export default Cart;