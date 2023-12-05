import { ASSIGN_DATA, CHANGE_MODE, DECREASE_LIKE, FILTER_DATA, FIND_All_DATA, INCREASE_LIKE } from "./actions";
// import menu from "./components/data";

const increaseFunction = (originalMenu , id) =>{
    // console.log(originalMenu);
    const newData = originalMenu.map(menu => {
        if(menu.id === id)
        {
            const obj = {...menu,likes:menu.likes+1};
            return obj;
        }
        return menu;
    })
    return newData;
}

const decreaseFunction = (originalMenu, id) => {
    // console.log(id);

    const newData = originalMenu.map((menu) => {
      if (menu.id === id) {
        const obj = { ...menu, likes: (menu.likes ?  menu.likes - 1 : 0) };
        return obj;
      }
      return menu;
    });
    return newData;
};

const reducer = (state, action) => {
  if (action.type === FILTER_DATA) {
    return { ...state, menu: (state.menuOriginal.filter((food) => food.category === action.payload.cat)) };
  }

  if (action.type === FIND_All_DATA){
    return { ...state, menu: state.menuOriginal };
  }

  if (action.type === INCREASE_LIKE) {
    return {
      ...state,
      menuOriginal: increaseFunction(state.menuOriginal, action.payload.id),
      menu: increaseFunction(state.menu, action.payload.id),
    };
  }

  if(action.type === DECREASE_LIKE){
    return {
      ...state,
      menuOriginal: decreaseFunction(state.menuOriginal, action.payload.id),
      menu: decreaseFunction(state.menu, action.payload.id),
    };
  }

  if(action.type === CHANGE_MODE){
    return {...state,darkMode : !(state.darkMode)}
  }

  if(action.type === ASSIGN_DATA){
    return {...state,menu:action.payload.data};
  }

  throw new Error(`no matching action type : ${action.type}`);
};

export default reducer;
