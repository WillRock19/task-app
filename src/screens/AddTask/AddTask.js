import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import styles from './style';

const initialState = {description: ''};

export default function AddTask(props) {
  const [state, setState] = useState(initialState);

  return (
    <Modal
      transparent={true}
      visible={props.isVisible}
      onRequestClose={props.onCancel}
      animationType="slide">
      <TouchableWithoutFeedback onPress={props.onCancel}>
        <View style={styles.background} />
      </TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text style={styles.header}>Nova Tarefa</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe a descrição da tarefa"
          value={state.description}
          onChangeText={description => setState({description})}
        />
        <View style={styles.buttons}>
          <TouchableOpacity onPress={props.onCancel}>
            <Text style={styles.button}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={props.onCancel}>
        <View style={styles.background} />
      </TouchableWithoutFeedback>
    </Modal>
  );
}
