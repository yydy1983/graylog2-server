import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormControl } from 'components/graylog';

const MetricsFilterFormControl = styled(FormControl)`
  margin-bottom: 15px;
`;

class MetricsFilterInput extends React.Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  handleChange = (event) => {
    this.props.onChange(event.target.value);
  };

  render() {
    const { filter } = this.props;
    return (
      <MetricsFilterFormControl type="text"
                                bsSize="large"
                                placeholder="Type a metric name to filter&hellip;"
                                value={filter}
                                onChange={this.handleChange} />
    );
  }
}

export default MetricsFilterInput;
