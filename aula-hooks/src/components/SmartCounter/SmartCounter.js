import { useState } from 'react';

function SmartCounter() {

    const [quantity, upQuantity] = useState(1);

    return (
        <div>
            <h1>{quantity}</h1>
            <button onClick={() => upQuantity(quantity+1)}>aumentar</button>
        </div>
    );
}

export default SmartCounter;