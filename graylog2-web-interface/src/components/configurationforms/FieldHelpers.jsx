import React from 'react';
import styled from 'styled-components';

const OptionalConfigurationField = styled.span`
  margin-left: 5px;
  font-size: 11px;
`;

const FieldHelpers = {
  hasAttribute: (ary, attribute) => {
    return ary.indexOf(attribute) > -1;
  },
  optionalMarker: (field) => {
    return field.is_optional && field.type !== 'boolean' ? <OptionalConfigurationField>(optional)</OptionalConfigurationField> : null;
  },
};

/** @component */
export default FieldHelpers;
