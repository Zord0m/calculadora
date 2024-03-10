import Input from "./components/input";
import Button from "./components/Button";

import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  // grava numero
  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
    };
  // limpa
  const handleAddNumber = (num) => {
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }
  // soma
  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }
  // subtrai
  const handleRemNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    }else{
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }
  // divide
  const handleDivNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    }else{
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }
  //multiplica
  const handleMulNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('*')
    }else{
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }
  // igual
  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleRemNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        case '*':
          handleMulNumbers();
          break;
      
        default:
          break;
      }
    }
  }
  

  return (
    <Container>
      <Content>
        <Input value= {currentNumber}/>
        <Row>
          <Button label={7} onCLick={() => handleAddNumber ('7')}/>
          <Button label={8} onCLick={() => handleAddNumber ('8')}/>
          <Button label={9} onCLick={() => handleAddNumber ('9')}/>
          <Button label={'÷'} onCLick={handleDivNumbers}/>
        </Row>
        <Row>
          <Button label={4} onCLick={() => handleAddNumber ('4')}/>
          <Button label={5} onCLick={() => handleAddNumber ('5')}/>
          <Button label={6} onCLick={() => handleAddNumber ('6')}/>
          <Button label={'x'} onCLick={handleMulNumbers}/>
        </Row>
        <Row>
          <Button label={1} onCLick={() => handleAddNumber ('1')}/>
          <Button label={2} onCLick={() => handleAddNumber ('2')}/>
          <Button label={3} onCLick={() => handleAddNumber ('3')}/>
          <Button label={'-'} onCLick={handleRemNumbers}/>
        </Row>
        <Row>
          <Button label={'C'} onCLick={handleOnClear}/>
          <Button label={0} onCLick={() => handleAddNumber ('0')}/>
          <Button label={'='} onCLick={handleEquals}/>
          <Button label={'+'} onCLick={handleSumNumbers}/>
        </Row>
      </Content>  
    </Container>
  );
}

export default App;
