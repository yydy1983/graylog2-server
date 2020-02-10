import PropTypes from 'prop-types';
import React from 'react';
import numeral from 'numeral';
import moment from 'moment';
import styled from 'styled-components';

const ShardMeterList = styled.dl`
  margin-bottom: 0px;
  margin-top: 0px;
`;

const SharedMeterTerm = styled.dt`
  float: left;
`;

const SharedMeterData = styled.dd`
  margin-left: 65px;
`;

class ShardMeter extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    shardMeter: PropTypes.object.isRequired,
  };

  _formatMeter = (meter) => {
    const value = <span>{numeral(meter.total).format('0,0')} ops</span>;

    if (meter.total > 0) {
      return <span>{value} <span title={`${meter.time_seconds}s`}>(took {moment.duration(meter.time_seconds, 'seconds').humanize()})</span></span>;
    }

    return value;
  };

  render() {
    const sm = this.props.shardMeter;
    return (
      <span>
        <h3 style={{ display: 'inline' }}>{this.props.title}</h3>
        <ShardMeterList>
          <SharedMeterTerm>Index:</SharedMeterTerm>
          <SharedMeterData>{this._formatMeter(sm.index)}</SharedMeterData>

          <SharedMeterTerm>Flush:</SharedMeterTerm>
          <SharedMeterData>{this._formatMeter(sm.flush)}</SharedMeterData>

          <SharedMeterTerm>Merge:</SharedMeterTerm>
          <SharedMeterData>{this._formatMeter(sm.merge)}</SharedMeterData>

          <SharedMeterTerm>Query:</SharedMeterTerm>
          <SharedMeterData>{this._formatMeter(sm.search_query)}</SharedMeterData>

          <SharedMeterTerm>Fetch:</SharedMeterTerm>
          <SharedMeterData>{this._formatMeter(sm.search_fetch)}</SharedMeterData>

          <SharedMeterTerm>Get:</SharedMeterTerm>
          <SharedMeterData>{this._formatMeter(sm.get)}</SharedMeterData>

          <SharedMeterTerm>Refresh:</SharedMeterTerm>
          <SharedMeterData>{this._formatMeter(sm.refresh)}</SharedMeterData>
        </ShardMeterList>
      </span>
    );
  }
}

export default ShardMeter;
