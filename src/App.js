import AllPosts from "./pages/AllPosts";
//import SinglePost from "./pages/SinglePost";
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
    const url = "https://dusty-op-survey-app.herokuapp.com/surveys/"
    const [posts, setPosts] = useState([])

    const nullComments = {
      answer0: "",
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
      answer5: "",
    }

    //const [targetComments, setTargetComments] = useState(nullComments)

    /////////////////
    // Functions
    ////////////////
    const getComments = async() => {
      const response = await fetch(url)
      const data = await response.json()
      setPosts(data)
    }

    const addComments = async (newComments) => {

      getComments()
    }

    // const getTargetComments = (comments) => {
    //   setTargetComments(comments)
    //   props.history.push("/edit")
    // }
    // const updateComments = async (comments) => {
    //   const response = await fetch(url + comments.id, {
    //     method: "put",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(comments)
    //   })
    //   getComments()
    // }

    // const deleteComments = async (comments) => {
    //   const response = await fetch(url + comments.id + "/", {
    //     method: "delete"
    //   })
    //   getComments()
    // }

    ////////////////////
    // useEffects
    ////////////////////
    useEffect(() => {getComments()}, [])
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
          render={(rp) => <Form initialComments={nullComments} handleSubmit={addComments} buttonLabel="SUBMIT" {...rp}/>}
        />
        </Switch>
    </div>
  )
}

export default App;