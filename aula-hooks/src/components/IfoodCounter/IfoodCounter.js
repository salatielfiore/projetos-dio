import React, { useState, useEffect } from 'react';
import "../IfoodCounter/IfoodCounter.css"

export default function IfoodCounter() {

    const [value, setValue] = useState(1);
    const [moeda, setMoeda] = useState();
    const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active");

    useEffect(() => {
        setMoeda(12 * value);
    },[value]);

    function down() {

        if(value <= 1) {
            setButtonStyle("counter-button-minus-desactive");
        } 

        if(value > 0) {
            setValue(value - 1);
        }

    }

    function up() {
        setValue(value + 1);
        setButtonStyle("counter-button-minus-active");
    }

    return (
        <div>
            <div className="counter-wrapper">
                <button
                    onClick={down} 
                    className={buttonStyle}>
                    -
                </button>
                <p>{value}</p>
                <button 
                    onClick={up} 
                    className="counter-button-plus-active">
                    +
                </button>
            </div>
            <button id="moeda">{moeda}</button>
        </div>
    )
}
