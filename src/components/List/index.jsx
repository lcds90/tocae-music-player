// src/List.js
import React from 'react';
import { connect } from 'react-redux';
import {
  DATA,
} from '@/global';

class List extends React.PureComponent {
  render() {
    const list = this.props[DATA];
    return (
      <div>
        <div>
          {list.map((element, index) => <p key={index}>{JSON.stringify(element)}</p>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ [DATA]: state[DATA] });

export default connect(mapStateToProps)(List);
