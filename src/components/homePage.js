import '../style/HomePage.css';
import React, { Component } from 'react';
import bootstrap from "react-bootstrap";
import {withRouter} from 'react-router-dom';
/**
 * Layout of the home page. Home page is displayed 
 */
class HomePage extends Component{
    goToPath(thePath) {
        this.props.history.push(thePath);
      }
    render(){
        return(
        <div className="home-center">
            <div className="home-dog-list jumbotron jumbotron-fluid"onClick={()=>{this.goToPath('/view')}}>
                <div className="container home-dog-list-container">
                    <h1 className="display-4">VIEW DOGS</h1>
                </div>
            </div>
            <div className="home-dog-add jumbotron jumbotron-fluid" onClick={()=>{this.goToPath('/add')}}>
            <div className="container home-dog-add-container">
                    <h1 className="display-4">ADD A DOG</h1>
                </div>
            </div>
            <div className="home-dog-edit jumbotron jumbotron-fluid"onClick={()=>{this.goToPath('/search')}}>
            <div className="container home-dog-edit-container">
                    <h1 className="display-4">SEARCH/EDIT DOGS</h1>
                </div>
            </div>
            <div className="home-dog-random jumbotron jumbotron-fluid"onClick={()=>{this.goToPath('/random')}}>
            <div className="container home-dog-random-container">
                    <h1 className="display-4">RANDOM</h1>
                </div>
            </div>
        </div>
        )
    }
}
export default withRouter(HomePage);