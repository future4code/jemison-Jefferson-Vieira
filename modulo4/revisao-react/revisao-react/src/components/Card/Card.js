import { CardContainer } from "./styles";
import {ContainerBotao} from './styles';


function Card(props) {
  const { img, name, species, id } = props;
  const { removeCharacter } = props;
  const { changePage } = props;
  return (
    <CardContainer>
      <img src={img} alt={name}></img>
      <h2>{name}</h2>
      <h4>{species}</h4>
      <ContainerBotao>
      <button onClick={() => changePage("detailspage", id)}>Detalhes</button>
      <button onClick={() => removeCharacter(id)}>Remover</button>
      </ContainerBotao>
    
    </CardContainer>
  );
}

export default Card;
