import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import addIcon from './add-img.png';
import "./Todo.css";
import { useState } from 'react';
import TaskCard from './../../components/TaskCard/TaskCard';


function Todo() {
    const [tasks, setTask] = useState([])
    const [newTask, setNewTask] = useState('')
    const [error, setError] = useState('');

    const addTask = () => {
        if(newTask==''){
            setError(["First enter a task"])
            return
        }
        else if(newTask.length < 5){
            setError(["Please enter more than 5 words"])
            return
        }

        setTask([newTask, ...tasks])
        setNewTask('');
        setError([''])
    }

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='box w-40 bg-dark-subtle mx-auto my-5 shadow px-4 rounded-5 border border-dark'>
                    <h1 className='text-center m-2'>Todo App</h1>
                    <div className='task-container px-2'>
                        {
                            tasks.map((task, i)=>{
                                return <TaskCard task={task} key={i}/>
                            })
                        }
                    </div>
                    <p className='text-center war text-danger'>{error}</p>
                    <div className='input-container d-flex justify-content-between align-items-center px-1 m-2'>
                        <input type='text' 
                            placeholder='Add a new task' 
                            className='py-2 px-3 rounded-5 border border-dark fs-5 w-100'
                            value={newTask}
                            onKeyPress={addTask}
                            onChange={(e)=>{
                                setNewTask(e.target.value)
                            }}
                        />
                        <img 
                            src={addIcon} alt='add' 
                            className='add-icon'
                            onClick={addTask} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Todo