import {useRef} from 'react'
export default function HookRef() {
    const inputRef = useRef(null);
    const handleFocus = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={handleFocus}>通过事件聚焦</button>
        </div>
    )
}