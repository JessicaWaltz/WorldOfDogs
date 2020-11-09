import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from "react-bootstrap";
import "../style/display.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';
function mapStateToProps(state) {
    return {
        allDogs: state.allDogs,
        searchedDogs: state.searchedDogs
    }
}
class DisplaySearch extends Component{
    constructor(props) {
        super(props);
        this.state = {
            displayEdit: false,
            name:"",
            owner:"",
            breed:"",
            size:"",
            description:""
        }
    }
    handleEditClick(dog) {
        this.setState({
            displayEdit: true,
            name: dog.name,
            owner: dog.owner,
            breed: dog.breed,
            size: dog.size,
            description: dog.description
        })
    }
    
    displaySearchedDogs(searchedDogs,dispatch){  
        if(Object.keys(searchedDogs).length){
            return (
            <div className="dog-cards">
                {searchedDogs.map((dog,index) =>(
                    <div className="card" id={index}>
                        <div className="card-body">
                            <h5 className="card-title">{dog.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Owner: {dog.owner}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Size: {dog.size}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Breed: {dog.breed}</h6>
                            <p className="card-text">{dog.description}</p>
                            <Button className="btn btn-primary"onClick={()=> {dispatch({
                                type:"REMOVE_DOG",
                                payload: {
                                    name: dog.name,
                                    breed: dog.breed,
                                    owner: dog.owner,
                                    size: dog.size,
                                    description: dog.description
                                }});
                                this.setState({displayEdit: false})}}>
                                <FontAwesomeIcon icon={faTrash} />
                            </Button>
                            <Button className="btn btn-primary"onClick={()=>{this.handleEditClick(dog)}}><FontAwesomeIcon icon={faEdit} /></Button>
                        </div>
                    </div>
                ))}
            </div>)
        }
        return(<div></div>)
    }
    handleSubmitEdit(dispatch){
        return(event) =>{
            event.preventDefault();
            
            const dogName = new FormData(event.currentTarget).get("name");
            const dogBreed = new FormData(event.currentTarget).get("breed");
            const dogOwner = new FormData(event.currentTarget).get("owner");
            const dogSize = new FormData(event.currentTarget).get("size");
            const dogDesc = new FormData(event.currentTarget).get("description");
            console.log([dogName,dogBreed,dogOwner,dogSize,dogDesc]);
            this.setState({
                displayEdit: false
               })
            dispatch({
                type:"EDIT_DOG",
                payload: {
                    name:dogName,
                    breed: dogBreed,
                    owner: dogOwner,
                    size: dogSize,
                    description: dogDesc,
                    oldName: this.state.name,
                    oldOwner: this.state.owner
                }
            })
        }
    }
    editDog(dispatch){
        return(
            <div className="edit-dog-info">
            <h4>Edit dog</h4>
            <form className="edit-dog-form" action="" onSubmit={this.handleSubmitEdit(dispatch)}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="dogName">Dogs Name:</label>
                        <input type="text" className="form-control" id="dogName" placeholder={this.state.name} name="name"></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="dogBreed">Dog Breed:</label>
                        <input type="text" className="form-control" id="dogBreed" placeholder={this.state.breed} name="breed"></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label for="dogOwner">Owner</label>
                        <input type="text" className="form-control" id="owner" placeholder={this.state.owner} name="owner"></input>
                    </div>
                
                    <div className="form-group col-md-2">
                        <label for="dogSize">Size:</label>
                        <select id="inputState" className="form-control" name="size" value={this.state.size}>
                            <option value="">select</option>
                            <option value="XS">XS</option>
                            <option value="SM">SM</option>
                            <option value="MD">MD</option>
                            <option value="LG">LG</option>
                            <option value="XL">XL</option>
                        </select>
                    </div>
                    <div className="form-group  col-md-6">
                        <label for="dogDescription">Description</label>
                        <input type="text" className="form-control" id="dogDescription" placeholder={this.state.description} name="description"></input>
                    </div>
                </div>
                <input type="submit" value="Submit" />
            </form>
            </div>
        )
    }
    render(){
        return(
        <div>
            {
              this.state.displayEdit?
              <div className="edit-dog">
              {this.editDog(this.props.dispatch)}
              </div>
              :
              <div></div>
            }
            {this.displaySearchedDogs(this.props.searchedDogs,this.props.dispatch)}

            
        </div>
        )
    }
}
DisplaySearch.propTypes = {
    handleRemove: PropTypes.func,
}
export default connect(mapStateToProps)(DisplaySearch)