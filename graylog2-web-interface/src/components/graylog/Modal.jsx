// eslint-disable-next-line no-restricted-imports
import { Modal as BootstrapModal } from 'react-bootstrap';
import styled from 'styled-components';
import { transparentize } from 'polished';

import teinte from 'theme/teinte';

const Modal = styled(BootstrapModal)`
  .modal-content {
    background-color: ${teinte.primary.due};
    border-color: ${transparentize(0.8, teinte.primary.tre)};

    .modal-header {
      border-bottom-color: ${teinte.secondary.tre};
    }

    .modal-footer {
      border-top-color: ${teinte.secondary.tre};
    }
  }

  .modal-title {
    font-size: 21px;
  }

  .modal-dialog {
    margin-top: 55px;
  }

  .modal-backdrop {
    height: 100000%;  /* yes, really. this fixes the backdrop being cut off when the page is scrolled. */
    z-index: 1030;
  }

  form {
    margin-bottom: 0;
  }

  .modal-body .form-group {
    margin-bottom: 5px;
  }

`;

/** @component */
export default Modal;
