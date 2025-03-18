import { Text, View, StyleSheet } from "react-native";
import {Button} from '../components/Button'
import {Display} from '../components/Display'
import { useState } from "react";

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})

const initialState = {
  displayValue : '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
}

export default function Index() {
  const [state, setState] = useState(...initialState)
  const addDigit = (n) => {
    if(n === '.' && state.displayValue.includes('.')){
      return
    }

    const clearDisplay = state.displayValue === '0' ||
    state.clearDisplay

    const currentValue = clearDisplay ? '' : state.displayValue
  }

  const clearMemory = () => {
    setState({displayValue: 0})
  }

  const setOperation = (operation) => {

  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Display value={state.displayValue}/>
      <View style={styles.buttons}>
        <Button label='AC' triple onClick={clearMemory}/>
        <Button label='/' operation onClick={() =>  setOperation('/')}/>
        <Button label='7' onClick={() => addDigit(7)}/>
        <Button label='8' onClick={() => addDigit(8)}/>
        <Button label='9' onClick={() => addDigit(9)}/>
        <Button label='*' operation onClick={() =>  setOperation('*')}/>
        <Button label='4' onClick={() => addDigit(4)}/>
        <Button label='5' onClick={() => addDigit(5)}/>
        <Button label='6' onClick={() => addDigit(6)}/>
        <Button label='-' operation onClick={() =>  setOperation('-')}/>
        <Button label='1' onClick={() => addDigit(1)}/>
        <Button label='2' onClick={() => addDigit(2)}/>
        <Button label='3' onClick={() => addDigit(3)}/>
        <Button label='+' operation onClick={() =>  setOperation('+')}/>
        <Button label='0' double onClick={() => addDigit(0)}/>
        <Button label='.' onClick={() => addDigit('.')}/>
        <Button label='=' operation onClick={() =>  setOperation('=')}/>
      </View>
    </View>
  );
}
