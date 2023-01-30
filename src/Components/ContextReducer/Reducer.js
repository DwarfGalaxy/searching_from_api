const reducer=(state,action)=>{
    if(action.type==="SET_LOADING"){
        return{
            ...state,
            isLoading: true,
        }
    }
    if(action.type ==="GET_STORIES"){
        return {
            ...state,
            isLoading:false,
            hits:action.payload.hits,
            nbPages:action.payload.nbPages,
        }
    }
    if(action.type==="REMOVE_ITEM"){
        let remainingItem=state.hits.filter((currElem)=>{
            return currElem.objectID!==action.payload;
        });
        return {
            ...state,
            isLoading:false,
            hits:remainingItem
        }
    }
    if(action.type==="SEARCHED_ITEM"){
        return {
            ...state,
            isLoading:false,
            query:action.payload
        }
    }
    if(action.type==="NEXT_PAGE"){
        return{
            ...state,
            isLoading:false,
            page:action.payload<state.nbPages-1?action.payload+1:0
        }
    }
    if(action.type==="PREVIOUS_PAGE"){
        return{
            ...state,
            isLoading:false,
            page:action.payload===0?state.nbPages-1:action.payload-1
        }
    }
}
export {reducer}