export const ADD_FEATURE = "ADD_FEATURE";
export const addFeature = (idx) => {
    return{type:ADD_FEATURE, payload: idx}
}

export const REMOVE_FEATURE= "REMOVE_FEATURE"
export const removeFeature = (idx) => {
    return{type:REMOVE_FEATURE, payload: idx}
}