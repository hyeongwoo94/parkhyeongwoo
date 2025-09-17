import Btn from "./styles/Btn"


import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/config/configStore";
import { increment } from "../redux/modules/counter";



function Counter () {
        const number = useSelector((state: RootState) => state.counter.number);
        const dispatch = useDispatch<AppDispatch>();

    return(
        <>
            <div>{number}</div>
            <button onClick={() => dispatch(increment())}>+1</button>
            <Btn>빼기</Btn>
        </>
    )
}


export default Counter