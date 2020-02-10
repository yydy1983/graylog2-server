import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import { OverlayTrigger, Tooltip } from 'components/graylog';

const shardStatesColor = {
  started: '#dff0d8',
  relocating: '#de9df4',
  initializing: '#f4ddbc',
  unassigned: '#c3c3c3',
};

const ShardListItem = styled.li(({ routeState }) => css`
  padding: 10px;
  margin: 5px;
  width: 50px;
  float: left;
  text-align: center;
  background-color: ${shardStatesColor[routeState]};
`);

const ShardId = styled.span`
  font-weight: bold;
  margin-bottom: 3px;
  border-bottom: 1px solid #000;
`;

class ShardRouting extends React.Component {
  static propTypes = {
    route: PropTypes.object.isRequired,
  };

  render() {
    const { route } = this.props;
    const tooltip = <Tooltip id="shard-route-state-tooltip">State: <i>{route.state}</i> on {route.node_hostname} ({route.node_name})</Tooltip>;
    return (
      <ShardListItem routeState={route.state}>
        <OverlayTrigger placement="top" overlay={tooltip}>
          <ShardId>S{route.id}</ShardId>
        </OverlayTrigger>
      </ShardListItem>
    );
  }
}

export default ShardRouting;
