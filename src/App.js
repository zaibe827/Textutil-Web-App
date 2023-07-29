// import { useState } from 'react';

import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");    //state variable that tell's whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);     //alert is the state variable


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })

    setTimeout(() => {                         //disabling alert after given time
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is enabled", "success");
      document.title = 'TextUtil- Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is enabled", "success");
      document.title = 'TextUtil- Light Mode';
    }
  }

  return (
    <>

      <Router>

        {/*<Navbar/>        if no value is given default props will execute automatically  */}
        {/* // exporting Navbar component insted of writing whole navbar code here */}
        <Navbar title="TextUtil." aboutTextutil="About-TextUtil" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">

          <Alert alert={alert} />

          <Routes>
            {/*  exact will render excatly the same page if in case mutilple pages are link with each other*/}
            <Route exact path='/about' element={<About mode={mode} />} />

            <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} />} />

          </Routes>
        </div>
      </Router>

    </>

  );
}

export default App;
