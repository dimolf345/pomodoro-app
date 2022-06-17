import { useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as SettingsIcon } from "../../assets/icon-settings.svg";
import SettingsModal from "./SettingsModal/SettingsModal.component";
import SettingsButton from "./FormSettings.styles";

function FormSettings({ isAnimated }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <SettingsButton
        onClick={() => setShowModal(!showModal)}
      >
        <SettingsIcon>
          <title className="sr-only">settings icon</title>
        </SettingsIcon>
        <span className="sr-only">open settings form</span>
      </SettingsButton>
      <SettingsModal
        isAnimated={isAnimated}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
}

FormSettings.defaultProps = {
  isAnimated: true,
};

FormSettings.propTypes = {
  isAnimated: PropTypes.bool,
};

export default FormSettings;
