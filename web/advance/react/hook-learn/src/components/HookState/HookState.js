import React, { useState } from "react"

export default function HookState() {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(count+1)
    }
    return (
        <div>
            <h2>This is HOOKSTATE</h2>
            <div>这个是通过useState设置的{count}</div>
            <button onClick={handleCount}>count add 1</button>
        </div>
    )
}