import { useState } from "react";
import { ReactComponent as SettingsIcon } from "../../assets/icon-settings.svg";
import SettingsModal from "../SettingsModal/SettingsModal.component";
import { SettingsButton } from "./FormSettings.styles";

function FormSettings() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <SettingsModal showModal={showModal} setShowModal={setShowModal} />
      <SettingsButton onClick={() => setShowModal(!showModal)}>
        <SettingsIcon>
          <title className="sr-only">Open settings modal</title>
        </SettingsIcon>
      </SettingsButton>
    </>
  );
}

export default FormSettings;
