import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useState, useRef} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import ChildScreen from './ChildScreen';
import SecondChild from './SecondChild';
interface Props {}
const HomeScreen: React.FC<Props> = ({navigation, route}: any) => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [user, setuser] = useState([]);
  const addTodo = useCallback(() => {
    setTodos((t): any => {
      return [...t, 'New Todo'];
    });
  }, []);
  const addUser = useCallback(() => {
    setuser((t): any => {
      return [...t, 'New User'];
    });
  }, []);
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <SafeAreaView>
        <StatusBar
          animated={true}
          backgroundColor="#fff"
          barStyle={'dark-content'}
        />
        <Text style={{color: '#000', textAlign: 'center', marginTop: 30}}>
          Home Compnent
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            alignSelf: 'center',
            padding: 8,
            borderRadius: 6,
            marginTop: 20,
          }}
          onPress={() => setCount(c => c + 1)}>
          <Text style={{color: '#fff', textAlign: 'center'}}>Increment</Text>
        </TouchableOpacity>
        <Text style={{color: '#000', textAlign: 'center', marginTop: 20}}>
          {count}
        </Text>
        <ChildScreen todos={todos} addTodo={addTodo} />
        <SecondChild addUser={addUser} user={user} />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
