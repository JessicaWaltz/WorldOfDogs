import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import "../style/searchDogs.css";
function mapStateToProps(state) {
    return {
        allDogs: state.allDogs,
        searchedDogs: state.searchedDogs
    }
}

function searchName(props,event){
    event.preventDefault();
    //const dogSearch = new FormData(event.currentTarget).get("searching");

    const dogName = new FormData(event.currentTarget).get("name");
    const dogBreed = new FormData(event.currentTarget).get("breed");
    const dogOwner = new FormData(event.currentTarget).get("owner");
    const dogSize = new FormData(event.currentTarget).get("size");
    const dogDesc = new FormData(event.currentTarget).get("description");
    document.getElementById("search-dog-form").reset();
    var result = props.allDogs.map((dog) =>{
        if( (dogName === dog.name   || !dogName )       &&
            (dogBreed === dog.breed || !dogBreed)       &&
            (dogSize === dog.size   || !dogSize)        &&
            (dogOwner === dog.owner || !dogOwner)       &&
            (dogDesc === dog.description || !dogDesc)   &&
            (dogName || dogBreed || dogSize || dogOwner || dogDesc)){
            return dog;
        }
        else{
            return "nothing";
        }
    })
    result = result.filter(data => data !== "nothing");
    return(
    props.dispatch({
        type:"SEARCH_DOG",
        payload: {
            result
        }
    })
    )
    
}
function SearchDog(props){
    return(
        <div className="search-dog">
            <div className="search-dog-info">
                <h6>Search for a dog:</h6>
                <form action="" id="search-dog-form"onSubmit={(event)=>{searchName(props,event)}}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="dogName">Dogs Name:</label>
                            <input type="text" className="form-control" id="dogName" placeholder="Dog name" name="name"></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="dogBreed">Dog Breed:</label>
                            <input type="text" className="form-control" id="dogBreed" placeholder="Breed" name="breed"></input>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label for="dogOwner">Owner</label>
                            <input type="text" className="form-control" id="owner" placeholder="Owner" name="owner"></input>
                        </div>
                
                        <div className="form-group col-md-2">
                            <label for="dogSize">Size:</label>
                            <select id="inputState" className="form-control" name="size">
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
                            <input type="text" className="form-control" id="dogDescription" placeholder="desctiption" name="description"></input>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-11"></div>
                        <input type="submit" className="btn btn-secondary form-group col-md-1" value="Search" />
                    </div>
                </form>
            </div> 
        </div>        
    )
}


SearchDog.propTypes = {
    dispatch: PropTypes.func,
}
export default connect(mapStateToProps)(SearchDog);
