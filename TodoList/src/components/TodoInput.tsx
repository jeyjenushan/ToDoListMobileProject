import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, SafeAreaView, ScrollView, Image, Text, Pressable } from 'react-native';
import { useTaskStore } from '../store/taskStore';

const TodoInput = () => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const { addTask } = useTaskStore();

  const handleAdd = () => {
    if (title.trim()) {
      addTask({ title, note });
      setTitle('');
      setNote('');
    }
  };

  return (

<View style={styles.row}>
<View style={styles.column}>
      <TextInput
        placeholder={"Title..."}
          placeholderTextColor="#F0E3CA"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
    	placeholder={"About..."}
        placeholderTextColor="#F0E3CA"
        style={styles.input2}
        value={note}
        onChangeText={setNote}
      />
          </View>
          <Pressable onPress={handleAdd}>
  <Image
    source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6152f505-45d9-4964-8e82-e9badb6bba4e" }}
    resizeMode="stretch"
    style={styles.image}
  />
</Pressable>

    </View>

			

  );
};

const styles = StyleSheet.create({


	column: {
		flex: 1,
		marginRight: 8,
	},

	image: {
		width: 70,
		height: 70,
	},
	input: {
		color: "#F0E3CA",
		fontSize: 14,
		marginBottom: 6,
		backgroundColor: "#242320",
		borderColor: "#FF8303",
		borderRadius: 4,
		borderWidth: 1,
		paddingVertical: 7,
		paddingLeft: 14,
		paddingRight: 28,
	},
	input2: {
		color: "#F0E3CA",
		fontSize: 14,
		backgroundColor: "#242320",
		borderColor: "#FF8303",
		borderRadius: 4,
		borderWidth: 1,
		paddingVertical: 7,
		paddingLeft: 9,
		paddingRight: 18,
	},
	row: {
		alignSelf: "stretch",
		flexDirection: "row",
		alignItems: "flex-start",
		marginTop: 23,
		marginBottom: 72,
	},


});

export default TodoInput;