import { createContext, useReducer } from "react";
const INITIAL_STATE ={
    isUploading: false,
    url: null,
    success: false,
    error: false
}
export const Context = createContext(INITIAL_STATE)
const START_UPLOADING = ()=>({
    type: "START_UPLOADING",
} )
const UPLOADING_SUCCESS = (res)=>({
    action: "UPLOADING_SUCCESS",
    payload: res
})
const UPLOADING_FAILURE =(err)=>({
    action: "UPLOADING_FAILURE",
    payload: err
})
const RESTART =(err)=>({
    action: "RESTART",
})
const reducer = (state, action)=>{
    switch (action.type) {
        case "START_UPLOADING":
            console.log("START_UPLOADING")
            return{
                isUploading: true,
                success: false,
                error: false,
                url: null
            };
        case "UPLOADING_SUCCESS":
            console.log("UPLOADING_SUCCESS")
            console.log(action.payload)
            return{
                isUploading: false,
                success: true,
                error: false,
                url: action.payload
            };
        case "UPLOADING_FAILURE":
            return {
                isUploading: false,
                success: false,
                error: action.payload,
                url: null
            };
        case "RESTART":
            return {
                isUploading: false,
                success: false,
                error: false,
                url: null
            }    
        default:
            return state
    }
}
export const ContextProvider =({children})=>{
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
return (
    <Context.Provider value={{
        isUploading: state.isUploading,
        success: state.success,
        error: state.error,
        url: state.url,
        dispatch 
    }}>
        {children}
    </Context.Provider>
 );
};