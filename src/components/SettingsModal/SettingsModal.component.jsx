import React from "react";
import PropTypes from "prop-types";

import FormHeader from "../FormSettings/FormHeader/FormHeader.component";
import FormWrapper from "./SettingsModal.styles";

function SettingsModal({ showModal, setShowModal }) {
  const handleClick = () => setShowModal(false);
  return (
    <FormWrapper showModal={showModal}>
      <FormHeader title="Settings" handleClick={handleClick} />
    </FormWrapper>
  );
}

SettingsModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
};

export default SettingsModal;
