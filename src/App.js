import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0
    };
  }

  handleTabChange = (index) => {
    this.setState({selectedTab: index});
  }

  renderContent() {
    switch(this.state.selectedTab) {
      default:
      case 0: return <span>Items</span>;
      case 1: return <span>Cart</span>;
    }
  }

  render() {
    let {selectedTab} = this.state;
    return (
      <div className="App">
        <Nav selectedTab={selectedTab} onTabChange={this.handleTabChange} />
        <main className="App-content">          
          {this.renderContent()}
        </main>
      </div>
    );
  }
}

export default App;