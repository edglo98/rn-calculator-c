import {StyleSheet} from 'react-native';

export const theme = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 10,
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

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
});
