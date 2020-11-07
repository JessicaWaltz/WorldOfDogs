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
    var index = theDogs.indexOf(action.payload);
    theDogs.splice(index,1);
    return theDogs;
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
    switch(action.type){
        case 'ADD_DOG':
            console.log(state.allDogs);
            console.log(state.allDogs.includes(action.payload));
            console.log(action.payload);
            /*Because state.allDogs is an array of objects ,includes will not
            return true when trying to look for the same object*/ 
            var allDogDuplicate = state.allDogs.map((dog)=>{
                if(dog.name === action.payload.name && dog.owner === action.payload.owner){
                    return true;
                }
                return false;
            })

            /*var allDogNames = state.allDogs.map((dog)=>{
                return dog.name;
            })
            var allDogOwners=state.allDogs.map((dog)=>{
                return dog.owner;
            });*/
            //var duplicateDogName = allDogNames.includes(action.payload.name);
            //var duplicateDogOwner = allDogOwners.includes(action.payload.owner);
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
            return{
                allDogs:removeDog(state.allDogs,action)
            };
        case 'EDIT_DOG':
            return{
                ...state,
                allDogs:editDog(state.allDogs,action)
            }
        default:
            return state;
    }
};
export default store;