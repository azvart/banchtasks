import React,{useEffect,useState,useContext} from 'react';
import axios from 'axios';
import * as form from './index.module.css';
import {SumContext} from '../../redux/reducer/context';


const SDKBrain:React.FC = () =>{
    const [clientToken,setClientToken] = useState('');
    const {TotalSum}:any = useContext(SumContext);
    useEffect(()=>{

        axios.get('http://localhost:5001/pay/getToken')
        .then(token=>{
            setClientToken(token.data.token);
        })
      
    },[]);
    const braintree_pay_submit_form = (event:React.FormEvent)=>{
        event.preventDefault();
        axios.post('http://localhost:5001/pay/sandbox',{payment:clientToken,amount:TotalSum})
    }

    return(
        <form className={form.form} onSubmit={braintree_pay_submit_form}>
            <div>
                <header>
                    <h1>Card Payment</h1>
                </header>
                <div>
                    <div>
                        <label>Card Number</label>
                        <div>
                        <input type="text" name='card' placeholder='Card number'/>
                        </div>
                    </div>
                    <div>
                        <label>Expiration Date</label>
                        <div>
                        <input type="text" name='date' placeholder='MM/YY'/>
                        </div>
                    </div>
                    <div>
                        <label>CVV</label>
                        <div>
                        <input type="text" name='cvv' placeholder='CVV'/>
                        </div>
                    </div>
                </div>
                <footer>
                    <button>Pay {TotalSum}</button>
                </footer>
            </div>
        </form>
    )
}









export default SDKBrain;