import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from "react-bootstrap";

function mapStateToProps(state) {
    return {
        allDogs: state.allDogs,
        searchedDogs: state.searchedDogs
    }
}
function displaySearchedDogs(searchedDogs,dispatch){  
    console.log("time to display a dog! The dog we have is: ");
    console.log(searchedDogs);  
    console.log(typeof searchedDogs);
    if(Object.keys(searchedDogs).length){
    return (
    <div>
        <ol>
            {searchedDogs.map((dog,index) =>(
            <li key={index}
                id={index}>
                {dog.name} is a{dog.size} {dog.breed}. their owner {dog.owner} would describe them as {dog.description}
                <Button className="button" 
                onClick={()=> dispatch({
                    type:"REMOVE_DOG",
                    payload: {
                        name:dog.name,
                        breed: dog.breed,
                        owner: dog.owner,
                        size: dog.size,
                        description: dog.description
                }})}>remove</Button>
            </li>
            ))}
        </ol>
    </div>
    )
    }
    return(<div></div>)
}
// onClick={() => {
function DisplaySearch(props){
        return( 
        <div>
            dogs will be here:
            {displaySearchedDogs(props.searchedDogs,props.dispatch)}
        </div>
        )
    
}
DisplaySearch.propTypes = {
    handleRemove: PropTypes.func,
}
export default connect(mapStateToProps)(DisplaySearch)