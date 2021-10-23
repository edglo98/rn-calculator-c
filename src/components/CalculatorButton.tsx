import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {getContrastColor} from '../helpers/tools';

interface Props {
  content: string;
  color?: string;
  fill?: boolean;
}

const CalculatorButton = ({
  content,
  color = '#2d2d2d',
  fill = false,
}: Props) => {
  const contrastColor = getContrastColor(color);
  const flexGrow = fill ? 1 : 0;
  return (
    <TouchableOpacity
      style={[styles.calculatorButton, {backgroundColor: color, flexGrow}]}>
      <Text style={[styles.calculatorButtonText, {color: contrastColor}]}>
        {content}
      </Text>
    </TouchableOpacity>
  );
};

export default CalculatorButton;

const styles = StyleSheet.create({
  calculatorButton: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  calculatorButtonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'black',
    fontWeight: '400',
  },
});
