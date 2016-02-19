import React from "react";
import { connect } from 'react-redux';
import {tableReducer} from './state/reducers/tableReducer'
import PropertyTableComponent from './components/PropertyTableComponent.jsx'


class PropTableWidget extends React.Component {

  render() {
    const {selected} = this.props;

    return (
      <div>
        <PropertyTableComponent
          selected={selected}
        />
      </div>
    )
  }
}


function mapStateToProps(state) {
  console.log("--- STATE to PROPS: Table ---");
  console.log(state);

  return {
    selected: state.tableReducer.selected
  }
}

export const CyPropTableWidget = connect(
  mapStateToProps
)(PropTableWidget);

export {tableReducer}
