const App = () => {
  const submitHandler = (e)=>{
    e.preventDefault();
    console.log("form submitted");
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder="enter the name" onChange={()=>{
          console.log("inputing...");
        }}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App