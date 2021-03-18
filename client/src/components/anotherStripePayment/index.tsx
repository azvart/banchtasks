import React,{useState,useContext} from 'react';
import axios from 'axios';
import {SumContext} from '../../redux/reducer/context';
import * as form from './index.module.css';


const StripeForm:React.FC = () =>{
    const [stripeForm,setStripeForm] = useState({});
    const {TotalSum}:any = useContext(SumContext);
    const stripe_form_handle_change = (e:any)=>{
        setStripeForm({...stripeForm,[e.target.name]: e.target.value});
    }
    const stripe_handle_submit = (event:React.FormEvent)=>{
        event.preventDefault();
        axios.post('http://localhost:5002/stripe/stripe_get_token',stripeForm)
        .then((token:any)=>{
            const data={
                token:{id:token.data.token.id},
                amount:TotalSum
            }
                axios.post('http://localhost:5002/stripe/stripe_pay',data);
                
        })
    }
    return(
        <form className={form.form} onSubmit={stripe_handle_submit}>
                <div>
                    <input 
                    type="text" name='number' 
                    placeholder='Card number'
                    onChange={stripe_form_handle_change}
                    />
                </div>
                <div>
                <div>
                    <input 
                    type="text" name='exp_month'
                    placeholder='MM'
                    onChange={stripe_form_handle_change}
                     />
                    <input 
                    type="text" 
                    name='exp_year' 
                    placeholder ='YY'
                    onChange={stripe_form_handle_change}
                    />
                </div>
                <div>
                    <input 
                    type="text" 
                    name='cvc'
                    placeholder='CVC'
                    onChange={stripe_form_handle_change}
                     />
                </div>
                </div>
                <div>
                    <button type='submit' disabled={!stripeForm}>Pay</button>
                </div>
        </form>
    )
}







export default StripeForm;