import React, {useState} from 'react';
import {Text, View} from 'react-native';
import CalculatorButton from '../components/CalculatorButton';
import {theme} from '../theme/theme';

enum Operators {
  sum,
  subs,
  mult,
  div,
}

const CalculatorScreen = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('');
  const [operator, setOperator] = useState<Operators>();

  const reset = () => {
    setNumber('0');
    setPrevNumber('');
    setOperator(undefined);
  };

  const buildNumber = (numberLikeText: string) => {
    if (number.includes('.') && numberLikeText === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberLikeText === '0' && !number.includes('.')) {
        return setNumber(number);
      }

      if (
        !number.includes('.') &&
        numberLikeText !== '0' &&
        numberLikeText !== '.'
      ) {
        const newNumber = number.startsWith('-0')
          ? '-' + numberLikeText
          : numberLikeText;
        return setNumber(newNumber);
      }
    }

    setNumber(number + numberLikeText);
  };

  const invertNumber = () => {
    const inverted =
      number.charAt(0) === '-'
        ? number.substring(1, number.length)
        : '-' + number;

    setNumber(inverted);
  };

  const deleteCharacter = () => {
    let newNumber = number.substring(0, number.length - 1);

    if (newNumber.charAt(newNumber.length - 1) === '.') {
      newNumber = newNumber.replace('.', '');
    }

    if (newNumber === '-' || newNumber === '') {
      newNumber = '0';
    }

    setNumber(newNumber);
  };

  const setOperatorNumber = () => {
    const prevNumberToSet = number.endsWith('.') ? number.slice(0, -1) : number;

    setPrevNumber(prevNumberToSet);
    setNumber('0');
  };

  const sum = () => {
    if (prevNumber === '' && number === '0') {
      return;
    }
    setOperatorNumber();
    setOperator(Operators.sum);
  };

  const subs = () => {
    if (prevNumber === '' && number === '0') {
      return;
    }
    setOperatorNumber();
    setOperator(Operators.subs);
  };

  const mult = () => {
    if (prevNumber === '' && number === '0') {
      return;
    }
    setOperatorNumber();
    setOperator(Operators.mult);
  };

  const div = () => {
    if (prevNumber === '' && number === '0') {
      return;
    }
    setOperatorNumber();
    setOperator(Operators.div);
  };

  const handleOperation = () => {};

  return (
    <View style={theme.calculatorContainer}>
      <Text style={theme.prevResult}>{prevNumber}</Text>
      <Text style={theme.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={theme.buttonRow}>
        <CalculatorButton bgColor="#9b9b9b" content="C" onPress={reset} />
        <CalculatorButton
          bgColor="#9b9b9b"
          content="+/-"
          onPress={invertNumber}
        />
        <CalculatorButton
          bgColor="#9b9b9b"
          content="del"
          onPress={deleteCharacter}
        />
        <CalculatorButton
          bgColor="#ff9427"
          selected={operator === Operators.div}
          content="÷"
          onPress={div}
        />
      </View>
      <View style={theme.buttonRow}>
        <CalculatorButton content="7" onPress={buildNumber} />
        <CalculatorButton content="8" onPress={buildNumber} />
        <CalculatorButton content="9" onPress={buildNumber} />

        <CalculatorButton
          bgColor="#ff9427"
          selected={operator === Operators.mult}
          content="X"
          onPress={mult}
        />
      </View>
      <View style={theme.buttonRow}>
        <CalculatorButton content="4" onPress={buildNumber} />
        <CalculatorButton content="5" onPress={buildNumber} />
        <CalculatorButton content="6" onPress={buildNumber} />
        <CalculatorButton
          bgColor="#ff9427"
          selected={operator === Operators.subs}
          content="-"
          onPress={subs}
        />
      </View>
      <View style={theme.buttonRow}>
        <CalculatorButton content="1" onPress={buildNumber} />
        <CalculatorButton content="2" onPress={buildNumber} />
        <CalculatorButton content="3" onPress={buildNumber} />
        <CalculatorButton
          bgColor="#ff9427"
          selected={operator === Operators.sum}
          content="+"
          onPress={sum}
        />
      </View>
      <View style={theme.buttonRow}>
        <CalculatorButton content="0" fill onPress={buildNumber} />
        <CalculatorButton content="." onPress={buildNumber} />
        <CalculatorButton
          bgColor="#ff9427"
          content="="
          onPress={handleOperation}
        />
      </View>
    </View>
  );
};

export default CalculatorScreen;

// const styles = StyleSheet.create({});
