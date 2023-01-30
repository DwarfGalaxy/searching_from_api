import React, { createContext, useContext, useEffect, useReducer } from 'react';
import {reducer} from '../ContextReducer/Reducer';
export const AppContext=createContext();
let API="https://hn.algolia.com/api/v1/search?";
const initialState={
    isLoading:true,
    hits:[],
    page:0,
    query:"",
    nbPages:0
}

function Context({children}) {
    const [state, dispatch] = useReducer(reducer,initialState);
    const fetAPIData=(url)=>{
        dispatch({type:"SET_LOADING"});
        fetch(url).then((apiData)=>{
            return apiData.json();
        }).then((response)=>{
            dispatch({type:"GET_STORIES",
            payload:{
                hits:response.hits,
                nbPages:response.nbPages,
            }
        });
        }).catch((error)=>{
            console.log(error);
        });
    }
    // delete item
    const RemoveItem=(id)=>{
        dispatch({type:'REMOVE_ITEM',payload:id});
    }

    // search item
    const searchItem=(item)=>{
        dispatch({type:"SEARCHED_ITEM",payload:item});
    }

    // nextPage
    const nextPage=(page)=>{
        dispatch({type:"NEXT_PAGE",payload:page});
    }
    // prevPage
    const prevPage=(page)=>{
        dispatch({type:"PREVIOUS_PAGE",payload:page});
    }
    
    useEffect(() => {
      fetAPIData(`${API}query=${state.query}&page=${state.page}`);
    }, [state.query,state.page]);
    
  return (
    <AppContext.Provider value={{...state,RemoveItem,searchItem,nextPage,prevPage}}>
        {children}
    </AppContext.Provider>
  )
}
// creating custom hook
export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export default Context
