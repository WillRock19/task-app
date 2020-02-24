import React, {Component} from 'react';
import {Modal, View, TouchableWithoutFeedback} from 'react-native';

import styles from './style';

export default function AddTask(props) {
  return (
    <Modal
      transparent={true}
      visible={props.isVisible}
      onRequestClose={props.onCancel}
      animationType="slide">
      <TouchableWithoutFeedback onPress={props.onCancel}>
        <View style={styles.background} />
      </TouchableWithoutFeedback>
    </Modal>
  );
}
