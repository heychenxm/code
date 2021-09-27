import { useState, useEffect } from "react";

export default function HookEffect() {
    const [count, setCount] = useState(0);
    const handleCount = ()=>{
        setCount(count + 1)
    }
    useEffect(()=>{
        document.title = `hello world ${count}`
    })
    return (
        <>
            <h2>This is HOOKEFFECT</h2>
            <div>{count}</div>
            <button onClick={handleCount}>add count</button>
        </>
    )
}