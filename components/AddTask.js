import React from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Platform,
    StyleSheet
} from 'react-native';

export default class AddTask extends React.Component {
    constructor(props){
        super(props);
        this.state =  {
            newTask: ''
        }
    }

    onAddNewTask = () => {
        this.props.onAddNewTask(this.state.newTask)
        this.setState({newTask: ''})
    }

    render() {
        return (
            <View style={styles.addTaskView}>
                <Text style={styles.header}>Reminder</Text>
                <View style={styles.addArea}>
                    <View style={styles.inputBox}>
                    <TextInput style={styles.input} 
                        placeholder = 'Enter New Task'
                        returnKeyType="done"
                        underlineColorAndroid="transparent"
                        value={`${this.state.newTask}`}
                        onSubmitEditing={this.onAddNewTask }
                        onChangeText={ text => this.setState({ newTask: text }) }
                    />
                    </View>

                    <TouchableOpacity style={styles.button} onPress = {this.onAddNewTask}>
                        <Text style = {styles.buttonText}>Add</Text>
                    </TouchableOpacity>

                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    addTaskView: {
        ...Platform.select({
            ios: {
              height: 94,
              paddingTop: 20,
            },
            android: {
              height: 75,
            }  
          }),
          paddingHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FAFAFA',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.2,
          shadowColor: 'gray',
          elevation: 2
    },

    header: {
        fontSize: 18,
        marginBottom: 10
    },

    addArea: {
        flexDirection: 'row'
    },

    inputBox: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    
    input: {
        flex: 1,
        height: 30,
        fontSize: 15,
        padding: 5, 
        borderRadius: 5, 
        borderColor: 'lightgray',
        borderWidth: 1,
    },
    button : {
        marginLeft: 10,
        borderRadius: 5,
        backgroundColor: '#2196F3', 
        padding: 7
      },
    buttonText : {
        color: 'white'
    }
})