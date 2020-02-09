import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Col, Row } from 'components/graylog';
import Footer from 'components/layout/Footer';

const MainContentCol = styled(Col)`
  margin-top: 10px;
  padding: 5px 25px;
`;

const AppWithoutSearchBar = (props) => {
  const { children } = props;
  return (
    <div className="container-fluid">
      <Row id="main-row">
        <MainContentCol md={12}>
          {children}
        </MainContentCol>
      </Row>
      <Footer />
    </div>
  );
};

AppWithoutSearchBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWithoutSearchBar;
