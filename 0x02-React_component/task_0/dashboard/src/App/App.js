import React from "react";
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import Login from "../Login/Login";
import Notifications from '../Notifications/Notifications';

function App() {
  return (
    <>
      <Notifications />
      <div key="App">
        <Header />
      </div>
      <div key="App-body">
        <Login />
      </div>
      <div key="App-footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
