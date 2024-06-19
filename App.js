// App.js
import React, { useState } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import Home from './src/screens/home';
import AddNote from './src/screens/addNote';
import EditNote from './src/screens/editNote';

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, addNote, editNote, deleteNote, setCurrentNote, currentNote }) => {
  switch (currentPage) {
    case 'home':
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} deleteNote={deleteNote} setCurrentNote={setCurrentNote} />;
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case 'edit':
      return <EditNote setCurrentPage={setCurrentPage} editNote={editNote} currentNote={currentNote} />;
    default:
      return <Home />;
  }
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [noteList, setNoteList] = useState([{
    id: 1,
    title: 'Note pertama',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  }]);
  const [currentNote, setCurrentNote] = useState(null);

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([...noteList, { id, title, desc }]);
  };

  const editNote = (id, title, desc) => {
    setNoteList(noteList.map(note => note.id === id ? { ...note, title, desc } : note));
  };

  const deleteNote = (id) => {
    setNoteList(noteList.filter(note => note.id !== id));
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <CurrentPageWidget
        currentPage={currentPage}
        noteList={noteList}
        setCurrentPage={setCurrentPage}
        addNote={addNote}
        editNote={editNote}
        deleteNote={deleteNote}
        setCurrentNote={setCurrentNote}
        currentNote={currentNote}
      />
    </>
  );
};

const styles = StyleSheet.create({
  // Add any common styles here
});

export default App;
