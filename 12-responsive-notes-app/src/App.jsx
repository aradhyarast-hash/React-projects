import React, { useState } from 'react'

const App = () => {
    
    const deleteNote = (idx)=>{
        const copyTask = [...task];
        copyTask.splice(idx, 1);
        setTask(copyTask);
    }

    function submitHandler(e){
        e.preventDefault();
        const copyTask = [...task];
        copyTask.push({title, description});
        console.log(title, description);
        setTask(copyTask);

        setTitle('');
        setDescription('');
    }
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [task, setTask] = useState([]);
    return (
        <div className='lg:flex h-screen w-screen bg-black'>
            <form onSubmit={(elem)=>submitHandler(elem)} className="flex h-screen lg:w-2/5 bg-black gap-6 p-10 flex-col gap-5 px-15 py-20">
                <h1 className="text-4xl text-white font-bold mt-5 items-start">Add Notes</h1>
                <div className="h-120 w-120 rounded-md justify-content border-2 flex flex-col gap-5">
                    <input type="text" className="p-5 text-white border-white outline-none rounded-md border-2 w-full font-medium py-2" placeholder="Enter the title" value={title} onChange={(e)=>{
                        setTitle(e.target.value);
                    }} />
                    <textarea type="text" className="px-5 rounded-md flex flex-row font-medium items-start outline-none w-full h-32 py-2 border-2 border-white text-white " placeholder="Enter your task" value={description} onChange={(e)=>{
                        setDescription(e.target.value);
                    }} />
                    <button className="bg-white active:bg-gray-50 border-2 rounded-xl px-5 py-2 w-full font-bold ">add task</button>
                </div>
            </form>

            <div className="lg:w-1/2 lg:border-l-2 text-white p-10">
                <h1 className="text-3xl font-bold text-white"><b>Recent Notes</b></h1>
                <div className="flex flex-wrap gap-5 p-10 mt-5 h-full overflow-auto">
                    {task.map(function(elem, idx){
                    return <div key={idx} className="bg-white h-52 w-39 rounded-xl p-2 pb-4 justify-between flex flex-col items-start relative bg-cover bg-[url('https://tse4.mm.bing.net/th/id/OIP.cbyp6HwEGgMyBIYh260UigAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3')]">
                        <div>
                            <h3 className="font-bold p-4 text-xl text-black leading-tight">{elem.title}</h3>
                            <p className="text-md px-4 leading-tight text-gray-600 font-bold">{elem.description}</p>
                        </div>
                        <button onClick={()=>{
                            deleteNote(idx)
                        }} className="w-full cursor-pointer active:scale-95 bg-red-600 text-white py-1 text-xs rounded-md font-bold text-lg">Delete</button>
                    </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default App