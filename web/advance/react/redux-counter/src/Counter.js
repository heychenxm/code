import './Counter.css'
import react, {useState} from 'react'

/**
 * 
 * @returns 
 */
function Counter() {
    const [counter, setcounter] = useState(0);

    const increment = () => {
        setcounter(prevCounter => prevCounter + 1)
    }
    return (
        <div>
            <h1>I am counter</h1>
            Value: {counter}
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter