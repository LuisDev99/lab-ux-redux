// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM",
    HOME_STATE_TITLE: "HOME_TITLE"
  };
  // actions
  const createItem = task => ({
    type: Types.CREATE_ITEM,
    payload: task
  });
  
  const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
  });

  const homeTitle = title => ({
    type: Types.HOME_STATE_TITLE,
    payload: title
  });
  
  export default {
    createItem,
    deleteItem,
    homeTitle,
    Types
  };