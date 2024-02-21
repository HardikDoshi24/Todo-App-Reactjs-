import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import About from "./Components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  let initTodo;
  if(localStorage.getItem('todos') === null){
    initTodo = [];    
  }
  else{
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }


  const onDelete = (todo)=>{
    console.log("I am Delete of todos",todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  
  const addTodo = (title, desc)=>{
    let sno;
    console.log("I am adding Todo",title,desc);
    if(todos.length === 0){
      sno = 0;
    }
    else{
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno : sno,
      title : title,
      desc : desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  
  const [todos, setTodos] = useState(initTodo);
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="bg-lavenderblush">
      <Router>
        <Header title="Todo List"/>
        
        <Routes>
          <Route path="/" element = {
              <>
              <AddTodo addTodo = {addTodo}/>
              <Todos todo = {todos} onDelete = {onDelete}/>
              </>
          }/>
          <Route path="/about" element = {<About/>}/>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;