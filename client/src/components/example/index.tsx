import React from 'react';
import {useAsync} from '../../hooks/AsyncHook';
import axios from 'axios';


const Example:React.FC = () =>{

    const Async = async ()=>{
        try{
            const result = await axios.get('http://localhost:5001/all');
            return result.data;
        }catch(e){
            console.log(e);
        }
    }
    const {loading,result,error,execute}:any = useAsync({
        asyncFunction: Async,
    })
    const HandleClick =()=>{
        execute();
    }
    return(
        <div>
            {loading && <p>loading</p>}
            {!loading && result && <div>
            {result.data.map((e:any,index:number)=>{
                return <div   key={index}>
                    <h1>{e.header}</h1>
                </div>
            })}
            </div>}
            {!loading && error?.message && <p>{error?.message}</p>}
            <button onClick={HandleClick}>Загрузить</button>
        </div>
    )
}



export default Example;
