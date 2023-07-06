import React, {useState} from "react";
import "./Form.css";
// import { Link } from "react-router-dom";

const Form = ({initialTodo, history, handleSubmit, buttonLabel}) => {
  const [formData, setFormData] = useState(initialTodo)
  
    const input = {
        background: "#F7F7F7",
        width: "50%",
        border: "black",
        borderBottom: "white",
        font: "black",
    }

  // Functions
  const handleChange = (event) => {
    //const newState = {...formData}
    //newState[event.target.name] = event.target.value
    //setFormData(newState)
    
    setFormData({...formData, [event.target.name]: event.target.value })
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    handleSubmit(formData)
    history.push("/")
  }

  return (

    <form onSubmit={handleSubmission}>
        <div class="column">
          <div class="text-center">
            <label for="answer0">How confident do you feel Dusty will perform as expected on any given day?</label>
            <input
                style={input}
                type="text"
                onChange={handleChange}
                value={formData.answer0}
                name="answer0"
            />
            <label for="answer1">How confident are you that Dusty will be precise?</label>
            <input
                style={input}
                type="text"
                onChange={handleChange}
                value={formData.answer1}
                name="answer1"
            />
            <label for="answer2">How likely are you to use Dusty on your future projects?</label>
            <input
                style={input}
                type="text"
                onChange={handleChange}
                value={formData.answer2}
                name="answer2"
            />
            <label for="answer3">What alternatives have you considered prior to Dusty</label>
            <input
                style={input}
                type="text"
                onChange={handleChange}
                value={formData.answer3}
                name="answer3"
            />
            <label for="answer4">Does Dusty help you achieve your layout goals?</label>
            <input
                style={input}
                type="text"
                onChange={handleChange}
                value={formData.answer4}
                name="answer4"
            />
            <label for="answer5">One word to describe Dusty Robotics</label>
            <input
                style={input}
                type="text"
                onChange={handleChange}
                value={formData.answer5}
                name="answer5"
            />
          </div>
        </div>
      <div class="text-center">
        <input type="submit" value={buttonLabel} />
      </div>
    </form>
  );
};

export default Form;