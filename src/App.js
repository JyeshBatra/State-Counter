import React, {useState} from "react"
import "./App.css"

function App(){

    const [count, setCount] = useState(0);

    return(
    <div className="App">
      <header>
        <h1>Counter App using State</h1>
      </header>
      <h2>Current value of count is {count}</h2>
      <button onClick={()=>setCount(0)}>Reset Counter</button>
      <button onClick={()=>{if(count>10){return "";} else{return (count+1);}}}>Increment Counter</button>
      <button onClick={()=>count<=0 ? setCount(0) : setCount(count-1)}>Decrement Counter</button>
    </div>
    )
}
export default App;