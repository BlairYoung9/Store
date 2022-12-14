import React, { useState } from 'react';
import axios from 'axios';


const ItemForm = (props) => {
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    const [price, setPrice] = useState("");
    const [priceError, setPriceError] = useState("");
    const [description, setDescription] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createItem = (e) => {
        e.preventDefault();
        const newItem = { title, price, description };
        axios.post("http://localhost:8000/api/items", newItem )
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

    //Create Title
    const handleTitle= (e) => {
        setTitle(e.target.value);
        if(e.target.value.length < 1) {
            setTitleError("Title is required.");
        } else if(e.target.value.length < 2) {
            setTitleError("Title must be 2 characters or longer.");
        }else{
            setTitleError(""); 
        }
    }
    //Create Price
    const handlePrice= (e) => {
        setPrice(e.target.value);
        if(e.target.value.length < 1) {
            setPriceError("Price is required.");
        } else if(e.target.value.length < 2) {
            setPriceError("Price must be 2 characters or longer.");
        }else{
            setPriceError(""); 
        }
    }
    //Create Description
    const handleDescription= (e) => {
        setDescription(e.target.value);
        if(e.target.value.length < 1) {
            setDescriptionError("Description is required.");
        } else if(e.target.value.length < 5) {
            setDescriptionError("Description must be 5 characters or longer.");
        }else{
            setDescriptionError(""); 
        }
    }

    return (
        <div className="App">
            <p>Here are all the items you can buy!</p>
            <form onSubmit={createItem}>
                <h3>{formMessage()}</h3>
                <div>
                    <label>Title : </label>
                    <input type="text" onChange={handleTitle} value={title} />
                    <p>{titleError}</p>
                </div>                 
                <div>
                    <label>Price : </label>
                    <input type="text" onChange={handlePrice} value={price} />
                    <p>{priceError}</p>
                </div>
                
                <div>
                    <label>Desc. : </label>
                    <input type="text" onChange={(e) => handleDescription(e)} value={description} />
                    <p>{descriptionError}</p>
                </div>
                
                <input type="submit" value="Create Item" />
            </form>
        </div>
    );
};

export default ItemForm;