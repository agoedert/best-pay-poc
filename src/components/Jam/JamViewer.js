import React, { Component } from 'react';
import Jam from './Jam';
import JamClient from '../../clients/JamClient';

import './jam.scss';

class JamViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jams: []
    };
  }

  componentDidMount() {
    new JamClient().getJams().then(jams => {
      this.setState({ jams: jams.data });
    });
  }

  render() {
    return (
      <div className="jam-viewer">
        {this.state.jams.map(jam => (
          <Jam key={jam.name} name={jam.name} image={jam.image} />
        ))}
      </div>
    );
  }
}

export default JamViewer;
