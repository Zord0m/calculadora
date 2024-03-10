import { ButtonContainer } from "./styles";

const Button = ({label, onCLick}) => {
    return (
      <ButtonContainer onClick={onCLick} type = "button">
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;
  