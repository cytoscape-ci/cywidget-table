import React from "react"
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';


const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
    selected: true
  },
  {
    name: 'Randal White',
    status: 'Unemployed'
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
    selected: true
  },
  {
    name: 'Steve Brown',
    status: 'Employed'
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed'
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed'
  },
  {
    name: 'Adam Moore',
    status: 'Employed'
  }
];


export default class TableComponent extends React.Component {

  constructor(props) {
    super(props);



    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      height: '300px'
    };
  }


  render() {

    return (
      <div>
        <h2>OK!</h2>
      </div>
      //<div>
      //  <Table
      //    height={this.state.height}
      //    fixedHeader={this.state.fixedHeader}
      //    fixedFooter={this.state.fixedFooter}
      //    selectable={this.state.selectable}
      //    multiSelectable={this.state.multiSelectable}
      //    onRowSelection={this._onRowSelection}
      //  >
      //    <TableHeader enableSelectAll={this.state.enableSelectAll}>
      //      <TableRow>
      //        <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
      //        <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
      //        <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
      //      </TableRow>
      //    </TableHeader>
      //    <TableBody
      //      deselectOnClickaway={this.state.deselectOnClickaway}
      //      showRowHover={this.state.showRowHover}
      //      stripedRows={this.state.stripedRows}
      //    >
      //      {tableData.map((row, index) => (
      //        <TableRow key={index} selected={row.selected}>
      //          <TableRowColumn>{index}</TableRowColumn>
      //          <TableRowColumn>{row.name}</TableRowColumn>
      //          <TableRowColumn>{row.status}</TableRowColumn>
      //        </TableRow>
      //      ))}
      //    </TableBody>
      //    <TableFooter>
      //      <TableRow>
      //        <TableRowColumn>ID</TableRowColumn>
      //        <TableRowColumn>Name</TableRowColumn>
      //        <TableRowColumn>Status</TableRowColumn>
      //      </TableRow>
      //      <TableRow>
      //        <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
      //          Super Footer
      //        </TableRowColumn>
      //      </TableRow>
      //    </TableFooter>
      //  </Table>
      //</div>
    );
  }
}
