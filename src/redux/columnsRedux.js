import shortid from "shortid";

// actions

const createActionName = actionName => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');
const REMOVE_COLUMN = createActionName('REMOVE_COLUMN');

// selectors

export const getAllColumns = (state) => state.columns;
export const getColumnsByList = ({columns}, listId) => columns.filter(column => column.listId === listId);

// action creators

export const addColumn = payload => ({ type: ADD_COLUMN, payload });
export const removeColumn = payload => ({type: REMOVE_COLUMN, payload});


const columnsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_COLUMN:
        return [...statePart, { ...action.payload, id: shortid() }];
      case REMOVE_COLUMN:
        return statePart.filter(column => column.id !== action.payload);
      default:
        return statePart;
    }
  }

  export default columnsReducer;