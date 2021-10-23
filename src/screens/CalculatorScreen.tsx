import React from 'react';
import {Text, View} from 'react-native';
import {theme} from '../theme/theme';

const CalculatorScreen = () => {
  return (
    <View style={theme.calculatorContainer}>
      <Text style={theme.prevResult}>1,500.00</Text>
      <Text style={theme.result}>1,500.00</Text>

      <View>
        <View style={theme.calculatorButton}>
          <Text style={theme.calculatorButtonText}>1</Text>
        </View>
      </View>
    </View>
  );
};

export default CalculatorScreen;

// const styles = StyleSheet.create({});
