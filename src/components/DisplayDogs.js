import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "../style/display.css";
import ReactPaginate from 'react-paginate';
function mapStateToProps(state) {
    return {
        allDogs: state.allDogs
    }
}

function displayAllDogs(allDogs,dispatch){
    return(
    <div className="dog-cards">
        {allDogs.map((dog,index) =>(
        <div className="card" id={index} key={index}>
            <div className="card-body">
                <h5 className="card-title">{dog.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Owner: {dog.owner}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Size: {dog.size}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Breed: {dog.breed}</h6>
                <p className="card-text">{dog.description}</p>
            </div>
        </div>
        ))}
    </div>
    )
}
function DisplayDogs(props){
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