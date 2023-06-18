import { useNavigate, useParams } from "react-router-dom";

export const ContactDetails = () => {
  const { nomeDaVariavel } = useParams();

  // 6 - redirect
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Exibindo dado da url: {nomeDaVariavel}</h1>
      <button onClick={handleRedirect}>Voltar para home</button>
    </div>
  );
};
