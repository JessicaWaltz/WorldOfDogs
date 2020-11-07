import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
function handleSubmit(dispatch){
    return(event) =>{
        event.preventDefault();
        const dogName = new FormData(event.currentTarget).get("name");
        const dogBreed = new FormData(event.currentTarget).get("breed");
        const dogOwner = new FormData(event.currentTarget).get("owner");
        const dogSize = new FormData(event.currentTarget).get("size");
        const dogDesc = new FormData(event.currentTarget).get("description");

        dispatch({
            type:"ADD_DOG",
            payload: {
                name:dogName,
                breed: dogBreed,
                owner: dogOwner,
                size: dogSize,
                description: dogDesc
            }
        })
    }
}

function Submit(props){
    console.log("Submit dispatch");
    console.log(props.dispatch);
    console.log("Submit Props");
    console.log(props);
    return(
        <form action="" onSubmit={handleSubmit(props.dispatch)}>               
        <input type="text" name="name"/>
        <input type="text" name="breed"/>
        <input type="text" name="owner"/>
        <input type="text" name="size"/>
        <input type="text" name="description"/>                          
        <input type="submit" value="Submit" />       
     </form>         
    )
}
Submit.propTypes = {
    dispatch: PropTypes.func,
}
export default connect(null)(Submit);
