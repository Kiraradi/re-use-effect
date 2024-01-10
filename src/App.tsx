import { useState } from 'react';
import './App.css';
import List from './components/List/List';
import Details from './components/Details/Details';

export interface IUserDetails {
  city: string
  company: string
  position: string
}

export interface IUser {
  id: number
  name: string
  avatar?: string
  details?: IUserDetails
}



function App() {

  const [UserId, setUserId] = useState(0);

  const onClick = (id: number) => {
    setUserId(id);
  }

  return (
    <div className="App">
      <List onClick={onClick}></List>
      <Details userId={UserId}></Details>
    </div>
  );
}

export default App;
