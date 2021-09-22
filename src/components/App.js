import ReactDOM from 'react-dom';
import style from './style.module.css'
import React, { useState } from 'react';

function App() {

  const [inputValue, setValue] = useState("wewe");                                                                                                                                                                                                                                                       
  const [tasks, setTasks] = useState([
    {id: 1, name: 'Проснуца', isReady: false},
    {id: 2, name: 'Покушац', isReady: false},
    {id: 3, name: 'Покакац', isReady: false},
    {id: 4, name: 'Погулац', isReady: false},
    {id: 5, name: 'Спац', isReady: false}
  ]);

  function deleteTask(id)
  {
      delete tasks[id];
  }
  const taskItems = tasks.map((task) =>
      <div>
          <div className={style.taskList}>
             <input type="checkbox" className={style.list_item} />
              <p className={style.taskName}>{task.name}</p>
          </div>
          <div className={style.taskButtons}>
              <button className={style.edit}>Edit</button>
              <button className={style.delete} onClick={()=> delete (task.id)}>Delete</button>
          </div>
      </div>
  );

  return (
        <div className= {style.Tasks}>
          <div className={style.Block}>
              <div className={style.addTask}>
                  <h1 className={style.title}>Tasks</h1>
                  <input type="text" className={style.newTask} onChange={(event)=>setValue(event.target.value)} value={inputValue}/>
                  <button className={style.addButton} onClick={() => setTasks([...tasks, {id: tasks.length+1, name: inputValue, isReady: false}])}>Add task</button>
              </div>
              <div className={style.taskFilter}>
                  <button className={style.Button}>all</button>
                  <button className={style.Button}>Active</button>
                  <button className={style.Button}>Completed</button>
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
