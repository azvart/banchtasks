import React from 'react';
import * as main from './main.module.css';



const Main:React.FC = ({...props})=>{
    return(
        <main className={main.main} {...props}/>
    )
}






export default Main;