/**
 * Created by Sherry on 2017/12/7.
 */
export function addTip (value){
    return ({
        type: "ADD_TIP",
        value
    })
}

export function toggleDone (id){
    return ({
        type: "TOGGLE_DONE",
        id
    })
}