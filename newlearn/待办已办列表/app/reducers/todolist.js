
let id = 0;
export default (store = [], action)=>{
    switch (action.type) {
        case "ADD_TIP":
            if(action.value){
                store = [...store];
                store.push({value: action.value, done: false, id: id++});
            }
            break;
        case "TOGGLE_DONE":
            return store.map( todo => (todo.id === action.id)? {...todo, done: !todo.done}: todo)
            break
    }
    return store
}