import React, { useState } from 'react'

function Counter2() {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(initialCount)}>reset</button>
            <button onClick={() => setCount(prev => prev + 5)}>+ 5</button>
        </div>
    )
}

export default Counter2