import { useState } from 'react';
import './App.css'
import Modal from './components/Modal';
import Confirm from './components/Confirm';
import Pricing from './components/Pricing'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [modal, setModal] = useState(false);
  const [plan, setplan] = useState({ price: 0, type: "NA" });

  function toggleModal() {
    setModal(!modal);
    console.log("object");
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pricing toggleModal={toggleModal} setplan={setplan} />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
        <Modal modal={modal} plan={plan} toggleModal={toggleModal} />
      </BrowserRouter>
    </div>
  )
}

export default App
