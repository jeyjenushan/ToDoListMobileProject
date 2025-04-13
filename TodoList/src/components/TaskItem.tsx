import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

const TaskItem = ({ task, confirmDelete, startEditing, toggleComplete,toggleExpand,selectedTaskId }: any) => {
  return (
    <View style={styles.column2}>
      <Pressable onPress={() => toggleExpand(task.id)}>
        <View style={styles.row2}>
          <View style={styles.column3}>
            <Text
              style={[
                styles.text,
                task.completed && { textDecorationLine: 'line-through', textDecorationColor: '#FF0000' },
              ]}
            >
              {task.title}
            </Text>
            <Text
              style={[
                styles.text2,
                task.completed && { textDecorationLine: 'line-through', textDecorationColor: '#FF0000' },
              ]}
            >
              {task.note}
            </Text>
          </View>
          <Pressable onPress={() => confirmDelete(task.id)}>
            <Image
              source={{ uri: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4aab6f0c-74ec-4c53-a5e3-343bd13f4332' }}
              resizeMode={'stretch'}
              style={styles.image2}
            />
          </Pressable>
        </View>
      </Pressable>
      {selectedTaskId === task.id && (
        <View style={styles.view5}>
          <View style={styles.row3}>
            <Pressable style={styles.button5} onPress={()=>toggleComplete(task.id,task.completed)}>
              <Text style={styles.text3}>{"i"}</Text>
            </Pressable>
            {!task.completed && (
              <Pressable style={styles.button6} onPress={() => startEditing(task)}>
                <Image
                  source={{ uri: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e354443a-6abc-4a38-9ebb-ae69431c6c6d' }}
                  resizeMode={'stretch'}
                  style={styles.image3}
                />
              </Pressable>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  column2: { marginBottom: 470, marginHorizontal: 23 },
  column3: { flex: 1, marginRight: 12 },
  row2: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#242320', borderColor: '#A35709', borderRadius: 8, borderWidth: 2, padding: 16, marginBottom: 16 },
  image3: { width: 16, height: 16 },
  button5: { backgroundColor: '#242320', borderColor: '#A35709', borderRadius: 6, borderWidth: 1, paddingVertical: 9, paddingHorizontal: 16, marginRight: 8 },
  text3: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  text: { color: '#F0E3CA', fontSize: 22, fontFamily: 'Roboto-Regular', fontWeight: 'normal', marginBottom: 4 },
  button6: { backgroundColor: '#242320', borderColor: '#A35709', borderRadius: 6, borderWidth: 1, padding: 10 },
  image2: { borderRadius: 8, width: 32, height: 32 },
  view5: { alignItems: "flex-end",},
  row3: { flexDirection: 'row', alignItems: 'flex-start' },
  text2: { fontFamily: 'Roboto-Medium', color: '#F0E3CA', fontSize: 14 },
});

export default TaskItem;
