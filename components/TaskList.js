import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    FlatList,
    StyleSheet
} from 'react-native';

export default class AddTask extends React.Component {
  
    renderItem = ({item, index}) => {

        const { onFinishedItem, onDeleteItem } = this.props;
    
        return (
          <View style={ styles.itemBox }>
            <View>
              <TouchableOpacity style={styles.button} onPress={ () => onFinishedItem(index) }>
                <Text> { (item.isFinished) ? `✅` : `🕘` } </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.textBox}>
              <Text style={styles.text}>{item.title}</Text>
            </View>
            <View style={{ justifyContent: 'center' }}>
              <TouchableOpacity style={styles.button} onPress={ () => onDeleteItem(index) }>
                <Text>{`❌`}</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }
    
      render() {
        return(
          <FlatList
            data={this.props.listData}
            extraData={this.props}
            keyExtractor={ (item, index) => index }
            renderItem={ this.renderItem }
          />
        );
      }
    }

const styles = StyleSheet.create({
    itemBox : {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      marginHorizontal : 10,
      marginTop: 10,
      paddingHorizontal: 10,
      paddingVertical: 15,
      borderRadius: 5,
      borderColor: 'gray',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowColor: 'gray',
      elevation: 2
    },

    button: {
        marginTop: -2
    },

    textBox: {
        flex: 1 
    },

    text: {
        color: 'black'
    }
  });