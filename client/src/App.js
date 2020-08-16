import React from 'react';
import './App.css';
import Home from './components/Home/Home'
import CreateRoom from './components/CreateRoom/CreateRoom';
import JoinRoom from './components/JoinRoom/JoinRoom'
import Task from './components/Task/Task'
import Footer from './components/Shared/Footer/Footer'

import { Route } from 'react-router-dom'

function generateCode() {
  let code = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const charLength = characters.length
  for (let i = 0; i < charLength; i++) {
    code += characters.charAt(Math.floor(Math.random() * charLength))
  }
  return code.slice(0, 5)
}


function App() {
  return (
    <>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path='/create-room'>
        <CreateRoom component={generateCode()} />
      </Route>
      <Route path='/join-room'>
        <JoinRoom />
      </Route>
      <Route path={`/tasks/:code/users/:name`}>
        <Task />
      </Route>
      <Route path='/tasks/:code' >
        <Footer />
      </Route>
    </>
  );
}

export default App;
