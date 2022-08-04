import React, {useState, useEffect} from 'react';
import {useParams,Link} from 'react-router-dom';
import axios from 'axios';



const ViewOne = (props) =>{
    const [blogs, setBlogs] = useState([])
    const { id } = useParams();
    const [thisBlog, setThisBlog] = useState({});
    useEffect( () => {
        axios.get("http://localhost:8001/api/blogs/"+ id)
            .then(res => {
                console.log(res.data);
                setThisBlog(res.data);
            })
            .catch(err => console.log(err))

    }, [])
    const deleteBlog = (deleteId) => {
        // console.log(deleteId);
        axios.delete("http://localhost:8001/api/blogs/" + deleteId)
            .then( res => {
                console.log(res.data);
                console.log("SUCCESS DELETE!");

                // remove from DOM after delete success
                setBlogs(blogs.filter( (blog) => blog._id !== deleteId))
            })
            .catch(err => console.log(err))
        }
    
    return <div>
        <h2>Title : {thisBlog.title}</h2>
        <h2>Text : {thisBlog.text}</h2>
        <h2>Author : {thisBlog.author}</h2>
        <Link to={"/blogs/update/" +id}>Edit Post</Link>
        <h2></h2>
        <button onClick={ () => deleteBlog(id)}>delete</button>
    </div>
}
export default ViewOne;