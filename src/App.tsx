import { useContext, useEffect } from 'react';
import './App.css';
import { ContextTemplate } from './context/contextTemplate';
import Test from './test';

function App() {
  const {updateState}=useContext(ContextTemplate)
  useEffect(()=>{
    updateState()
  },[])
  return (
   <Test/>
  );
}

export default App;
