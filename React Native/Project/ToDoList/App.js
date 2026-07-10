import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }
  
  function addGoalHandler(enteredGoalText) {
    setCourseGoals(courseGoals => [
      ...courseGoals, 
      {text: enteredGoalText, id: Math.random().toString()}
    ]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <> 
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#123812ff" onPress={() => startAddGoalHandler()} />
        <GoalInput visible={modalIsVisible} onAddGoalHandler={addGoalHandler} onCancel={endAddGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList 
            alwaysBounceVertical={false}
            data={courseGoals} 
            keyboardShouldPersistTaps="handled"
            renderItem={itemData => {
              return (
                <GoalItem 
                text={itemData.item.text} 
                id={itemData.item.id}
                onDeleteGoal={deleteGoalHandler} 
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />

        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 50,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  }
  });


  