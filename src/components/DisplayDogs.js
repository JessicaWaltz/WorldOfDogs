import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from "react-bootstrap";
function mapStateToProps(state) {
    return {
        allDogs: state.allDogs
    }
}
function handleRemove(dog,allDogs){
    console.log("remove");
    console.log(dog);
    return(event) =>{
        event.preventDefault();
    }

}
function displayAllDogs(allDogs){
    console.log("The dogs are: ");
    console.log(allDogs);
    console.log(typeof allDogs);
    
    return (
    <div>
        <ol>
            {allDogs.map(dog =>(
            <li key={dog.name}
                id={dog.name}>
                {dog.name} is a{dog.size} {dog.breed}. their owner {dog.owner} would describe them as {dog.description}
                <Button className="button" onClick={()=> {handleRemove(dog,allDogs)}}>remove</Button>
            </li>
            ))}
        </ol>
    </div>
    )
}
// onClick={() => {
class DisplayDogs extends Component{
    render(){
        return( 
        <div>
            dogs will be here:
            {displayAllDogs(this.props.allDogs)}
        </div>
        )
    }
}
export default connect(mapStateToProps)(DisplayDogs)