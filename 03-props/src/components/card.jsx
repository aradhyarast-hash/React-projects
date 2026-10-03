
const card = (props) => {

  return (
    <div>
        <div className="card">
          <img src="https://images.unsplash.com/photo-1790579261804-ea77510df11d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />
          <h1>{props.user}</h1>
          <h3>{props.age}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur corporis sit perferendis minima! Veniam, ab.</p>
          <button>Click Me</button>
        </div>
    </div>
  )
}

export default card