import dogs from './dogs.js';
/**
 * Sets the initial state of the list of dogs as
 * the list of dogs in dogs.js
 */
const initialState = {
    allDogs: dogs
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
    console.log("newDogs is");
    console.log(newDogs);
    var index = newDogs.indexOf("deleted");
    console.log(index);
    newDogs.splice(index,1);
    console.log(newDogs);
    return newDogs;
}
function editDog(theDogs,action){
    return theDogs;
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
                    allDogs: state.allDogs
                }
            }
            return {
                allDogs: [...state.allDogs,action.payload]
            };
        case 'REMOVE_DOG':
            console.log("Remove was called");
            return{
                allDogs:removeDog(state.allDogs,action)
            };
        case 'EDIT_DOG':
            return{
                ...state,
                allDogs:editDog(state.allDogs,action)
            }
        default:
            console.log("I dont know what call though");
            return state;
    }
};
export default store;