import './App.css';

import {useState} from 'react'

import Component1 from './Component1';
import Component2 from './Component2';

function App() {

  const [myState,setmyState] = useState(0) 

  return (
    <div className="App">
      <Component1 myValue={myState} mycallback={setmyState}/>
      <Component2 myValue={myState}/>
    </div>
  );
}

export default App;
