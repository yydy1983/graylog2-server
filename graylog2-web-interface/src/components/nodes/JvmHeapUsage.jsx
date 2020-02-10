import PropTypes from 'prop-types';
import React from 'react';
import createReactClass from 'create-react-class';
import Reflux from 'reflux';
import styled from 'styled-components';

import { ProgressBar } from 'components/graylog';
import { Spinner } from 'components/common';

import NumberUtils from 'util/NumberUtils';
import MetricsExtractor from 'logic/metrics/MetricsExtractor';

import StoreProvider from 'injection/StoreProvider';
import ActionsProvider from 'injection/ActionsProvider';

const MetricsStore = StoreProvider.getStore('Metrics');
const MetricsActions = ActionsProvider.getActions('Metrics');

const NodeHeap = styled.div`
  .progress {
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 0px;
  }

  .used-memory {
    background-color: #9e1f63;
  }

  .committed-memory {
    background-color: #f7941e;
  }

  .max-memory {
    background-color: #f5f5f5;
  }
`;

const Blob = styled.span`
  display: inline-block;
  width: 9px;
  height: 9px;
  margin-left: 2px;
`;

const JvmHeapUsage = createReactClass({
  displayName: 'JvmHeapUsage',

  propTypes: {
    nodeId: PropTypes.string.isRequired,
  },

  mixins: [Reflux.connect(MetricsStore)],

  componentWillMount() {
    this.metricNames = {
      usedMemory: 'jvm.memory.heap.used',
      committedMemory: 'jvm.memory.heap.committed',
      maxMemory: 'jvm.memory.heap.max',
    };

    Object.keys(this.metricNames).forEach(metricShortName => MetricsActions.add(this.props.nodeId, this.metricNames[metricShortName]));
  },

  componentWillUnmount() {
    Object.keys(this.metricNames).forEach(metricShortName => MetricsActions.remove(this.props.nodeId, this.metricNames[metricShortName]));
  },

  _extractMetricValues() {
    const { nodeId } = this.props;
    const nodeMetrics = this.state.metrics[nodeId];
    const metrics = MetricsExtractor.getValuesForNode(nodeMetrics, this.metricNames);

    metrics.usedPercentage = metrics.maxMemory === 0 ? 0 : (metrics.usedMemory / metrics.maxMemory) * 100;
    metrics.committedPercentage = metrics.maxMemory === 0 ? 0 : (metrics.committedMemory / metrics.maxMemory) * 100;

    return metrics;
  },

  render() {
    let progressBar;
    let detail;

    if (this.state.metrics) {
      const metrics = this._extractMetricValues();

      if (Object.keys(metrics).length === 0) {
        progressBar = <div className="progress" />;
        detail = <p>Heap information unavailable.</p>;
      } else {
        progressBar = (
          <ProgressBar>
            <ProgressBar className="used-memory" now={metrics.usedPercentage} />
            <ProgressBar className="committed-memory" now={metrics.committedPercentage - metrics.usedPercentage} />
          </ProgressBar>
        );

        detail = (
          <p>
            The JVM is using{' '}
            <Blob className="used-memory" />
            <strong> {NumberUtils.formatBytes(metrics.usedMemory)}</strong>
            {' '}of{' '}
            <Blob className="committed-memory" />
            <strong> {NumberUtils.formatBytes(metrics.committedMemory)}</strong>
            {' '}heap space and will not attempt to use more than{' '}
            <Blob className="max-memory" style={{ border: '1px solid #ccc' }} />
            <strong> {NumberUtils.formatBytes(metrics.maxMemory)}</strong>
          </p>
        );
      }
    } else {
      progressBar = <ProgressBar />;
      detail = <p><Spinner text="Loading heap usage information..." /></p>;
    }

    return (
      <NodeHeap data-node-id={this.props.nodeId}>
        {progressBar}

        {detail}
      </NodeHeap>
    );
  },
});

export default JvmHeapUsage;
