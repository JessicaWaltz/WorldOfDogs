import searchDogs from '../components/searchDogs.js';
import dogs from './dogs.js';
/**
 * Sets the initial state of the list of dogs as
 * the list of dogs in dogs.js
 */
const initialState = {
    allDogs: dogs,
    searchedDogs: []
};

/**
 * 
 * @param {*} theDogs 
 * @param {*} action 
 */
function removeDog(theDogs,action){
    /*var allDogDuplicate = state.allDogs.map((dog)=>{
                if(dog.name === action.payload.name && dog.owner === action.payload.owner){
                    return true;
                }
                return false;
            })*/
    var newDogs= theDogs.map((dog)=>{
        if(!(dog.name === action.payload.name && dog.owner === action.payload.owner)){
            return dog;
        }
        return "deleted";

    });
    var index = newDogs.indexOf("deleted");
    newDogs.splice(index,1);
    return newDogs;
}
function editDog(theDogs,action){
    var index=action.payload.index;
    var newDogs= theDogs.map((dog,i)=>{
        if(index === i){
            return {
                name: action.payload.name               || dog.name,
                breed: action.payload.breed             || dog.breed,
                owner: action.payload.owner             || dog.owner,
                size: action.payload.size               || dog.size,
                description: action.payload.description || dog.description
            };
        }
        return dog;
    });
    return newDogs;
}
/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
const store = (state =initialState,action)=>{
    console.log("a call was made");
    switch(action.type){
        case 'ADD_DOG':
            /*Because state.allDogs is an array of objects ,includes will not
            return true when trying to look for the same object*/ 
            var allDogDuplicate = state.allDogs.map((dog)=>{
                if(dog.name === action.payload.name && dog.owner === action.payload.owner){
                    return true;
                }
                return false;
            })
            var duplicateDogOwner = allDogDuplicate.includes(true);
            if(duplicateDogOwner){
                //duplicate entry found
                return {
                    ...state,
                    allDogs: state.allDogs
                }
            }
            return {
                ...state,
                allDogs: [...state.allDogs,action.payload]
            };
        case 'REMOVE_DOG':
            console.log("Remove was called");
            return{
                ...state,
                allDogs:removeDog(state.allDogs,action)
            };
        case 'EDIT_DOG':
            return{
                ...state,
                allDogs:editDog(state.allDogs,action)
            }
        case 'SEARCH_DOG':
            console.log("Search dog initiated");
            console.log(action.payload.result);
            return{
                ...state,
                searchedDogs: action.payload.result
            };
        default:
            console.log("I dont know what call though");
            return state;
    }
};
export default store;