// src/screens/Home.js
import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text, Modal } from 'react-native';
import CustomButton from '../components/customButton';

const NoteCard = ({ item, setCurrentPage, setCurrentNote, deleteNote }) => {
   const [modalVisible, setModalVisible] = useState(false);

   const handleDelete = () => {
      setModalVisible(true);
   };

   const confirmDelete = (id) => {
      deleteNote(id);
      setModalVisible(false);
   };

   return (
      <View style={styles.card}>
         <Text style={styles.cardTitle}>{item.title}</Text>
         <Text>{item.desc}</Text>
         <View style={styles.buttons}>
            <CustomButton
               backgroundColor="#FFC300"
               color="#151D3B"
               text="Ubah"
               fontSize={12}
               width={100}
               onPress={() => {
                  setCurrentNote(item);
                  setCurrentPage('edit');
               }}
            />
            <CustomButton
               backgroundColor="#D82148"
               color="#fff"
               text="Hapus"
               fontSize={12}
               width={100}
               onPress={handleDelete}
            />
         </View>
         <Modal
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
         >
            <View style={styles.centeredView}>
               <View style={styles.modalView}>
                  <Text style={styles.modalText}>Apakah Anda yakin ingin menghapus catatan ini?</Text>
                  <View style={styles.modalButtons}>
                     <CustomButton
                        style={styles.ya}
                        backgroundColor="#D82148"
                        color="#fff"
                        text="Ya"
                        fontSize={12}
                        width={100}
                        onPress={() => confirmDelete(item.id)}
                     />
                     <CustomButton
                        backgroundColor="#DDDDDD"
                        color="#203239"
                        text="Tidak"
                        fontSize={12}
                        width={100}
                        onPress={() => setModalVisible(!modalVisible)}
                     />
                  </View>
               </View>
            </View>
         </Modal>
      </View>
   );
};

const Home = ({ noteList, setCurrentPage, setCurrentNote, deleteNote }) => (
   <View style={styles.container}>
      <CustomButton
         backgroundColor="#DDD"
         color="#203239"
         text="Tambahkan Note"
         width="100%"
         onPress={() => setCurrentPage('add')}
      />
      <FlatList
         showsVerticalScrollIndicator={false}
         data={noteList}
         renderItem={({ item }) => (
            <NoteCard item={item} setCurrentPage={setCurrentPage} setCurrentNote={setCurrentNote} deleteNote={deleteNote} />
         )}
         keyExtractor={(item) => item.id.toString()}
      />
   </View>
);

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 20,
      marginTop: 20,
   },
   card: {
      padding: 10,
      marginVertical: 15,
      borderColor: '#DDD',
      borderWidth: 2,
      borderRadius: 5,
   },
   cardTitle: {
      fontWeight: '600',
      color: '#203239',
      fontSize: 16,
      marginBottom: 5,
   },
   buttons: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
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
      // margin: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   ya: {
      justifyContent: 'space-between',
   },
});

export default Home;
