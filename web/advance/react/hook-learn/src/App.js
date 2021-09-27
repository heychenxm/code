import './App.css';
import HookRef from './components/HookRef/HookRef';
import HookState from './components/HookState/HookState';
import HookEffect from './components/HookEffect/HookEffect';
import HookMemo from './components/HookMemo/HookMemo';

function App() {
  return (
    <div className="App">
      <h1>HELLO HOOK</h1>
      <HookRef />
      <HookState />
      <HookEffect />
      <HookMemo />
    </div>
  );
}

export default App;
