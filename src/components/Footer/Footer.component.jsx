import { useColor } from "../../context/customContext";

export default function Footer() {
  const color = useColor()[0];
  return (
    <footer style={{
      textAlign: "center",
    }}
    >
      This website has been created by
      {" "}
      <a
        style={{ color: color.value }}
        href="https://www.frontendmentor.io/profile/dimolf345"
      >
        Luca Di Molfetta

      </a>
      {" "}
      as a
      {" "}
      <a
        style={{ color: color.value }}
        href="https://www.frontendmentor.io/home"
      >
        FrontendMentor Challenge

      </a>
      . Share your feedback!
    </footer>
  );
}
