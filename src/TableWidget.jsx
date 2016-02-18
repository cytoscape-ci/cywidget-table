import React from "react";
import { connect } from 'react-redux';

import {tableReducer} from './state/reducers/tableReducer'

import TableComponent from './components/TableComponent.jsx'

class TableWidget extends React.Component {

  render() {
    console.log("--- @@@@@@@@@@@@@@@RENDERING2!!!!!!!!!!");
    console.log(this.props);
    console.log(TableComponent);

    const {selected, width, height, background, ...props} = this.props;

    const style = {
      width: width,
      height: height,
      background: background
    };

    return (
      <div>
        <TableComponent
          style={style}
          selected={selected}
        />
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    //cyjsSelected: (selected) => dispatch(cyjsSelected(selected))
  }
}


function mapStateToProps(state) {
  console.log("--- @@@@@@@@@@@@@@@STATE to PROPS ---");
  console.log(state);

  return {
    selected: state.tableReducer.selected
  }
}


export const CyTableWidget = connect(
  mapStateToProps,
  mapDispatchToProps
)(TableWidget);

export {tableReducer}
