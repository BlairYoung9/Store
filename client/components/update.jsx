import React, { useState } from 'react';
import axios from 'axios';


const BlogForm = (props) => {
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    const [text, setText] = useState("");
    const [textError, setTextError] = useState("");
    const [author, setAuthor] = useState("");
    const [authorError, setAuthorError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createBlog = (e) => {
        e.preventDefault();
        const newBlog = {title, text, author};
        axios.post("http://localhost:8001/api/blogs",newBlog)
            .then(res =>{
                console.log(res.data)
                console.log("SUCCESS")
            })
            .catch( err => {
                console.log("ERROR")
            })
    };

    const formMessage = () => {
        if( hasBeenSubmitted ) {
	    return "Thank you for submitting the form.";
	} else {
	    return "Welcome, please submit the form.";
	}
    };
    
    //Set Title
    const handleTitle= (e) => {
        setTitle(e.target.value);
        if(e.target.value.length < 1) {
            setTitleError("Title is required.");
        }else if(e.target.value.length < 2) {
            setTitleError("Title must be 2 characters or longer.");
        }else{
            setTitleError(""); 
        }
    }
    //Set Text
    const handleText= (e) => {
        setText(e.target.value);
        if(e.target.value.length < 1) {
            setTextError("Text is required.");
        }else if(e.target.value.length < 2) {
            setTextError("Text must be 2 characters or longer.");
        }else{
            setTextError(""); 
        }
    }
    
    //Set Author
    const handleAuthor= (e) => {
        setAuthor(e.target.value);
        if(e.target.value.length < 1) {
            setAuthorError("Author is required.");
        }else if(e.target.value.length < 2) {
            setAuthorError("Author must be 2 characters or longer.");
        }else{
            setAuthorError(""); 
        }
    }

    //Form
    return (
        <div className="App">
            <p>Blog Post</p>
            <form onSubmit={createBlog}>
                <h3>{formMessage()}</h3>
                <div>
                    <label>Title : </label>
                    <input type="text" onChange={handleTitle} value={title} />
                    <p>{titleError}</p>
                </div>                 
                <div>
                    <label>Text : </label>
                    <textarea value={text} onChange={handleText} />
                    <p>{textError}</p>
                </div>
                <div>
                    <label>Author : </label>
                    <input type="text" onChange={(e) => handleAuthor(e)} value = {author} />
                    <p>{authorError}</p>
                </div>
                <input type="submit" value="Create Blog" />
            </form>
        </div>
    );
};
export default BlogForm;