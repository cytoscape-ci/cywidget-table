const NODE_SELECTED = "NODE_SELECTED";
const EDGE_SELECTED = "EDGE_SELECTED";

const INITIAL_STATE = {
  selected: null
};


export function tableReducer(state = INITIAL_STATE, action) {

  console.log("%%%%%%%%% TBL %%%%%%%%%%");
  console.log(action)
  console.log(state)

  switch (action.type) {

    case NODE_SELECTED:
    case EDGE_SELECTED:
      console.log("%%%%%%%%% TBL UPDATED2");
      return Object.assign({}, state, {
        selected: action.selected
      });

    default:
      return state;
  }
}
