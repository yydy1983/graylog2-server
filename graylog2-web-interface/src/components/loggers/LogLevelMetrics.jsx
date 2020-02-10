import PropTypes from 'prop-types';
import React from 'react';
import createReactClass from 'create-react-class';
import Reflux from 'reflux';
import { Col } from 'components/graylog';
import lodash from 'lodash';
import numeral from 'numeral';
import styled from 'styled-components';

import { Spinner } from 'components/common';
import CombinedProvider from 'injection/CombinedProvider';

const { MetricsStore, MetricsActions } = CombinedProvider.get('Metrics');

const LogLevelMetricsRow = styled.div`
  margin-top: 2px;
  margin-left: 10px;
`;

const LogLevelMetricsList = styled.dl`
  margin-bottom: 5px;
  margin-top: 5px;
`;

const LogLevelMetricsData = styled.dt`
  float: left;
  margin-right: 5px;
`;

const LogLevelMetrics = createReactClass({
  displayName: 'LogLevelMetrics',

  propTypes: {
    nodeId: PropTypes.string.isRequired,
    loglevel: PropTypes.string.isRequired,
  },

  mixins: [Reflux.connect(MetricsStore)],

  componentDidMount() {
    MetricsActions.add(this.props.nodeId, this._metricName());
  },

  componentWillUnmount() {
    MetricsActions.remove(this.props.nodeId, this._metricName());
  },

  _metricName() {
    return `org.apache.logging.log4j.core.Appender.${this.props.loglevel}`;
  },

  render() {
    const { loglevel, nodeId } = this.props;
    const { metrics } = this.state;
    let metricsDetails;
    if (!metrics || !metrics[nodeId] || !metrics[nodeId][this._metricName()]) {
      metricsDetails = <Spinner />;
    } else {
      const { metric } = metrics[nodeId][this._metricName()];
      metricsDetails = (
        <LogLevelMetricsList>
          <LogLevelMetricsData>Total written:</LogLevelMetricsData>
          <dd><span className="loglevel-metric-total">{metric.rate.total}</span></dd>
          <LogLevelMetricsData>Mean rate:</LogLevelMetricsData>
          <dd><span className="loglevel-metric-mean">{numeral(metric.rate.mean).format('0.00')}</span> / second</dd>
          <LogLevelMetricsData>1 min rate:</LogLevelMetricsData>
          <dd><span className="loglevel-metric-1min">{numeral(metric.rate.one_minute).format('0.00')}</span> / second</dd>
        </LogLevelMetricsList>
      );
    }
    return (
      <LogLevelMetricsRow>
        <Col md={4}>
          <h3 className="u-light">Level: {lodash.capitalize(loglevel)}</h3>
          {metricsDetails}
        </Col>
      </LogLevelMetricsRow>
    );
  },
});

export default LogLevelMetrics;
