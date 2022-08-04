import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

//display all the products
const All = (props) => {
    const [items, setItems] = useState([])

    useEffect( () => {
        getItemsFromDB()
    }, [])

    const getItemsFromDB = () => {
        axios.get("http://localhost:8001/api/items")
        .then(res => {
            console.log(res.data);
            setItems(res.data.items);
        })
        .catch (err => console.log(err))
    }
    
    const deleteItem = (deleteId) => {
        axios.delete("http://localhost:8001/api/items/" + deleteId)
            .then( res => {
                console.log(res.data);
                console.log("SUCCESS DELETED!");

                // remove from DOM after delete success
                setItems(items.filter((item) => item._id !== deleteId))
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h3> all posts!</h3>
            {
                items.map((item,idx) => {
                    return(
                        <div key = {item._id}>
                            <h3><Link to={"/items/" + item._id}>{item.title}</Link></h3>
                            <button onClick={ () => deleteItem(item._id)}>Delete</button>    
                        </div>
                    )
                })
            }
        </div>
    )
};
export default All;