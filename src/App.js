import React from 'react'
import { Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const notify = () => toast("Wow so easy!");

  return(
    
    <>
    <button onClick={notify}>Notify!</button>
        <ToastContainer />
    </>
  )
}
export default App;