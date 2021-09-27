import ReactDOM from 'react-dom';
import style from './style.module.css'
import React, { useState } from 'react';

function App() {
    const [num , setNum] = useState(0);
  const [inputValue, setValue] = useState("wewe");                                                                                                                                                                                                                                                       
  const [tasks, setTasks] = useState([
    {id: 1, name: 'Проснуца', isReady: false},
    {id: 2, name: 'Покушац', isReady: false},
    {id: 3, name: 'Покакац', isReady: false},
    {id: 4, name: 'Погулац', isReady: false},
    {id: 5, name: 'Спац', isReady: false}
  ]);

  const taskItems = tasks.map((task) =>
      <div>
          <div className={style.taskList}>
             <input type="checkbox" className={style.list_item} onChange={() => setTasks(tasks.map(i=>i.id == task.id ? Object.assign({}, i, {isReady: true}): i))} />
              <p className={style.taskName}>{task.name}</p>
          </div>
          <div className={style.taskButtons}>
              <button className={style.edit} onClick={()=> setTasks(tasks.map(i=>i.id == task.id ? Object.assign({}, i, {name: inputValue}): i))}>Edit</button>
              <button className={style.delete} onClick={()=> setTasks(tasks.filter(t => t.id !== task.id))  }>Delete</button>
          </div>
      </div>
  );

  function chd_arr(change , state)
  {
      if(change == "active")
      {
          setTasks(tasks.filter(t=>t.isReady !== false));
      }
       if (change == "completed")
       {
           setTasks(tasks.filter(t=>t.isReady !== true));
       }
  }
  return (
        <div className= {style.Tasks}>
          <div className={style.Block}>
              <div className={style.addTask}>
                  <h1 className={style.title}>Tasks</h1>
                  <input type="text" className={style.newTask} onChange={(event)=>setValue(event.target.value)} value={inputValue}/>
                  <button className={style.addButton} onClick={() => setTasks([...tasks, {id: tasks.length+1, name: inputValue, isReady: false}])}>Add task</button>
              </div>
              <div className={style.taskFilter}>
                  <button className={style.Button} onClick={()=> chd_arr("all", )}>all</button>
                  <button className={style.Button} onClick={()=> chd_arr("active")}>Active</button>
                  <button className={style.Button} onClick={()=> chd_arr("completed")}>Completed</button>
              </div>
              <div className={style.list}>
                  <p className={style.remaining}>  Tasks remaining</p>
              </div>
              <ul className={style.list}>{taskItems}</ul>
          </div>
        </div>
    )
}

export default App;
