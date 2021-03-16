import React,{useContext,useCallback} from 'react';
import {SumContext} from '../../redux/reducer/context';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';




const StripeBtn:React.FC = ()=>{
    const {TotalSum}:any= useContext(SumContext);
    const key = 'pk_test_51IU4oJBOSfqjQkvKjuHSlMerXQ2ZWNagQWvlSO2QWUBIqMvJWus0Inz92pL2PAia09rqyEMlxDCrjl0X2IzlX8FR00kuSTk42Z';
    const token = useCallback((token)=>{
        const body= {
            amount:TotalSum,
            token:token
        };
        axios.post('http://localhost:5001/stripe/stripe_pay',body)
        .then(response=>{
            console.log(response);

        })
        .catch(error=>{
            console.log(`Payment Error: ${error}`);
        })
    },[TotalSum]);
    return(
        <div>
            <StripeCheckout label={'Pay pls'}  amount={TotalSum} token={token} stripeKey={key} />
        </div>
    )
}







export default StripeBtn;