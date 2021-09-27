import { useState, useMemo } from "react";

export default function HookMemo() {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(count+1)
    }
    const memoCount = useMemo(()=>count + 3, [count])
    return (
        <>
            <h2>This is HookMemo</h2>
            <div>state:{count}</div>
            <div>memo: {memoCount}</div>
            <button onClick={handleCount}>change state</button>
        </>
    )
}