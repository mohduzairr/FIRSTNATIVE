import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import DropDownPicker from 'react-native-dropdown-picker'
import { useState } from 'react';

export const DropdownComponent=()=> {
  const [dropdown, setdropdown] = useState([
    {label: 'English', value: 'en'},
    {label: 'Deutsch', value: 'de'},
    {label: 'French', value: 'fr'},
])
  return (
    <View style={styles.container}>
      
      <DropDownPicker
          items={dropdown}
          defaultIndex={0}
          containerStyle={{height: 40}}
          onChangeItem={item => console.log(item.label, item.value)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    // backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
