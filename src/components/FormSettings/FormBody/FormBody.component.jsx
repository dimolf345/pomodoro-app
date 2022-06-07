import FormBodyWrapper from "./FormBody.styles";
import FormSection from "../FormSection/FormSection.component";

export default function FormBody() {
  return (
    <FormBodyWrapper>
      <FormSection title="Time (minutes)">
        <Test />
      </FormSection>
    </FormBodyWrapper>
  );
}

function Test(props) {
  return <div>{props.isDesktop && "porco dio"}</div>;
}
