import { useContext, useReducer, createContext } from "react";
import reducer from "./reducer";
import menu from "./components/data";
import { ASSIGN_DATA, CHANGE_MODE, DECREASE_LIKE, FILTER_DATA, FIND_All_DATA, INCREASE_LIKE } from "./actions";
// import App from "./App";

const AppContext = createContext();

const initialState = {
  darkMode:false,
  loading: false,
  menu:menu,
  menuOriginal:menu
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filterData = (cat) => {
    dispatch({ type: FILTER_DATA , payload: {cat,menu}});
  };

  const findAllData = () =>{
    dispatch({type: FIND_All_DATA,payload:{menu}});
  }

  const upVote = (id) =>{
    dispatch({ type: INCREASE_LIKE, payload: { id } });
  }

  const downVote = (id) => {
    dispatch({type:DECREASE_LIKE,payload:{id}});
  }

  const changeMode = () =>{
    dispatch({type:CHANGE_MODE,payload:{}});
  }

  const assignSortedData = (data) =>{
    dispatch({type:ASSIGN_DATA,payload:{data}})
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        filterData,
        findAllData,
        upVote,
        downVote,
        changeMode,
        assignSortedData,
      }}
    >
      {children}
      {/* <App/> */}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
