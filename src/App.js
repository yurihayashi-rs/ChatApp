import './App.css';
import LoginForm from "./components/LoginForm";
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

function App() {
  if(!localStorage.getItem('username')) return <LoginForm />  //if youre not login
  return (
     <ChatEngine 
         height="100vh"
         projectID="3798591d-4c30-4094-a425-6e999ab2369b"
         userName={localStorage.getItem('username')}
         userSecret={localStorage.getItem('password')}
         renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
     />
  );
}

export default App;
