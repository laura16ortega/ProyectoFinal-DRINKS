import {React, useState }from 'react';
import s from './Amount.module.css';

function Amount(props) {
    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(count => count + 1);
    };

    const decrease = () => {
        if(counter > 0) setCounter(count => count - 1);
    };
    const reset = () => {
        setCounter(0)
    }

    return (
        <div>
            
            <div className={s.btn_container}>
             
                <button className={s.control_btn} onClick={increase} >+</button>
                <span className={s.counter_output}>{counter}</span>
                <button className={s.control_btn} onClick={decrease}>-</button>
                <button className={s.reset} onClick={reset}>reset</button>
            </div>
        </div>
    );
}

export default Amount;