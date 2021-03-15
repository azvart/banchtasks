import React,{useContext,useState,useMemo,useEffect} from 'react';
import {Context,SumContext} from '../../redux/reducer/context';
import 'braintree-web';
import axios from 'axios';
import DropIn from 'braintree-web-drop-in-react';
import StripeBtn from '../anotherStripeBtn/StripeBtn';
import * as cart from './cart.module.css';

const Cart:React.FC = () =>{
    const {state}:any = useContext(Context);
    const [open,setOpen] = useState(false);
    const [openUi,setOpenUi] = useState(false);
    const [stripesOpen,setStripesOpen] = useState(false);
    const [clientToken,setClientToken] = useState();
    const [instance,setInstance]:any = useState();

    useEffect(()=>{
        axios.get('http://localhost:5000/pay/getToken')
        .then((response:any)=>{
            
            setClientToken(response.data.token);
        })
    },[]);


    const TotalSum = useMemo(()=>{
        if(state.cart.length === 0){
            return 0;
        }else{
            return state.cart.filter((item:any) => item.count>0)
            .reduce((prev:any,item:any)=>prev + (item.price * item.count), 0);
        }
    },[state.cart]);

    const buy = async ()=>{
        try{
        const {nonce} = await instance.requestPaymentMethod()
        const response:any = await axios.post('http://localhost:5000/pay/sandbox',{payment:nonce,amount:TotalSum});
        console.log(response);
    }catch(e){
        console.error(e);
    }
    }
    return(
        <div className={cart.cartsection}>
            <button className={cart.btncart} onClick={()=>setOpen(!open)}>Cart: {state.cart.length}</button>
            {open && <div>
                {state.cart.map((e:any,index:number)=>{
                    return <div key={index}>
                        <h1>{e.header}</h1>
                        <span>{e.price} BY</span>
                        <br/>
                        <span>Count {e.count}</span>
                        <button>+</button>
                        <button>-</button>
                    </div>
                })}  
                <br/>
                <span>Total Sum:{TotalSum} BY</span>  
                <br/>
                <button onClick={()=>setOpenUi(!openUi)}>Оплатить с помощью BrainTree</button>
                <button onClick={()=>setStripesOpen(!stripesOpen)}>Оплатить с помощью Stripes</button>
            </div>}
            {openUi && <div>
                <DropIn
                options={{
                    authorization:clientToken
                }}    
                onInstance ={(instance)=>setInstance(instance)}
                />   
                <button onClick={buy}>Buy</button> 
            </div>}
            {stripesOpen && <div>
                <SumContext.Provider value={{TotalSum}}>
                  
                    <StripeBtn  />
                </SumContext.Provider>
               
                
            </div>}
        </div>
    )
}







export default Cart;