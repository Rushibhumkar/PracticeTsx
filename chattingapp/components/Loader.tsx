import {StyleSheet, Text, View, Modal, Dimensions} from 'react-native';
import React from 'react';

const Loader = () => {
  return (
    <Modal visible transparent>
      <View style={styles.modalView}>
        <View style={styles.mainView}></View>
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  modalView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(0,0,0,.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainView: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
