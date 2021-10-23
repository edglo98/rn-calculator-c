import {useState} from 'react';

export enum Operators {
  sum,
  subs,
  mult,
  div,
}

const useCalculator = () => {
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

  const handleOperation = () => {
    if (operator === undefined) {
      return;
    }
    const number1 = Number(prevNumber);
    const number2 = Number(number);

    const handleOperate = {
      [Operators.sum]: () => `${number1 + number2}`,
      [Operators.subs]: () => `${number1 - number2}`,
      [Operators.mult]: () => `${number1 * number2}`,
      [Operators.div]: () => `${number1 / number2}`,
    };

    setPrevNumber(number);
    setNumber(handleOperate[operator]());
  };

  return {
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
  };
};

export default useCalculator;
