import React, { useState } from 'react';
import { View, Text, Pressable, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { normalizeFont, scaleHeight, scaleWidth } from '../constant/responsive';
import { Colors } from '../constant/Colors';
import { TaskItemProps } from '../types/Task';

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  confirmDelete,
  startEditing,
  toggleComplete,
  toggleExpand,
  selectedTaskId,
  handleSocialModel,
  cancelEditing

}: any) => {
  let isExpanded = selectedTaskId === task.id;
  const [isDeleted,setIsDeleted]=useState(false)

  return (
    <View style={{ marginBottom: isExpanded ? scaleHeight(8) : scaleHeight(16) }}>
   
        <View style={styles.row2}>
          <View style={styles.column3}>
          <Pressable onPress={() =>  {
        setIsDeleted(false)
 toggleExpand(task.id);}}>
            <Text
              style={[
                styles.text,
                task.completed && {
                  textDecorationLine: 'line-through',
                  textDecorationColor: Colors.backgroundLight,
                  color: Colors.primary,
                },
              ]}
            >
              {task.title}
            </Text>
            <Text
              style={[
                styles.text2,
                task.completed && {
                  textDecorationLine: 'line-through',
                  textDecorationColor: Colors.backgroundLight,
                  color: Colors.primary,
                },
              ]}
            >
              {task.note}
            </Text>
            </Pressable>
          </View>
          
          <Pressable 
          onPress={(e) => {
            e.stopPropagation(); 
            // Prevent event bubbling
            setIsDeleted(true)
            confirmDelete(task.id);
          }}  style={styles.rectangleContainer}>
            <Image
              source={require('../../assets/Images/cross.png')}
              resizeMode="contain"
              style={styles.crossIcon}
            />
          </Pressable>
        </View>
 
  

      {/* Tools only if expanded and not deleting */}
      {(isExpanded && !isDeleted) && (
        <View style={{ marginTop: scaleHeight(8), marginBottom: scaleHeight(4) }}>
          <View style={styles.view5}>
            <View style={styles.row3}>
              <TouchableOpacity style={styles.imageContainer}
              onPress={handleSocialModel}
              >
                <Image
                  source={require('../../assets/Images/share.png')}
                  resizeMode="stretch"
                  style={styles.image2}
                />
              </TouchableOpacity>

              <Pressable
                style={styles.imageContainer}
                onPress={() => toggleComplete(task.id, task.completed)}
              >
         <Text style={styles.idecorator}>i</Text>
              </Pressable>

              {!task.completed && (
                <Pressable
                  style={styles.imageContainer}
                  onPress={() => startEditing(task)}
                >
                  <Image
                    source={require('../../assets/Images/Edit.png')}
                    resizeMode="stretch"
                    style={styles.image2}
                  />
                </Pressable>
              )}
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  view5: {
    alignItems: 'flex-end',
  },
  row3: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: scaleWidth(124),
    height: scaleHeight(36),
    gap: scaleWidth(8),
  },
  imageContainer: {
    borderRadius: 6,
    width: scaleWidth(36),
    height: scaleHeight(36),
    borderWidth: 1,
    backgroundColor: Colors.backgroundDark,
    borderColor: Colors.border,
  },
  image2: {
    width: scaleWidth(16),
    height: scaleHeight(16),
    top: scaleHeight(10),
    left: scaleWidth(10),
  },
  image3: {
    width: scaleWidth(5),
    height: scaleHeight(18),
    top: scaleHeight(9),
    left: scaleWidth(16),
  },
  idecorator:{
    fontSize: normalizeFont(16),
    fontFamily: 'Roboto-Regular',
    fontWeight: 700,
    lineHeight:normalizeFont(18),
    alignItems:"center",
    justifyContent:'center',
    color:Colors.white,
    top:scaleHeight(9),
    left:scaleWidth(16)
  

  },
  row2: {
    width: scaleWidth(345),
    height: scaleHeight(72),
    borderRadius: 8,
    borderWidth: 2,
    padding: 16,
    gap: 16,
    backgroundColor: Colors.backgroundDark,
    borderColor: Colors.border,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  column3: {
    flex: 1,
    width: scaleWidth(265),
    height: scaleHeight(46),
  },
  rectangleContainer: {
    width: scaleWidth(32),
    height: scaleHeight(32),
    backgroundColor: Colors.backgroundLight,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: Colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  crossIcon: {
    width: scaleWidth(10.97),
    height: scaleHeight(10.97),
    tintColor: Colors.accent,
    borderRadius: 1,
  },
  text: {
    color: Colors.textPrimary,
    fontSize: normalizeFont(22),
    fontFamily: 'Roboto-Medium',
    fontWeight: 'normal',
    marginBottom: 4,
  },
  text2: {
    fontFamily: 'Roboto-Regular',
    color: Colors.textPrimary,
    fontSize: 14,
  },
});

export default TaskItem;
