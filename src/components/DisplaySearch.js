import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from "react-bootstrap";
//import linkState from 'react-link-state';
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
            owner:""
        }
    }
    
    handleEditClcik(dog) {
        this.setState({
            displayEdit: true,
            name: dog.name,
            owner: dog.owner
        })
    }
    
    displaySearchedDogs(searchedDogs,dispatch){  
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
                            name: dog.name,
                            breed: dog.breed,
                            owner: dog.owner,
                            size: dog.size,
                            description: dog.description
                    }})}>remove</Button>
                    <Button className="edit-button button"
                    onClick={()=>{this.handleEditClcik(dog)}}>Edit</Button>
                    {}
                </li>
                ))}
            </ol>
        </div>
        )
        }
        return(<div></div>)
    }
    /** <form>
          <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
          <button type="button" onClick={this.handleLogin}>Login</button>
        </form>); 
        
        dispatch({
                type:"EDIT_DOGS",
                payload:{
                    name: "Larry",
                    breed: "Doodle",
                    owner: "John",
                    size: "",
                    description: "",
                    oldName: this.state.name,
                    oldOwner: this.state.owner
                }
            })
        
        */
    handleSubmitEdit(dispatch){
        return(event) =>{
            event.preventDefault();
            const dogName = new FormData(event.currentTarget).get("name");
            const dogBreed = new FormData(event.currentTarget).get("breed");
            const dogOwner = new FormData(event.currentTarget).get("owner");
            const dogSize = new FormData(event.currentTarget).get("size");
            const dogDesc = new FormData(event.currentTarget).get("description");
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
            <form action="" onSubmit={this.handleSubmitEdit(dispatch)}>               
                <input type="text" name="name"/>
                <input type="text" name="breed"/>
                <input type="text" name="owner"/>
                <input type="text" name="size"/>
                <input type="text" name="description"/>                          
                <input type="submit" value="Submit" />       
            </form>
        )
        /**<Button className="button" 
                    onClick={()=> dispatch({
                        type:"EDIT_DOG",
                        payload: {
                            name: dog.name,
                            breed: dog.breed,
                            owner: dog.owner,
                            size: dog.size,
                            description: dog.description
                    }})}>Submit</Button> */
    }
    render(){
        console.log("this.props is:");
        console.log(this.props);
        console.log("this.state is:");
        console.log(this.state);
        return(
        <div>
            dogs will be here:
            {this.displaySearchedDogs(this.props.searchedDogs,this.props.dispatch)}

            {
              this.state.displayEdit?
              this.editDog(this.props.dispatch)
              :
              <div>Nope!</div>
            }
        </div>
        )
    }
}
DisplaySearch.propTypes = {
    handleRemove: PropTypes.func,
}
export default connect(mapStateToProps)(DisplaySearch)