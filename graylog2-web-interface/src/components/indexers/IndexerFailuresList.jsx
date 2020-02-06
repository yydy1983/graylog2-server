import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { Alert, Table } from 'components/graylog';
import { Icon } from 'components/common';
import { IndexerFailure } from 'components/indexers';

const IndexerFailureTable = styled(Table)`
  margin-top: 10px;
`;

class IndexerFailuresList extends React.Component {
  static propTypes = {
    failures: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    if (this.props.failures.length === 0) {
      return (
        <Alert bsStyle="success"><Icon name="check-circle" /> Hurray! There are not any indexer failures.</Alert>
      );
    }

    return (
      <div className="scrollable-table">
        <IndexerFailureTable striped hover condensed>
          <thead>
            <tr>
              <th style={{ width: 200 }}>Timestamp</th>
              <th>Index</th>
              <th>Letter ID</th>
              <th>Error message</th>
            </tr>
          </thead>
          <tbody>
            {this.props.failures.map(failure => <IndexerFailure key={`indexer-failure-${failure.letter_id}`} failure={failure} />)}
          </tbody>
        </IndexerFailureTable>
      </div>
    );
  }
}

export default IndexerFailuresList;
