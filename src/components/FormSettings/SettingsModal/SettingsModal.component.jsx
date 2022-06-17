import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import FormHeader from "../FormHeader/FormHeader.component";
import { FormWrapper, Background } from "./SettingsModal.styles";
import FormBody from "../FormBody/FormBody.component";
import SubmitButton from "../SubmitButton/SubmitButton.component";

function SettingsModal({ showModal, setShowModal, isAnimated }) {
  const handleClick = () => setShowModal(false);
  const [hasCollectedData, setHasCollectedData] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (showModal) formRef.current.focus();
  }, [showModal]);

  useEffect(() => {
    if (hasCollectedData) {
      setHasCollectedData(false);
      setShowModal(false);
      setIsSubmitted(false);
    }
  }, [isSubmitted, hasCollectedData, setShowModal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <Background
      showModal={showModal}
    >
      <FormWrapper
        aria-labelledby="form-title"
        role="form"
        isAnimated={isAnimated}
        showModal={showModal}
        ref={formRef}
      >
        <FormHeader title="Settings" handleClick={handleClick} />
        <FormBody isSubmitted={isSubmitted} setHasCollectedData={setHasCollectedData} />
        <SubmitButton text="Apply" handleSubmit={(e) => handleSubmit(e)} />
      </FormWrapper>
    </Background>
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
