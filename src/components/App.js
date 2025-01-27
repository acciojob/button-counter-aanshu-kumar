
import React from "react";
import './../styles/App.css';

const App = () => {
  let [click, setClick] = React.useState(0);
  return (
    <div>
        <p>Button clicked {click} times.</p>
        <button onClick={()=>setClick(click++)}>Click me</button>
    </div>
  )
}

export default App
