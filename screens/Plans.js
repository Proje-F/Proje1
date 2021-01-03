import React, { useState, useCallback, useEffect}
  from 'react';
import
  {
    SafeAreaView,
    StatusBar,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Modal,
    Image,
    ImageBackground,
    TextInput,
    AsyncStorage
  } from 'react-native';

import * as Animatable from 'react-native-animatable';
import TaskList from '../components/TaskList';
import styles from './global';
import Layout from '../components/global/Layout';

const AnimatableBtn =
  Animatable.createAnimatableComponent(TouchableOpacity);

export default function Plans({ navigation }) {
  const [task, setTask] = useState([]);
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState('');

  useEffect(() => {
    async function loadTasks() {
      const taskStorage = await AsyncStorage.getItem('@task');

      if(taskStorage){
        setTask(JSON.parse(taskStorage));
      }
    }

    loadTasks();
  }, []);

  useEffect(() => {
    async function saveTasks(){
      await AsyncStorage.setItem('@task', JSON.stringify(task));
    }

    saveTasks();
  }, [task]);

  function handleAdd() {
    if(input === '') return;

    const data = {
      key: input,
      task: input
    };

    setTask([...task, data]);
    setVisible(false);
    setInput('');
  }

  const handleDelete = useCallback((data) => {
    const find = task.filter(result => result.key !== data.key);

    setTask(find);
  });

  return (
	<Layout navigation={navigation} bold title="Okunacak Kitap Listesi">
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#171D32"
        barStyle="light-content"
      />
      <FlatList
        marginHorizontal={10}
        showsHorizontalScrollIndicator={false}
        data={ task }
        keyExtractor={(item) => String(item.key)}
        renderItem={({ item }) =>
          <TaskList
            data={ item }
            handleDelete={ handleDelete }
          />
        }
      />
      <Modal
        animationType="slide"
        transparent={false}
        translucent={false}
        visible={visible}
      >
        <SafeAreaView style={styles.modal}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              {/* <Ionicons
                style={{marginLeft: 5, marginRight: 5}}
                name="md-arrow-back"
                size={30}
                color="#FAFAFA"
              /> */}
              <Image
                source={require('../assets/arrow.png')}
              /> 
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Yeni Kitap Ekle</Text>
          </View>

          <Animatable.View
            style={styles.modalBody}
            useNativeDriver
            animation="fadeInUp"
          >
            <TextInput
              multiline={true}
              placeholder="Eklenecek diğer kitap ismi"
              placeholderTextColor="#737373"
              autoCorrect={false}
              style={styles.modalInput}
              value={ input }
              onChangeText={(text) => setInput(text)}
            />

            <TouchableOpacity
              style={styles.modalAddBtn}
              onPress={ handleAdd }
            >
              <Text style={styles.modalAddText}>Ekle</Text>
            </TouchableOpacity>
          </Animatable.View>
        </SafeAreaView>

      </Modal>

      <AnimatableBtn
        style={styles.addBtn}
        useNativeDriver
        animation="fadeInUp"
        duration={2000}
        onPress={() => setVisible(true)}
      >
        {/* <Ionicons
          name="ios-add"
          size={35}
          color="#FFF"
        /> */}
        <Image
          source={require('../assets/plus.png')}
        /> 
      </AnimatableBtn>
    </SafeAreaView>
	</Layout>
  );
};