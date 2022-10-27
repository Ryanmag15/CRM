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
          Bem vindo ao CRM, está em fazer de teste, navegue no sistema por
          gentileza e deixe suas melhoras e sugestões! TELAS MONTADAS:
          CONTAS/CONTATOS/TESES/OPORTUNIDADES
        </Alert>
      ))}
    </>
  );
}

export default BasicExample;
