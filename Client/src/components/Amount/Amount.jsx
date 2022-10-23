import {React, useState }from 'react';
import s from './Amount.module.css';
import {useDispatch} from 'react-redux';
import { changeQtyToAdd } from "../../redux/actions";


function Amount(props) {

     const [counter, setCounter] = useState(0);
     const dispatch = useDispatch()

    const increase = () => {
        setCounter(count => count + 1);
        dispatch(changeQtyToAdd(counter + 1))
    };

    const decrease = () => {
        if(counter > 0){
            setCounter(count => count - 1);
            dispatch(changeQtyToAdd(counter - 1))
        } 
    };
    const reset = () => {
        setCounter(0)
        dispatch(changeQtyToAdd(0))
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