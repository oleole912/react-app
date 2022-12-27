import shortid from "shortid";

//actions

const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');
const REMOVE_LIST = createActionName('REMOVE_LIST');

//selectors

export const getListsById = ({lists}, listId) => lists.find(list => list.id === listId);
export const getAllLists = (state) => state.lists;

//action creators

export const addList = payload => ({type: ADD_LIST, payload});
export const removeList = payload => ({type: REMOVE_LIST, payload});

const listsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_LIST:
        return [...statePart, { ...action.payload, id: shortid() }];
      case REMOVE_LIST:
        return statePart.filter(list => list.id !== action.payload);
      default:
        return statePart;
    }
  }

  export default listsReducer;