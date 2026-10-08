import NavBar from "./NavBar";
import PAGE1content from "./PAGE1content";
const section1 = (props) => {

  return (
    <div className="h-screen w-full">
        <NavBar/>
        <PAGE1content users={props.users}/>
    </div>
  )
}

export default section1;