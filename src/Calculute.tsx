import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Calculute() {
  const [result, setResult] = useState('');

  const onButtonClick = text => {
    console.log(text);
    if (text == '=') {
      return calculation();
    }
    setResult(result + text);
  };

  const calculation = () => {
    setResult(eval(result));
  };
  const onOperatorClick = text => {
    if (text == 'C') {
      return setResult(result.toString().substring(0, result.length - 1));
    }
    console.log(text);
    setResult(result + text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.calculation}>
        <Text style={styles.calculationtext}>{result}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                onButtonClick(1);
              }}>
              <Text style={styles.number}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                onButtonClick(2);
              }}>
              <Text style={styles.number}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                onButtonClick(3);
              }}>
              <Text style={styles.number}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                onButtonClick(4);
              }}>
              <Text style={styles.number}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                onButtonClick(5);
              }}>
              <Text style={styles.number}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                onButtonClick(6);
              }}>
              <Text style={styles.number}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                onButtonClick(7);
              }}>
              <Text style={styles.number}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                onButtonClick(8);
              }}>
              <Text style={styles.number}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                onButtonClick(9);
              }}>
              <Text style={styles.number}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                onButtonClick('.');
              }}>
              <Text style={styles.number}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                onButtonClick(0);
              }}>
              <Text style={styles.number}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                onButtonClick('=');
              }}>
              <Text style={styles.number}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.operator}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onOperatorClick('C');
            }}>
            <Text style={styles.operatorButtons}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onOperatorClick('/');
            }}>
            <Text style={styles.operatorButtons}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onOperatorClick('*');
            }}>
            <Text style={styles.operatorButtons}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onOperatorClick('-');
            }}>
            <Text style={styles.operatorButtons}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onOperatorClick('+');
            }}>
            <Text style={styles.operatorButtons}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calculation: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  buttons: {
    flex: 3,
    flexDirection: 'row',
  },
  numbers: {
    backgroundColor: 'grey',
    flex: 3,
  },
  operator: {
    backgroundColor: '#836fff',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  calculationtext: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  number: {
    color: 'white',
    fontSize: 30,
  },
  operatorButtons: {
    color: 'white',
    fontSize: 30,
  },
  button: {
    borderRadius: 10,
    backgroundColor: 'orange',
    height: 70,
    width: 70,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});