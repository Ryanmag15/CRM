import Alert from "react-bootstrap/Alert";

function BasicExample() {
  return (
    <>
      {[
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Está tela {variant} é a de início!
        </Alert>
      ))}
    </>
  );
}

export default BasicExample;
