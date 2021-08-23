import './App.css';
import Testjsx from './Testjsx.js'
// import Tick from './Tick'
import Tick from './Tick'
import Test from './Test'
import StateTest from './StateTest'
import Toggle from './Toggle'
import List from './List'
// import Form from './Form'
import NewForm from './NewForm'
import Calculator from './Calculator';
import Children  from './Children';

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
      <List arrayList={[1,2,3,4]} />
      {/* <Form /> */}
      <NewForm />
      <Calculator />
      <Children>
        <h1>HELLO PROPS CHILDREN</h1>
      </Children>
    </div>
  );
}

export default App;
