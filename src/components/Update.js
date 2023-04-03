import React from 'react';
import './components.css';
import PropTypes from 'prop-types';

class Update extends React.Component {
    state = {date: new Date()}
    render() {
      return (
        <div class="date">
          <p> Last refreshed: {this.state.date.toLocaleString()}</p>
        </div>
      );
    }
  }
  
  export default Update;