
import dogs from './dogs.js';
/**
 * Sets the initial state of the list of dogs as
 * the list of dogs in dogs.js
 */
const initialState = {
    allDogs: dogs,
    searchedDogs: []
};

function removeDog(allDogs,action){
    var newDogs= allDogs.map((dog)=>{
        if(!(dog.name === action.payload.name && dog.owner === action.payload.owner)){
            return dog;
        }
        return "deleted";

    });
    var index = newDogs.indexOf("deleted");
    newDogs.splice(index,1);
    return newDogs;
}
function editDog(allDogs,action){
    var repeats = 0;
    var newDogs= allDogs.map((dog,i)=>{
        if(action.payload.oldName === dog.name && action.payload.oldOwner === dog.owner){
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
        //check to make sure the edit doesn't break the name-owner rule
    newDogs.map((dog,i)=>{
        if(action.payload.name === dog.name && action.payload.owner === dog.owner){
            console.log("hi");
            repeats++;
        }
     })
     console.log(repeats);
    if (repeats===2){return allDogs;}
    else{return newDogs;}
}
function isDuplicate(allDogs,action){
     /*Because state.allDogs is an array of objects ,includes will not
            return true when trying to look for the same object*/ 
    var allDogDuplicate = allDogs.map((dog)=>{
        if(dog.name === action.payload.name && dog.owner === action.payload.owner){
            return true;
        }
        return false;
    })
    return allDogDuplicate.includes(true);
}
const store = (state =initialState,action)=>{
    console.log("a call was made");
    switch(action.type){
        case 'ADD_DOG':
            if(isDuplicate(state.allDogs,action)){
                //duplicate entry found do not add
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
                allDogs:removeDog(state.allDogs,action),
                searchedDogs:removeDog(state.searchedDogs,action)
            };
        case 'EDIT_DOG':
            console.log("this happened right?");
            return{
                ...state,
                allDogs:editDog(state.allDogs,action),
                searchedDogs: []
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