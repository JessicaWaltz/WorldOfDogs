import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import "../style/addDog.css";
function handleSubmit(dispatch){
    return(event) =>{
        event.preventDefault();
        const dogName = new FormData(event.currentTarget).get("name");
        const dogBreed = new FormData(event.currentTarget).get("breed");
        const dogOwner = new FormData(event.currentTarget).get("owner");
        const dogSize = new FormData(event.currentTarget).get("size");
        const dogDesc = new FormData(event.currentTarget).get("description");
        //if all info was submited clear it
        if(dogName && dogBreed && dogOwner && dogSize && dogDesc){
            document.getElementById("add-dog-form").reset();
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
}

function Submit(props){
    return(
        <div className="add-dog">
        <div className="add-dog-info">
        <h4>Add a new dog:</h4>
        <form action="" id="add-dog-form"onSubmit={handleSubmit(props.dispatch)} >
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="dogName">Dogs Name:</label>
                        <input type="text" className="form-control" id="dogName" placeholder="Dog name" name="name" ></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="dogBreed">Dog Breed:</label>
                        <input type="text" className="form-control" id="dogBreed" placeholder="Breed" name="breed" ></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label for="dogOwner">Owner</label>
                        <input type="text" className="form-control" id="owner" placeholder="Owner" name="owner" ></input>
                    </div>
                
                    <div className="form-group col-md-2">
                        <label for="dogSize">Size:</label>
                        <select id="inputState" className="form-control" name="size" >
                            <option selected value="">select</option>
                            <option>XS</option>
                            <option>SM</option>
                            <option>MD</option>
                            <option>LG</option>
                            <option>XL</option>
                        </select>
                    </div>
                    <div className="form-group  col-md-6">
                        <label for="dogDescription">Description</label>
                        <input type="text" className="form-control" id="dogDescription" placeholder="desctiption" name="description" ></input>
                    </div>
                </div>
                <input type="submit" value="Submit" />
            </form>
            </div>
        </div>      
    )
}
Submit.propTypes = {
    dispatch: PropTypes.func,
}
export default connect(null)(Submit);
