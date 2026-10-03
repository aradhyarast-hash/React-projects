import Card from "./components/card"
const App = () => {
  return (
    <div className="parent">
        
      <Card user='nisha' age='18' />
      <Card user='amrita' age='28'/>
      <Card user='nishant' age='34z'/>
    </div>
  )
}

export default App