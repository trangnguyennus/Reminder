import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

export default class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data : [
        { title: 'Stand-up meeting', isFinished: true },
        { title: 'Finish task 1 ', isFinished: false },
        { title: 'BA Meeting', isFinished: false },
        { title: 'Finish task 2', isFinished: false },
        { title: 'Finish task 3', isFinished: false },
      ]
    }
  }

  onAddNewTask = (taskName) => {
    const newTask = { title: taskName, isFinished: false }
    const newTaskList = [ ...this.state.data, newTask ]

    this.setState({ data: newTaskList });
  }

  onFinishedItem = (index) => {
    let newTaskList = this.state.data;
    newTaskList[index].isFinished = true; 
    this.setState({ data: newTaskList });
  }

  onDeleteItem = (index) => {
    let newTaskList = this.state.data.filter( (item, i) => i != index );
    this.setState({ data: newTaskList });
  }

  render() {
    return (
      <View style={ styles.container }>
        <AddTask onAddNewTask={ this.onAddNewTask } />
        <TaskList 
          listData={ this.state.data } 
          onFinishedItem={ this.onFinishedItem } 
          onDeleteItem={ this.onDeleteItem }
        />
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1F5FE'
  }
});