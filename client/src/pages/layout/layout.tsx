import React from 'react';
import * as layout from './layout.module.css';




const Layout:React.FC = ({...props})=>{
    return(
        <div className={layout.layout} {...props} />
    )
}








export default Layout;