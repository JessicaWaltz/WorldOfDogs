import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import "../style/randomDog.css";
function mapStateToProps(state) {
    return {
        allDogs: state.allDogs
    }
}
class RandomDog extends Component{
    constructor(props) {
        super(props);
        this.state = {
            displayRandom: false,
            numOfDogs: Object.keys(this.props.allDogs).length, 
            name:"",
            owner:"",
            breed:"",
            size:"",
            description:""
        }
    }
    handleRandomClick(allDogs) {
        var random = Math.floor((1 + Math.random() * (this.state.numOfDogs - 1))%this.state.numOfDogs);
        var dog = allDogs[random];
        this.setState({
            displayRandom: true,
            name: dog.name,
            owner: dog.owner,
            breed: dog.breed,
            size: dog.size,
            description: dog.description
        })
    }
    
    render(){
        
        return(
            <div className="random-dog">
                <div className="random-dog-info c1">
                    <div className="c2">
                    <h5 className="random-dog-title">Get a random dog:</h5>
                        <div className="c3">
                        <Button className="btn btn-secondary c4" onClick={()=> {this.handleRandomClick(this.props.allDogs)}}>Random</Button>
                    </div></div>
                </div>

            
                {
                this.state.displayRandom?
                    <div className="card random-card">
                        <div className="card-body random-card-body">
                            <h5 className="card-title">{this.state.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Owner: {this.state.owner}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Size: {this.state.size}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Breed: {this.state.breed}</h6>
                            <p className="card-text">{this.state.description}</p>
                        </div>
                    </div>
                 :
                    <div></div>
            }
            

            
        </div>

        )
    }
}
RandomDog.propTypes = {
    dispatch: PropTypes.func,
}
export default  connect(mapStateToProps)(RandomDog);
/*
 <div className="card" id={index} key={index}>
            <div className="card-body">
                <h5 className="card-title">{dog.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Owner: {dog.owner}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Size: {dog.size}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Breed: {dog.breed}</h6>
                <p className="card-text">{dog.description}</p>
            </div>
        </div>
 */