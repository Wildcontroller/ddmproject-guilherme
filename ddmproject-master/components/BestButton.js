import React from 'react';
import { useState } from 'react';
import {Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../reducers/counterSlice';

const BestButton = ( props ) => {
  console.log(props);
  var {isIncrement, texto} = props;

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const [buttonText, setbuttonText] = useState(texto);

  const onPressHandler = () => {
    isIncrement? dispatch(increment(counter)) : dispatch(decrement(counter));
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={onPressHandler}>
        <Text style={styles.button_text}>{buttonText}</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    height: 30,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E6738',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    fontSize: 30,
  },
  button_text: {
    color: '#ffffff',
    textAlign: 'center',
  },
  text: {
    fontSize: 10,
  }}
);

export default BestButton;
