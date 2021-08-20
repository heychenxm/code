import './App.css';
import Testjsx from './Testjsx.js'
// import Tick from './Tick'
import Tick from './Tick'
import Test from './Test'
import StateTest from './StateTest'
import Toggle from './Toggle'

function App() {
  return (
    <div className="App">
      HELLO WORLD
      <Testjsx / >
      <div id="tick"></div>
      <Test />
      <Tick />
      <StateTest num={12312}/>
      <Toggle />
    </div>
  );
}

export default App;
