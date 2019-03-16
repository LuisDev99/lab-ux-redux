import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  items: [ 
    {id: 0, description: "Flutter"}, 
    {id: 1, description: "React"}, 
    {id: 2, description: "Google"}, 
    {id: 3, description: "Chamber"},
    {id: 4, description: "Chipotle"}, 
    {id: 5, description: "MariaDB"},
    {id: 6, description: ".Net"},
    {id: 7, description: "Fuschia"},
    {id: 8, description: "Angular"},
    {id: 9, description: "Xamarin"}],
  title: "Bienvenido a Project Code Names"
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM: {
      console.log(action);

      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }

    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      console.log(action.payload);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }

    case ACTIONS.Types.HOME_STATE_TITLE:

        let newState = _.cloneDeep(state);

        if(state.title === "Bienvenido a Project Code Names"){
            newState.title = "813N83N1D0 4 PR0J3CT C0D3 N4M3";
        } else {
            newState.title = "Bienvenido a Project Code Names";
        }

        return newState;
    break;


    default:
      return state;
  }
};

export default todoReducer;