import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Element from './components/element';

function App() {

  const [input , setInput] = useState();
  const [array, setArray] = useState([]);
  const[pop, setPop] = useState('');
  const [top, setTop] = useState('');


const handleChange=(e)=>{
 setInput( e.taeget.value);
}

const handlePop=()=>{
  if(array.length == 0){
    window.alert('Stack is empty')
  }else{
    setPop(array.shift())
  }
  

}
const handlePush=()=>{
  setArray([input, ...array])
}

const  handleTop=()=>{
  if(array.length == 0){
    window.alert('Stack is empty')
  }else{
    setTop(arr[0])
  }
  
}




  return (
    <div className="container">
      <h1 className="header">Stack</h1>
      <div className="row">
        <div className="col md-6 stack">

       {array.map((data, index)=>  <Element key={index} item={data} />)}   
        </div>
        <div className="col md-3 operation">
          <h2>Operations</h2>
          <div className="input-group push">
            <button onClick={handlePush} className="btn btn-outline-secondary" type="button" id="button-addon2">
              PUSH
            </button>
            <input type="text" className="form-control" onChange={handleChange} />
          </div>
          <div className="input-group pop">
            <button onClick={handlePop} className="btn btn-outline-secondary" type="button" id="button-addon2">
              POP
            </button>
            <input type="text" disabled className="form-control" onChange={handleChange} value={pop} />
          </div>
          <div className="input-group top">
            <button onClick={handleTop} className="btn btn-outline-secondary" type="button" id="button-addon2">
              TOP
            </button>
            <input type="text" disabled className="form-control"  value={top}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
