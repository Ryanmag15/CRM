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
          Bem vindo ao CRM, está em faze de teste, navegue no sistema por
          gentileza e deixe suas sugestões, e caso encontre algum erro por favor
          me avise para assim corrigir! ..... TELAS MONTADAS:
          CONTAS/CONTATOS/TESES/OPORTUNIDADES/RELATÓRIOS
        </Alert>
      ))}
    </>
  );
}

export default BasicExample;
