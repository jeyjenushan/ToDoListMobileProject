import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, SafeAreaView, ScrollView, Image, Text, Pressable } from 'react-native';
import { useTaskStore } from '../store/taskStore';
import { scaleWidth, scaleHeight, normalizeFont } from '../responsive/responsive';

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
	<View style={styles.textInputContainer}>
	
		<TextInput
        placeholder={"Title..."}
          placeholderTextColor="#F0E3CA"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

	</View>
	<View style={styles.textInputContainer}>

      <TextInput
    	placeholder={"About..."}
        placeholderTextColor="#F0E3CA"
        style={styles.input2}
        value={note}
        onChangeText={setNote}
      />
	  
			  </View>
          </View>

<Pressable onPress={handleAdd} style={styles.rectangleContainer}>

    <Image
      source={require("../assets/plus.png")} // Replace with your actual image URL
      resizeMode="contain"
      style={styles.addIcon}
    />

</Pressable>

    </View>



			

  );
};

const styles = StyleSheet.create({


	row: {
	
		flexDirection: "row",
		gap:8,
		marginTop: scaleHeight(23),
		marginLeft: scaleWidth(23),
	    height:scaleHeight(70),
	   width:scaleWidth(345),
	 
	},
	column: {

	    width:scaleWidth(267),
		height:scaleHeight(70),
		gap:6
	},
	textInputContainer:{
		width: scaleWidth(267),
		height: scaleHeight(32),
		backgroundColor:"#242320"
		


},





	input: {
      flex:1,
	  fontFamily: 'Roboto-Regular',
		fontSize: normalizeFont(14),
		fontWeight:400,
       lineHeight:scaleHeight(14),
	   borderColor: "#FF8303",
	   borderRadius: 4,
	   borderWidth: 1,
		color: '#F0E3CA',

	    paddingLeft: scaleWidth(14), // Replaced 'left' with padding
    paddingTop: scaleHeight(5), 
		
		
		


	},
	input2: {
		flex:1,
		fontFamily: 'Roboto-Regular',
		fontSize: normalizeFont(14),
		fontWeight:400,
        lineHeight:scaleHeight(18),
		borderColor: "#FF8303",
		borderRadius: 4,
		borderWidth: 1,
		paddingLeft: scaleWidth(14), // Replaced 'left' with padding
		paddingTop: scaleHeight(5), 
		color: '#F0E3CA',
	},



	  rectangleContainer: {
		width: scaleWidth(70),
		height: scaleHeight(70),
		borderRadius: 8,
		borderWidth: 2,
		borderColor: '#FF8303',
	  },
	  addIcon: {
		width: scaleWidth(24),
		height: scaleHeight(24),
		tintColor: '#FF8303',
		borderRadius: 1,
		marginTop:23,
		marginLeft:23
	
	  },







});

export default TodoInput;