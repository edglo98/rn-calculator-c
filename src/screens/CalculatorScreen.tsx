import React, {useState} from 'react';
import {Text, View} from 'react-native';
import CalculatorButton from '../components/CalculatorButton';
import {theme} from '../theme/theme';

const CalculatorScreen = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('');

  const reset = () => {
    setNumber('0');
    setPrevNumber('');
  };

  const makeNumber = (numberLikeText: string) => {
    setNumber(number + numberLikeText);
  };

  return (
    <View style={theme.calculatorContainer}>
      <Text style={theme.prevResult}>{prevNumber}</Text>
      <Text style={theme.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={theme.buttonRow}>
        <CalculatorButton color="#9b9b9b" content="C" onPress={reset} />
        <CalculatorButton color="#9b9b9b" content="+/-" onPress={reset} />
        <CalculatorButton color="#9b9b9b" content="del" onPress={reset} />
        <CalculatorButton color="#ff9427" content="÷" onPress={reset} />
      </View>
      <View style={theme.buttonRow}>
        <CalculatorButton content="7" onPress={makeNumber} />
        <CalculatorButton content="8" onPress={makeNumber} />
        <CalculatorButton content="9" onPress={makeNumber} />

        <CalculatorButton color="#ff9427" content="X" onPress={reset} />
      </View>
      <View style={theme.buttonRow}>
        <CalculatorButton content="4" onPress={makeNumber} />
        <CalculatorButton content="5" onPress={makeNumber} />
        <CalculatorButton content="6" onPress={makeNumber} />
        <CalculatorButton color="#ff9427" content="-" onPress={reset} />
      </View>
      <View style={theme.buttonRow}>
        <CalculatorButton content="1" onPress={makeNumber} />
        <CalculatorButton content="2" onPress={makeNumber} />
        <CalculatorButton content="3" onPress={makeNumber} />
        <CalculatorButton color="#ff9427" content="+" onPress={reset} />
      </View>
      <View style={theme.buttonRow}>
        <CalculatorButton content="0" fill onPress={makeNumber} />
        <CalculatorButton content="." onPress={makeNumber} />
        <CalculatorButton color="#ff9427" content="=" onPress={reset} />
      </View>
    </View>
  );
};

export default CalculatorScreen;

// const styles = StyleSheet.create({});
