import React, { useState } from 'react';
import { View, Text, Pressable, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { normalizeFont, scaleHeight, scaleWidth } from '../constant/responsive';
import { Colors } from '../constant/Colors';

const TaskItem = ({
  task,
  confirmDelete,
  startEditing,
  toggleComplete,
  toggleExpand,
  selectedTaskId,
  isDeleting,
  setIsDeleting,
  handleSocialModel

}: any) => {
  const isExpanded = selectedTaskId === task.id;


  return (
    <View style={{ marginBottom: isExpanded ? scaleHeight(8) : scaleHeight(16) }}>
      <Pressable onPress={() =>  {
        setIsDeleting(false)
        toggleExpand(task.id);}}>
        <View style={styles.row2}>
          <View style={styles.column3}>
            <Text
              style={[
                styles.text,
                task.completed && {
                  textDecorationLine: 'line-through',
                  textDecorationColor: '#1B1A17',
                  color: '#A35709',
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
                  textDecorationColor: '#1B1A17',
                  color: '#A35709',
                },
              ]}
            >
              {task.note}
            </Text>
          </View>
          
  
          <Pressable onPress={() => {setIsDeleting(true);
            confirmDelete(task.id);}} style={styles.rectangleContainer}>
            <Image
              source={require('../../assets/Images/cross.png')}
              resizeMode="contain"
              style={styles.crossIcon}
            />
          </Pressable>
        </View>
        </Pressable>
  

      {/* Tools only if expanded and not deleting */}
      {isExpanded && !isDeleting && (
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
                <Image
                  source={require('../../assets/Images/i.png')}
                  resizeMode="stretch"
                  style={styles.image3}
                />
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
