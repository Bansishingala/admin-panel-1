import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../reduex/action/Counter_action';

function Counter(props) {
    const dispatch = useDispatch();
    const c = useSelector(state => state.counter);

    const handleincrement = () => {
        dispatch(increment)
    }

    const handledecrement = () => {
        dispatch(decrement)
    }

    return (
        <div>
            <button onClick={() => handleincrement()}>+</button>
            {c.counter}
            <button onClick={() => handledecrement()}>-</button>
        </div>
    );
}

export default Counter;