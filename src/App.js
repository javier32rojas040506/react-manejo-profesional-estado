import './App.css';
import {ClassState} from './ClassState.js';
import { UseState } from './UseState.js';
import { UseReducer} from './UseReducer.js'

function App() {
  return (
    <div className="App app-container">
      <UseState/>
      <ClassState/>
      <UseReducer/>
    </div>
  );
}

export default App;
