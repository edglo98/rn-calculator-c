import React from 'react';
import {Text, View} from 'react-native';
import CalculatorButton from '../components/CalculatorButton';
import useCalculator, {Operators} from '../hooks/useCalculator';
import {theme} from '../theme/theme';

const CalculatorScreen = () => {
  const {
    number,
    prevNumber,
    operator,
    reset,
    buildNumber,
    invertNumber,
    deleteCharacter,
    sum,
    subs,
    mult,
    div,
    handleOperation,
  } = useCalculator();

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
          content="x"
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
