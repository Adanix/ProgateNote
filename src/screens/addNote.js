// src/screens/AddNote.js
import React, { useState } from 'react';
import { View, StyleSheet, Text, Modal } from 'react-native';
import CustomButton from '../components/customButton';
import CustomTextInput from '../components/customTextInput';

const AddNote = ({ setCurrentPage, addNote }) => {
   const [title, setTitle] = useState('');
   const [desc, setDesc] = useState('');
   const [saveModalVisible, setSaveModalVisible] = useState(false);
   const [backModalVisible, setBackModalVisible] = useState(false);

   const handleSave = () => {
      setSaveModalVisible(true);
   };

   const confirmSave = () => {
      addNote(title, desc);
      setSaveModalVisible(false);
      setCurrentPage('home');
   };

   const handleBack = () => {
      setBackModalVisible(true);
   };

   const confirmBack = () => {
      setBackModalVisible(false);
      setCurrentPage('home');
   };

   return (
      <View style={styles.container}>
         <Text style={styles.pageTitle}>Tambahkan Note</Text>
         <CustomTextInput
            text={title}
            onChange={setTitle}
            label="Judul"
            multiline={false}
            numberOfLines={1}
         />
         <CustomTextInput
            text={desc}
            onChange={setDesc}
            label="Deskripsi"
            multiline
            numberOfLines={4}
         />
         <View style={styles.spacerTop}>
            <CustomButton
               backgroundColor="#247881"
               color="#fff"
               text="Simpan"
               width="100%"
               onPress={handleSave}
            />
         </View>
         <View style={styles.spacerTop}>
            <CustomButton
               backgroundColor="#DDDDDD"
               color="#203239"
               text="Kembali ke Home"
               width="100%"
               onPress={handleBack}
            />
         </View>
         <Modal
            transparent={true}
            visible={saveModalVisible}
            onRequestClose={() => setSaveModalVisible(!saveModalVisible)}
         >
            <View style={styles.centeredView}>
               <View style={styles.modalView}>
                  <Text style={styles.modalText}>Apakah Anda yakin ingin menambahkan catatan ini?</Text>
                  <View style={styles.modalButtons}>
                     <CustomButton
                        backgroundColor="#247881"
                        color="#fff"
                        text="Ya"
                        fontSize={12}
                        width={100}
                        onPress={confirmSave}
                        style={styles.modalButton}
                     />
                     <CustomButton
                        backgroundColor="#DDDDDD"
                        color="#203239"
                        text="Tidak"
                        fontSize={12}
                        width={100}
                        onPress={() => setSaveModalVisible(!saveModalVisible)}
                        style={styles.modalButton}
                     />
                  </View>
               </View>
            </View>
         </Modal>
         <Modal
            transparent={true}
            visible={backModalVisible}
            onRequestClose={() => setBackModalVisible(!backModalVisible)}
         >
            <View style={styles.centeredView}>
               <View style={styles.modalView}>
                  <Text style={styles.modalText}>Apakah Anda yakin tidak jadi menambahkan catatan?</Text>
                  <View style={styles.modalButtons}>
                     <CustomButton
                        backgroundColor="#247881"
                        color="#fff"
                        text="Ya"
                        fontSize={12}
                        width={100}
                        onPress={confirmBack}
                        style={styles.modalButton}
                     />
                     <CustomButton
                        backgroundColor="#DDDDDD"
                        color="#203239"
                        text="Tidak"
                        fontSize={12}
                        width={100}
                        onPress={() => setBackModalVisible(!backModalVisible)}
                        style={styles.modalButton}
                     />
                  </View>
               </View>
            </View>
         </Modal>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
   },
   pageTitle: {
      marginTop: 20,
      fontSize: 20,
      fontWeight: '700',
      textAlign: 'center',
      color: '#203239',
   },
   spacerTop: {
      marginTop: 30,
   },
   centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
   },
   modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
   },
   modalText: {
      marginBottom: 15,
      textAlign: 'center',
   },
   modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   modalButton: {
      marginHorizontal: 10, // Add horizontal margin to space out the buttons
   },
});

export default AddNote;
