import {useRef} from 'react'
export default function HookRef() {
    const inputRef = useRef(null);
    const handleFocus = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} />
            <div onClick={handleFocus}>聚焦</div>
        </div>
    )
}