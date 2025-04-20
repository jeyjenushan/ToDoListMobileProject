import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Image, Pressable } from 'react-native';
import { useTaskStore } from '../services/taskStore';
import { scaleWidth, scaleHeight, normalizeFont } from '../constant/responsive';
import { Colors } from '../constant/Colors';



const TodoInput = () => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const { addTask } = useTaskStore();
  const titleInputRef = useRef<TextInput>(null);
  const noteInputRef = useRef<TextInput>(null);

  useEffect(() => {
    const focusSequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
      titleInputRef.current?.focus();
      await new Promise(resolve => setTimeout(resolve, 300));
      noteInputRef.current?.focus();
    };
    focusSequence();
  }, []);

  const handleAdd = () => {
    if (title.trim()) {
      addTask({ title, note });
      setTitle('');
      setNote('');
      // Re-focus both inputs after adding
      titleInputRef.current?.focus();
      setTimeout(() => noteInputRef.current?.focus(), 100);
    }
  };

  return (

<View style={styles.row}>


<View style={styles.column}>
	<View style={styles.textInputContainer}>
	<TextInput
            ref={titleInputRef}
            placeholder={"Title..."}
            placeholderTextColor={Colors.textPrimary}
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            autoFocus={true}
            returnKeyType="next"
            onSubmitEditing={() => noteInputRef.current?.focus()}
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            ref={noteInputRef}
            placeholder={"About..."}
            placeholderTextColor={Colors.textPrimary}
            style={styles.input2}
            value={note}
            onChangeText={setNote}
            autoFocus={true}
            returnKeyType="done"
          />
        </View>
          </View>

<Pressable onPress={handleAdd} style={styles.rectangleContainer}>

    <Image
      source={require("../../assets/Images/plus.png")} // Replace with your actual image URL
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
		marginTop: scaleHeight(47),
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
	    backgroundColor: Colors.backgroundDark
		


},





	input: {
      flex:1,
	  fontFamily: 'Roboto-Regular',
		fontSize: normalizeFont(14),
		fontWeight:400,
       lineHeight:scaleHeight(14),
	   borderColor: Colors.accent,
	   borderRadius: 4,
	   borderWidth: 1,
	   color: Colors.textPrimary,
	   backgroundColor:Colors.backgroundDark,

	    paddingLeft: scaleWidth(14), // Replaced 'left' with padding
    paddingTop: scaleHeight(5), 
		
		
		


	},
	input2: {
		flex:1,
		fontFamily: 'Roboto-Regular',
		fontSize: normalizeFont(14),
		fontWeight:400,
        lineHeight:scaleHeight(18),
		borderColor: Colors.accent,
		borderRadius: 4,
		borderWidth: 1,
		paddingLeft: scaleWidth(14), // Replaced 'left' with padding
		paddingTop: scaleHeight(5), 
		backgroundColor:Colors.backgroundDark,
		color: Colors.textPrimary,
	},



	  rectangleContainer: {
		width: scaleWidth(70),
		height: scaleHeight(70),
		borderRadius: 8,
		borderWidth: 2,
	    borderColor: Colors.accent,
	  },
	  addIcon: {
		width: scaleWidth(24),
		height: scaleHeight(24),
	    tintColor: Colors.accent,
		borderRadius: 1,
		marginTop:23,
		marginLeft:23
	
	  },







});

export default TodoInput;