import RightCard from './rightCard'
const rightContent = (props) => {

  return (
    <div className='w-2/3 p-5 rounded-5xl h-full overflow-auto flex flex-nowrap  justify-between gap-10 '>
        {props.users.map(function(elem, idx){
            return (<RightCard key={idx} id={idx} img = {elem.img} tag={elem.tag}/>)
        })}
    </div>
  )
}

export default rightContent