import React, { useContext } from 'react';
import { CountContext } from '../Parent';
import Child2 from './Child2';

const Child1 = () => {

    const count = useContext(CountContext);
    console.log(count);

    return (
        <div className='child-box-1'> 
            <Child2 />
            <h1 className='box-header'>{count}</h1>
         </div>
    )
};

export default Child1;