import { useParams } from "react-router-dom";

export const ContactDetails = () => {
  const { nomeDaVariavel } = useParams();

  return (
    <div>
      <h1>Exibindo dado da url: {nomeDaVariavel}</h1>
    </div>
  );
};
