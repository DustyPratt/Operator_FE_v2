
import React from "react";
//import {Link} from "react-router-dom";

const SinglePost = ({posts, match, edit, history}) => {
  const id = parseInt(match.params.id)
  const post = posts.find((post) => {
    return post.id === id
  })

  //////////////////////
  // Styles
  //////////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "50%",
    margin: "30px auto"
  }

  return <div style={div}>
    <h1>{post.subject}</h1>
    <h2>{post.details}</h2>
  </div>;
};

export default SinglePost;