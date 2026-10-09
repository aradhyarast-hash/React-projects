
const App = () => {
  // function changing(elem){
  //   console.log(elem);
  // }

  function Scroll(elem){
    if(elem > 0){
      console.log("downward scroll");
    }
    else{
      console.log("upward scroll");
    }
    console.log("the page is scrolling at the speed of ", elem);
  }
  return (
    <div onWheel={(elem)=>{
      Scroll(elem.deltaY);
    }}>
      
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App