import React from 'react'
import { useState } from 'react';

const App = () => {
  const [num, setnum] = useState(10);
  // const [array, setarray] = useState([10,20,30]);
  const [username, setusername] = useState({ user: "aradhya", age: 17 });
  function increaseNum(){
    setnum(num + 1);
  }
  function decreaseNum(){
    setnum(num - 1);
  }
  // function changeUserName(){
  //   setusername("deepika");
  // }

  function btnClicked(prev){
    setusername({ ...prev, age: 20 });
  }

  return (
    <div>
      <h1>value of num is {num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease num</button>
      <h2>userName is {username.user}, age is {username.age}</h2>
      <button onClick={() => btnClicked(username)}>Update Age</button>
    </div>
  )
}

export default App