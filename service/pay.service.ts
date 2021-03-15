import braintree from 'braintree';






class PayService{
    
    gateway = new braintree.BraintreeGateway({
        environment:braintree.Environment.Sandbox,
        merchantId:'5sdrszncbmcwrg9r',
        publicKey:'98m6wb792jzk9vdw',
        privateKey:'bb1a1629fa8719a811f2916e7c61fa50',
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