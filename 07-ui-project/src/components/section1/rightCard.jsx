import Rightcardcontent from './rightCardContent'

const rightCard = (props, idx) => {
  return (
    <div className='w-70 h-full rounded-4xl flex shrink-0 items-center justify-center overflow-hidden relative'>
        <img className="rounded-4xl h-full w-full object-cover"src={props.img} alt="image" />
        <Rightcardcontent key={idx} id={props.id+1} tag={props.tag}/>
    </div>
  )
}

export default rightCard