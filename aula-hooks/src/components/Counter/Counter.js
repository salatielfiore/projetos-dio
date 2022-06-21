function Counter() {

    let quantity = 0;

    function upQuantityMore() {
        quantity ++;
        document.getElementById("counter-box").innerHTML = quantity;
    }

    function upQuantityLess() {
        if(quantity > 0) {
            quantity --;
            document.getElementById("counter-box").innerHTML = quantity;
        }
    }

    return(
        <>
            <h1 id="counter-box">{quantity}</h1>
            <button onClick={upQuantityLess}>Diminuir</button> 
            <button onClick={upQuantityMore}>Aumentar</button> 
        </>
        
    );
}

export default Counter;