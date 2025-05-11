import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === 'C') {
      setExpression('');
      setResult('');
    } else if (value === '=') {
      try {
        const evalResult = eval(expression);
        setResult(evalResult.toString());
      } catch (e) {
        setResult('Error');
      }
    } else {
      setExpression((prev) => prev + value);
    }
  };

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
    ['C']
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator</Text>

      <View style={styles.displayContainer}>
        <Text style={styles.expression}>{expression}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.buttonRow}>
            {row.map((btn) => (
              <TouchableOpacity
                key={btn}
                style={[styles.button, btn === 'C' && styles.clearButton]}
                onPress={() => handlePress(btn)}
              >
                <Text style={styles.buttonText}>{btn}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 20,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 32,
    color: '#facc15',
    textAlign: 'center',
    marginBottom: 20,
  },
  displayContainer: {
    marginBottom: 20,
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 12,
  },
  expression: {
    fontSize: 24,
    color: '#94a3b8',
    textAlign: 'right',
  },
  result: {
    fontSize: 36,
    color: '#f8fafc',
    textAlign: 'right',
    marginTop: 10,
  },
  buttonsContainer: {
    marginBottom: 30,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 20,
    backgroundColor: '#334155',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearButton: {
    backgroundColor: '#ef4444',
    flex: 1,
  },
  buttonText: {
    fontSize: 24,
    color: '#f1f5f9',
  },
});
