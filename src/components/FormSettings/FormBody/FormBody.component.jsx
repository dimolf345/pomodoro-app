import FormBodyWrapper from "./FormBody.styles";
import FormSection from "../FormSection/FormSection.component";
import useMediaQuery from "../../../hooks/useMediaquery";

export default function FormBody() {
  const isDesktop = useMediaQuery("(min-width: 767px)");
  return (
    <FormBodyWrapper>
      <FormSection title="Time (minutes)" isDesktop={isDesktop}>
        <TimerInput />
      </FormSection>
    </FormBodyWrapper>
  );
}

function TimerInput() {
  return <p>Timer Input</p>;
}
