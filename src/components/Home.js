
import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import Form from "./Form";
import FilterButton from "./FilterButton";
import ClearButton from './Clear'
import Todo from "./Todo";
import data from './data/data.json'









const data_file = data



const DATA = [
  { id: data_file[0].id, name: data_file[0].name, completed: data_file[0].completed },
  { id: data_file[1].id, name: data_file[1].name, completed: data_file[1].completed },
  { id: data_file[2].id, name: data_file[2].name, completed: data_file[2].completed }
];




const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);



function Home() {

  const [filter, setFilter] = useState('All');
  
  const [tasks, setTasks] = useState(DATA);


  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  useEffect(() => {
    const startData = localStorage.getItem('tasks');
    if (startData) {
      setTasks(JSON.parse(startData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))

  }, [tasks])



  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function clearTasks() {
    const remainingTasks = [];
    setTasks(remainingTasks);
  }


  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }


  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
    // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }
  
  const taskList = tasks
  .filter(task => FILTER_MAP[filter](task))
  .map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
));


  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const Clearbtn = 
    <ClearButton
    clearTasks={clearTasks}
    />
    


  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;
  return (
    <div className="todoapp stack-large">
      <Form addTask={addTask} />
      {Clearbtn}
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
      
    </div>
  );
}

export default Home;