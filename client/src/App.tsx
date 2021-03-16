import React,{useContext, useReducer,useEffect,useState,useMemo} from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import {State,Reducer} from './redux/reducer/reducer';
import {Context,ItemContext,SumContext} from './redux/reducer/context';
import 'braintree-web';
import  DropIn from 'braintree-web-drop-in-react';
import axios from 'axios';
///layouts
import Layout from './pages/layout/layout';
///pages
import Main from './pages/main/main';
import Header from './pages/header/header';
//components
import Items from './components/items/items';
import Cart from './components/cart/cart';
import StripeBtn from './components/anotherStripeBtn/StripeBtn';
import ItemAdded from './components/item_added/index';
const App:React.FC = ()=>{
  const [state,dispatch] = useReducer(Reducer,State);
  const {Provider} = Context;
  const[item,setItem] = useState([]);
  const [clientToken,setClientToken] = useState('');
  const [instance,setInstance]:any = useState('');
  useEffect(()=>{
    axios.get('http://localhost:5000/all')
    .then((response)=>{
      setItem(response.data.data);
    });
  },[]);

  useEffect(()=>{
    axios.get('http://localhost:5001/pay/getToken')
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
  const {nonce} = await instance.requestPaymentMethod();
  const response:any = await axios.post('http://localhost:5001/pay/sandbox',{payment:nonce,amount:TotalSum});
  console.log(response);
}catch(e){
  console.error(e);
}
}
  return(

      <Provider value={{dispatch,state}}>
        <Router>
          <Route path='/'>
              <Layout>
                <Header>
                      <Link to='cart'>Cart : {state.cart.length}</Link>
                </Header>
                <Main>
                    
                      <Route exact path='/'>
                        
                          <ItemContext.Provider value={{item,setItem}}>
                                  <Items />
                          </ItemContext.Provider>
                        
                      </Route>
                      <SumContext.Provider value={{TotalSum}}>
                      <Route path='/cart'>
                            <Cart />
                      </Route>
                      
                      <Route exact path='/braintree'>
                          <DropIn 
                          options={{
                            authorization:clientToken
                          }}
                          onInstance={(instance)=>setInstance(instance)}
                          />
                          <button onClick={buy}>Pay</button>
                      </Route>
                  
                      <Route path='/stripes'>
                            <StripeBtn />
                      </Route>
                      </SumContext.Provider>
                    <Route path='/add_item'  component={ItemAdded} />
                </Main>
              </Layout>
          </Route>
        </Router>
      </Provider>
  )
}



export default App;


