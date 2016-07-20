import React from 'react';
import Navigation from './Nav.jsx';
import Panel from './Panel.jsx';
import Map from './map/Map.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: 'map here', // can set the initial state map  here
      panel: null,
      filter: null,
      collection: null
    };
  }

  componentDidMount() {
    // api function call here if needed
  }

  onClickslidePanel(string) {
    // slide panel here
    this.setState({
      panel: this.state[string]
    });
  }

  loadMap(data) {
    // use this callback function if needed
  }


  render() {
    return (
      <div>
        <div className="Navigation">
          <Navigation panel={this.onClickslidePanel.bind(this)}/>
        </div>
        <div className='Panel'>
          <Panel view={this.state.panel}/>
        </div>
        <div className='MapBody' id='map-two'>
          insert map here
          <Map/>
        </div>
      </div>
    );
  }

}

export default App;