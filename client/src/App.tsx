import React,{useContext, useReducer,useEffect,useState} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {State,Reducer} from './redux/reducer/reducer';
import {Context,ItemContext} from './redux/reducer/context';

import axios from 'axios';
///pages
import Main from './pages/main';
//components
import Items from './components/items/items';
import Cart from './components/cart/cart';
const App:React.FC = ()=>{
  const [state,dispatch] = useReducer(Reducer,State);
  const {Provider} = Context;
  const[item,setItem] = useState([]);
 
  
  useEffect(()=>{
    axios.get('http://localhost:5000/all')
    .then((response)=>{
      setItem(response.data.data);
    });
  },[]);

  return(
      <Provider value={{dispatch,state}}>
        <Router>
          <Main>
              <ItemContext.Provider value={{item,setItem}}>
                    <Items />
              </ItemContext.Provider>
              <Cart />
          </Main>
        </Router>
      </Provider>
  )
}



export default App;


