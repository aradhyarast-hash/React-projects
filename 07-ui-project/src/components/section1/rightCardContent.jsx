import 'remixicon/fonts/remixicon.css'

const rightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between text-white text-shadow-3xl">
            <h2 className="bg-white text-2xl rounded-full h-14 w-14 flex justify-center items-center text-black font-semibold">{props.id}</h2>
            
            <div className="mt-60 text-gray-400 font-medium leading-tight">
                <p className="text-lg leading-relaxed text-white mb-10 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi non sunt tempora ratione, dolor porro nemo.</p>
            </div>
            <div className="flex justify-between gap-5">
                <button className="bg-blue-500 px-8 py-1 rounded-4xl text-lg p-8 font-medium">{props.tag}</button>
                <button className="bg-blue-500 rounded-full font-medium px-4 py-1 p-4"><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>

  )
}

export default rightCardContent