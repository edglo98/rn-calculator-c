import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {getContrastColor} from '../helpers/tools';

interface Props {
  content: string;
  bgColor?: string;
  fill?: boolean;
  onPress(x: string): void;
  selected?: boolean;
}

const CalculatorButton = ({
  content,
  bgColor = '#2d2d2d',
  fill = false,
  onPress,
  selected,
}: Props) => {
  const contrastColor =
    bgColor === '#ff9427' ? '#FFFFFF' : getContrastColor(bgColor);

  const color = selected ? bgColor : contrastColor;
  const backgroundColor = selected ? contrastColor : bgColor;
  const flexGrow = fill ? 1 : 0;

  return (
    <TouchableOpacity
      onPress={() => onPress(content)}
      style={[styles.calculatorButton, {backgroundColor, flexGrow}]}>
      <Text style={[styles.calculatorButtonText, {color}]}>{content}</Text>
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
