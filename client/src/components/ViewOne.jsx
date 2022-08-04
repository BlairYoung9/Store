import React, {useState, useEffect} from 'react';
import {useParams,Link} from 'react-router-dom';
import axios from 'axios';



const ViewOne = (props) =>{
    const [items, setItems] = useState([])
    const { id } = useParams();
    const [thisItem, setThisItem] = useState({});
    useEffect( () => {
        axios.get("http://localhost:8000/api/items/"+ id)
            .then(res => {
                console.log(res.data);
                setThisItem(res.data);
            })
            .catch(err => console.log(err))

    }, [])
    const deleteItem = (deleteId) => {
        // console.log(deleteId);
        axios.delete("http://localhost:8000/api/items/" + deleteId)
            .then( res => {
                console.log(res.data);
                console.log("SUCCESS DELETE!");

                // remove from DOM after delete success
                setItems(items.filter( (item) => item._id !== deleteId))
            })
            .catch(err => console.log(err))
        }
    
    return <div>
        <h2>View One</h2>
        <h2>Title : {thisItem.title}</h2>
        <h2>Price : {thisItem.price}</h2>
        <h2>Desc. :{thisItem.description}</h2>
        <Link to={"/items/update/" +id}>edit</Link>
        <h2></h2>
        <button onClick={ () => deleteItem(id)}>Delete Item</button>
    </div>
}
export default ViewOne;