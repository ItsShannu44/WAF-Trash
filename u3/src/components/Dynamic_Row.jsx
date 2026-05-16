import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';


class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };
  }

  addRow = () => {
    const newRow = {
      id: this.state.rows.length + 1,
      name: 'Student ' + (this.state.rows.length + 1)
    };

    this.setState({
      rows: [...this.state.rows, newRow]
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.addRow}>Add Row</button>

        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>

          <tbody>
            {this.state.rows.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Dynamic Table Row Adding</h1>
        <TableData />
      </div>
    );
  }
}

export default App;