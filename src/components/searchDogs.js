import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        allDogs: state.allDogs,
        searchedDogs: state.searchedDogs
    }
}

function searchName(props,event){
    event.preventDefault();
    const dogSearch = new FormData(event.currentTarget).get("searching");
    var result = props.allDogs.map((dog,index) =>{
        if((dogSearch === dog.name ||dogSearch === dog.breed || dogSearch === dog.size || dogSearch === dog.owner || dogSearch === dog.description)){
            console.log('we found a match!');
            console.log(dog);
            return dog;
        }
        else{
            return "nothing";
        }
    })
    result = result.filter(data => data !== "nothing");
    console.log(result);
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
        <div>
            Search for a dog:
        <form action="" onSubmit={(event)=>{searchName(props,event)}}>               
            <input type="text" name="searching"/>         
            <input type="submit" value="Submit" />       
        </form> 
        </div>        
    )
}
SearchDog.propTypes = {
    dispatch: PropTypes.func,
}
export default connect(mapStateToProps)(SearchDog);
