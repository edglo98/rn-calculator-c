import {StyleSheet} from 'react-native';

export const theme = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  prevResult: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },

  calculatorButton: {
    height: 80,
    width: 80,
    backgroundColor: '#9b9b9b',
    borderRadius: 100,
    justifyContent: 'center',
  },
  calculatorButtonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'black',
    fontWeight: '400',
  },
});
