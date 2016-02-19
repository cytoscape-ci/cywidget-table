import React from "react"


export default class PropertyTableComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("* Rendering prop table...");

    let data = this.props.selected;

    if(data === null || data === undefined) {
      return (
        <div>
          <h2>NO data</h2>
        </div>
      )
    } else {
      let attrs = this.props.selected.data();
      let keys = Object.keys(attrs);

      return (
        <div>
          <h2>Details:</h2>
          <table>
            <thead>
              <tr><th className="key-col">Key</th><th>Value</th></tr>
            </thead>
            <tbody>
            {
              keys.map( (key) => (
                <tr><td>{key}</td><td>{attrs[key]}</td></tr>
              ))
            }
            </tbody>
          </table>

        </div>
      )
    }
  }
}
