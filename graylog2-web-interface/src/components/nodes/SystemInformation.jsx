import PropTypes from 'prop-types';
import React from 'react';
import createReactClass from 'create-react-class';
import moment from 'moment';
import styled from 'styled-components';

import { Timestamp } from 'components/common';

import DateTime from 'logic/datetimes/DateTime';

const SystemInfoList = styled.dl`
  margin-top: 5px;
  margin-bottom: 0px;

  dt {
    float: left;
  }

  dd {
    margin-left: 75px;
  }
`;

const SystemInformation = createReactClass({
  displayName: 'SystemInformation',

  propTypes: {
    node: PropTypes.object.isRequired,
    systemInformation: PropTypes.object.isRequired,
    jvmInformation: PropTypes.object,
  },

  getInitialState() {
    return { time: moment() };
  },

  componentDidMount() {
    this.interval = setInterval(() => this.setState(this.getInitialState()), 1000);
  },

  componentWillUnmount() {
    clearTimeout(this.interval);
  },

  render() {
    const { systemInformation } = this.props;
    let jvmInformation;
    if (this.props.jvmInformation) {
      jvmInformation = <span>PID {this.props.jvmInformation.pid}, {this.props.jvmInformation.info}</span>;
    } else {
      jvmInformation = <span>JMV information for this node is unavailable.</span>;
    }

    return (
      <SystemInfoList>
        <dt>Hostname:</dt>
        <dd>{systemInformation.hostname}</dd>
        <dt>Node ID:</dt>
        <dd>{this.props.node.node_id}</dd>
        <dt>Version:</dt>
        <dd>{systemInformation.version}, codename <em>{systemInformation.codename}</em></dd>
        <dt>JVM:</dt>
        <dd>{jvmInformation}</dd>
        <dt>Time:</dt>
        <dd>
          <Timestamp dateTime={this.state.time} format={DateTime.Formats.DATETIME_TZ} tz={systemInformation.timezone} />
        </dd>
      </SystemInfoList>
    );
  },
});

export default SystemInformation;
