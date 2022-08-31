import {CardContainer} from './CardStyles';


function Card(props){
    
    const {img, name, species}= props
    return(
        
        <CardContainer>
         <img src={img} alt={name}></img>   
         <h2>{name}</h2>
         <p>{species}</p>
        </CardContainer>
          
    )
}





export default Card;