import './app.css';
import React, { useState } from 'react';
import arr from './EventsArr';
import CreateForm from './Form';
import CreateEvents from './Events';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CreateModal from './Modal';
import myModal from './useModal';


function App() {

  const [modal, setModal] = useState(null);

  const reducer = (state = arr, action) => {
    switch(action.type) {
      case "ADD": return [...state, {title: action.payload.title, data: action.payload.data, description: action.payload.desc, detailsdescription: action.payload.details, type: action.payload.type}];
      default: return state;
    }
  }

  const store = createStore(reducer);


  const value = {modal, setModal}

  return (
    <Provider store = {store}>
      <myModal.Provider value={value}>
        <div className='wrepper'>
          <header><h1>Події</h1></header>
          <CreateForm/>
          <CreateEvents/>
        </div>
        <CreateModal/>
      </myModal.Provider>
    </Provider>
  )
  
}

export default App;


