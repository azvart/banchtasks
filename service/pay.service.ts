import braintree from 'braintree';






class PayService{
    
    gateway = new braintree.BraintreeGateway({
        environment:braintree.Environment.Sandbox,
        merchantId:'77hbdvvfq82j3y95',
        publicKey:'drs3hgpxbm5qr8n7',
        privateKey:'200fe080da32c72c8ff689b7e1a62bae',
    });

   GetToken = async ()=>{
       try{
   
       const clientToken =  this.gateway.clientToken.generate({})
       .then((response:any)=>{
           
           return response.clientToken;
       });

       return await clientToken;
    }catch(e){
        console.error(e);
    }
      
   }


   PayMethod = async (data:any) =>{
       try{
        
        const nonceFromTheClient = data.payment;
        
        const newTransaction = this.gateway.transaction.sale({
            amount: String(data.amount),
            paymentMethodNonce:nonceFromTheClient,
            options:{
                submitForSettlement:true
            }
        })
        .then((result:any)=>{
            return result;
        })

        return await newTransaction;

       }catch(e){
           console.log(e);
       }
   }


}





const pay_service = new PayService();

export default pay_service;