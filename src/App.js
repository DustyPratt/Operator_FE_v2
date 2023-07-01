import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";
import React, {useState, useEffect} from "react";
import {Route, Switch, Link} from "react-router-dom";
// // import { style } from '../craco.config';
import './App.css';
function App(props) {
    ///////////////////
    // Style Objects
    ///////////////////

    const button = {
      backgroundColor: "black",
      display: "block",
      margin: "auto",
      textColor: "white",
    }

    //////////////////////
    // State & Other Variables
    ///////////////////////
    // API URL
    const url = "https://dusty-op-survey-app.herokuapp.com/todos/";

    const [posts, setPosts] = useState([]);

    const nullTodo = {
      answer0: "",
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
      answer5: "",
    }

    const [targetTodo, setTargetTodo] = useState(nullTodo)

    /////////////////
    // Functions
    ////////////////
    const getTodos = async() => {
      const response = await fetch(url)
      const data = await response.json()
      setPosts(data)
    }


    const getTargetTodo = (todo) => {
       setTargetTodo(todo)
       props.history.push("/edit")
    }

    const addTodos = async (newTodo) => {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
      })
      //getTodos()
    }

    //const deleteTodo = async (todos) => {
      // const response = await fetch(url + todos.id + "/", {
        // method: "delete"
       //})
       //getTodos()
    //}

    ////////////////////
    // useEffects
    ////////////////////
    useEffect(() => {getTodos()}, [])
    /////////////////
    // Returned JSX
    /////////////////

  return (
    <div className="App">
      <div className="border-1 border-yellow">
        <h1>Dusty Robotics</h1>
        <h3>Mountain View, CA</h3>
      </div>

      <Link to="/new"><button style={button}>Click here to let us know how we are doing!</button></Link>
        <Switch>
        <Route
          exact
          path="/"
          render={(rp) => <AllPosts posts={posts} {...rp}/>}
        />
        <Route
          path="/new"
          render={(rp) => <Form initialTodo={nullTodo} handleSubmit={addTodos} buttonLabel="SUBMIT" {...rp}/>}
        />
        </Switch>
    </div>
  )
}

export default App;