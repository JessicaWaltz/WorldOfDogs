import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "../style/sortDogs.css";
function mapStateToProps(state) {
    return {
        allDogs: state.allDogs
    }
}
class SortDogs extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sortingBy: "",
            sortedDogs:[]
        }
    }
    returnSortedDogs(sort,allDogs){
        var newDogs =[];
        var d1Size=0;
        var d2Size=0;
        if(sort === "name" || sort === "owner" || sort === "breed" || sort === "description"){
            newDogs = allDogs.sort(function(dog1,dog2){
                if (dog1[sort] > dog2[sort]){ 
                    return 1;
                }
                else{
                    return -1;
                } 
            });
        } 
        /*else if(sort==="name"){
            newDogs = allDogs.sort(function(dog1,dog2){
                if (dog1.name > dog2.name){ 
                    return 1;
                }
                else{
                    return -1;
                } 
            });
        }
        else if(sort === "owner"){
            newDogs = allDogs.sort(function(dog1,dog2){
                if (dog1.owner > dog2.owner){ 
                    return 1;
                }
                else{
                    return -1;
                } 
            });
        }
        else if(sort === "breed"){
            newDogs = allDogs.sort(function(dog1,dog2){
                if (dog1.breed > dog2.breed){ 
                    return 1;
                }
                else{
                    return -1;
                } 
            });
        }
        else if(sort === "description"){
            newDogs = allDogs.sort(function(dog1,dog2){
                if (dog1.description > dog2.description){ 
                    return 1;
                }
                else{
                    return -1;
                } 
            });
        }*/
        else if(sort === "size"){
            newDogs = allDogs.sort(function(dog1,dog2){
                if(dog1.size==="XS"){
                    d1Size=0;
                }
                else if(dog1.size==="SM"){
                    d1Size=1;
                }
                else if(dog1.size==="MD"){
                    d1Size=2;
                }
                else if(dog1.size==="LG"){
                    d1Size=3;
                }
                else if(dog1.size==="XL"){
                    d1Size=4;
                }



                if(dog2.size==="XS"){
                    d2Size=0;
                }
                else if(dog2.size==="SM"){
                    d2Size=1;
                }
                else if(dog2.size==="MD"){
                    d2Size=2;
                }
                else if(dog2.size==="LG"){
                    d2Size=3;
                }
                else if(dog2.size==="XL"){
                    d2Size=4;
                }




                if (d1Size > d2Size){ 
                    return 1;
                }
                else{
                    return -1;
                } 
            });
        }
        return(
            <div className="dog-cards">
                {newDogs.map((dog,index) =>(
                    <div className="card" id={index}>
                        <div className="card-body">
                            <h5 className="card-title">{dog.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Owner: {dog.owner}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Size: {dog.size}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Breed: {dog.breed}</h6>
                            <p className="card-text card-description">{dog.description}</p>
                            <div className="button-div">
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    sortByOptions(){
        return(
            <form className="sort-dog-form">
                <div className="sort-dog-form-info">
                    <h4>Sorting Options</h4>
                <label htmlFor="name">Name: </label>
                <input type="radio" name="search" value="name" id="name" onClick={()=>{this.setState({sortingBy: "name"})}}></input>
                <br></br>
                <label htmlFor="breed">Breed: </label>
                <input type="radio" name="search" value="breed" id="breed" onClick={()=>{this.setState({sortingBy: "breed"})}}></input>
                <br></br>
                <label htmlFor="owner">Owner: </label>
                <input type="radio" name="search" value="owner" id="owner" onClick={()=>{this.setState({sortingBy: "owner"})}}></input>
                <br></br>
                <label htmlFor="size">Size: </label>
                <input type="radio" name="search" value="size" id="size" onClick={()=>{this.setState({sortingBy: "size"})}}></input>
                <br></br>
                <label htmlFor="description">Description: </label>
                <input type="radio" name="search" value="description" id="description" onClick={()=>{this.setState({sortingBy: "description"})}}></input>
                </div>
            </form>
        )
    }
    render(){
        return(
            <div>
                {this.sortByOptions()}

                {this.state.sortingBy===""?
                <div></div>
                :
                <div>
                {this.returnSortedDogs(this.state.sortingBy, this.props.allDogs)}
                </div>
                }
            </div>
        )
    }
}
SortDogs.propTypes = {
    dispatch: PropTypes.func,
}
export default connect(mapStateToProps)(SortDogs);