import React,{useContext,useEffect} from 'react';
import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js';
import {SumContext} from '../../redux/reducer/context';

interface Props{
    elements:any,
    stripe:any
}


const Form:React.FC<Props> = (props) =>{
    // const stripe:any= useStripe();
    // const elements:any = useElements();
    const{elements,stripe} = props;

    const {TotalSum}:any = useContext(SumContext);
    const  PaySubmit = async (event:React.FormEvent)=>{
        event.preventDefault();
        const cardElement = elements.getElement(CardElement);
        const {paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card:cardElement,
            
        });
        console.log(paymentMethod);
    }
    return(
        <form onSubmit={PaySubmit}>
<CardElement />
            <button type='submit' disabled={!stripe}>
                
                Pay {TotalSum}
            </button>
        </form>
    )
}







export default Form;