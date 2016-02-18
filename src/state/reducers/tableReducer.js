let INITIAL_STATE = {
  selected: null
};

export const NODE_SELECTED = "NODE_SELECTED";
export const EDGE_SELECTED = "EDGE_SELECTED";


export function tableReducer(state = INITIAL_STATE, action) {


  console.log("%%%%%%%%% TBL %%%%%%%%%%");
  console.log(action)
  console.log(state)

  switch (action.type) {

    case NODE_SELECTED:
    case EDGE_SELECTED:
      return Object.assign(state, {
        selected: action.selected
      });

    default:
      return state;
  }
}
