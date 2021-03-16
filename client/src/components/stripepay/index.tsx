import React from 'react';
import {Elements,ElementsConsumer} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Form from './form';


const stripeLoad = loadStripe('pk_test_51IU4oJBOSfqjQkvKjuHSlMerXQ2ZWNagQWvlSO2QWUBIqMvJWus0Inz92pL2PAia09rqyEMlxDCrjl0X2IzlX8FR00kuSTk42Z');
const StripePay:React.FC = () =>{
    
    return(
        <Elements stripe={stripeLoad}>
            <ElementsConsumer>
                {({elements,stripe})=>(
                    <Form elements={elements} stripe={stripe} />
                )}
            </ElementsConsumer>
            
        </Elements>
    )
}









export default StripePay;