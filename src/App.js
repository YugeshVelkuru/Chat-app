import './App.css';
import { Route } from "react-router-dom";
import homepage from './pages/homepage';
import { chakra } from '@chakra-ui/react';
import chatpage from './pages/chatpage';

function App() {
  return(
   <div className = "App">
    <Route path="/" component = {homepage} exact />
     <Route path="/chats" component = {chatpage} /> 
  </div>
  );
}

export default App;
