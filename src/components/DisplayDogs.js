import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types';
function mapStateToProps(state) {
    return {
        allDogs: state.allDogs
    }
}

function displayAllDogs(allDogs,dispatch){    
    return (
    <div>
        <ol>
            {allDogs.map(dog =>(
            <li key={dog.name+"-"+dog.owner}
                id={dog.name+"-"+dog.owner}>
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
// onClick={() => {
function DisplayDogs(props){
        console.log("display props");
        console.log(props)
        return( 
        <div>
            dogs will be here:
            {displayAllDogs(props.allDogs,props.dispatch)}
        </div>
        )
    
}
DisplayDogs.propTypes = {
    handleRemove: PropTypes.func,
}
export default connect(mapStateToProps)(DisplayDogs)