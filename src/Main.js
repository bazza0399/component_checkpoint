import React from 'react';
import logo from './logo.svg';
import './App.css';
import Adress from './profile/Adress'
import FullName from './profile/FullNAme'
import ProfilPhoto from './profile/ProfilPhoto'

function App() {
  return (
    <React.Fragment>
      <div style={{border:'solid',borderRadius:'1px',float:'left'}}>
        <ProfilPhoto/>
        <h6> your name is <FullName/> </h6>
        <h6 > your adress is <Adress/> </h6> 
      </div>
    </React.Fragment>
  );
}

export default App;
