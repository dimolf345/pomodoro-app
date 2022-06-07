import React from "react";
import PropTypes from "prop-types";

import FormHeader from "../FormHeader/FormHeader.component";
import FormWrapper from "./SettingsModal.styles";
import FormBody from "../FormBody/FormBody.component";

function SettingsModal({ showModal, setShowModal, isAnimated }) {
  const handleClick = () => setShowModal(false);
  return (
    <FormWrapper
      aria-labelledby="form-title"
      role="form"
      isAnimated={isAnimated}
      showModal={showModal}
    >
      <FormHeader title="Settings" handleClick={handleClick} />
      <FormBody />
    </FormWrapper>
  );
}

SettingsModal.defaultProps = {
  isAnimated: true,
};

SettingsModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  isAnimated: PropTypes.bool,
};

export default SettingsModal;
