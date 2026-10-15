
const App = () => {
    function submitHandler(e){
        e.preventDefault();
        console.log("form submitted");
    }

    return (
        <div onSubmit={(elem)=>submitHandler(elem)} className='flex flex-col lg:flex h-screen w-screen bg-gray-900'>
            <div className="flex h-screen w-screen bg-black justify-between gap-6 p-10">
                <div className="bg-green-600 h-120 w-120 rounded-md border-red-400 justify-content flex flex-col px-20 py-30 gap-5 drop-shadow-white-4xl">
                    <input type="text" className="p-5 bg-gray-300 rounded-sm border-gray-300 width-300px py-2 px-10" placeholder="enter the title"/>
                    <input type="text" className="p-5 bg-gray-300 rounded-sm border-gray-300 width-300px h-32 px-10" placeholder="enter your task"/>
                    <button className="bg-yellow-200 border-gray-400 rounded-xl px-5 py-2 width-300px font-bold ">add task</button>
                </div>
                <img className="rotate-z-5 h-150 w-150 p-20 drop-shadow-white-3xl" src="https://www.pngmart.com/files/23/Note-Paper-PNG-Pic.png" alt="image.png"/>
            </div>

            <div className="lg:w-screen bg-black p-10 lg:border-l-2">
                <h1 className="text-2xl font-bold text-white"><u><b>Your Notes</b></u></h1>
                <div className="flex flex-wrap gakp-5 p-10 mt-10 overflow-y-auto ">
                    <div className="h-52 w-40 bg-white rounded-xl font-bold"></div>
                    <div className="h-52 w-40 bg-white rounded-xl font-bold"></div>
                    <div className="h-52 w-40 bg-white rounded-xl font-bold"></div>
                </div>
            </div>
        </div>
    )
}

export default App