import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function LikesAndShare() {
  const [checked, setChecked] = useState('first');

  const handlePress = (value) => {
    setChecked(value);
  };

  return (
    <View style={styles.container}>
      <RadioButton.Group onValueChange={handlePress} value={checked}>
        <View style={styles.radioButtonContainer}>
          <RadioButton.Item label="People I Know" value="first" color="#000" />
          <RadioButton.Item label="Everyone" value="second" color="#000" />
        </View>
      </RadioButton.Group>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonContainer: {
    marginTop: 10,
  },
});
