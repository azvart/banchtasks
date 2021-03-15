import Stripe from 'stripe';



class StripeService{

    


    Payment = async (data:any)=>{
        try{
        const stripeData = {
            source:data.token.id,
            amount:data.amount,
            currency:'usd'
        }

       const stripe = new Stripe('sk_test_51IU4oJBOSfqjQkvKjZLZqeVjqB7YNJqytXxjE4d6yQtXPSNbUWtL3MFfa18IqNejJIF0BMTOah1jZnbQw7xnvnkb00L7bFu33u',{
           apiVersion: '2020-08-27'
       });
       return stripe.charges.create(stripeData);
        
    }catch(e){
        console.error(e);
    }


    }



}






const stripe_service = new StripeService();




export default stripe_service;