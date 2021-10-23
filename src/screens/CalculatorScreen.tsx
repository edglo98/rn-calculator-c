import React from 'react';
import {Text, View} from 'react-native';
import CalculatorButton from '../components/CalculatorButton';
import {theme} from '../theme/theme';

const CalculatorScreen = () => {
  return (
    <View style={theme.calculatorContainer}>
      <Text style={theme.prevResult}>1,500.00</Text>
      <Text style={theme.result}>1,500.00</Text>

      <View style={theme.buttonRow}>
        <CalculatorButton color="#9b9b9b" content="C" />
        <CalculatorButton color="#9b9b9b" content="+/-" />
        <CalculatorButton color="#9b9b9b" content="del" />
        <CalculatorButton color="#ff9427" content="÷" />
      </View>
      <View style={theme.buttonRow}>
        <CalculatorButton content="7" />
        <CalculatorButton content="8" />
        <CalculatorButton content="9" />

        <CalculatorButton color="#ff9427" content="X" />
      </View>
      <View style={theme.buttonRow}>
        <CalculatorButton content="4" />
        <CalculatorButton content="5" />
        <CalculatorButton content="6" />
        <CalculatorButton color="#ff9427" content="-" />
      </View>
      <View style={theme.buttonRow}>
        <CalculatorButton content="1" />
        <CalculatorButton content="2" />
        <CalculatorButton content="3" />
        <CalculatorButton color="#ff9427" content="+" />
      </View>
      <View style={theme.buttonRow}>
        <CalculatorButton content="0" fill />
        <CalculatorButton content="." />
        <CalculatorButton color="#ff9427" content="=" />
      </View>
    </View>
  );
};

export default CalculatorScreen;

// const styles = StyleSheet.create({});
