import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { Timestamp } from 'components/common';

const SystemRestList = styled.dl`
  margin-top: 5px;
  margin-bottom: 0px;

  dt {
    float: left;
  }

  dd {
    margin-left: 120px;
  }
`;

class RestApiOverview extends React.Component {
  static propTypes = {
    node: PropTypes.object.isRequired,
  };

  render() {
    return (
      <SystemRestList>
        <dt>Transport address:</dt>
        <dd>{this.props.node.transport_address}</dd>
        <dt>Last seen:</dt>
        <dd><Timestamp dateTime={this.props.node.last_seen} relative /></dd>
      </SystemRestList>
    );
  }
}

export default RestApiOverview;
