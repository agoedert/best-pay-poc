import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './jam.scss';

class Jam extends Component {
  render() {
    return (
      <div className="jam">
        <h2>{this.props.name}</h2>
        <img
          className="jam-image"
          src={this.props.image}
          alt={this.props.name}
        />

        <div className="jam-actions">
            <button onClick={this.props.action} className="jam-add-button">
              <img src="/assets/images/addSign.png" alt="add" />
            </button>
        </div>
      </div>
    );
  }
}

Jam.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Jam;
