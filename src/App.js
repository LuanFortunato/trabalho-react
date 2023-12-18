import './App.css';
import UserTable from './components/UserTable.js';
import useFetch from './components/useFetch.js';
import Popup from './components/Popup.js';
import { useState } from 'react';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const { data: userdata, isloaded, errorinfo } = useFetch('http://localhost:8080/users');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name: name, email: email, password: password, cpf: cpf, address: address };
    fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then(() => {
      console.log('User added')
      setButtonPopup(false)
      window.location.reload(false);

    })
  }

  return (
    <div className="App">
      <header className='.App-header'>
        <h1>Users</h1>
        <button onClick={() => setButtonPopup(true)}> Add User</button>

        <Popup trigger={buttonPopup}>
          <h2>User Information</h2>
          <form id="userForm" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
            <br />

            <label htmlFor="email">Email:</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />

            <label htmlFor="password">Password:</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />

            <label htmlFor="cpf">CPF:</label>
            <input type="text" required value={cpf} onChange={(e) => setCpf(e.target.value)} />
            <br />

            <label htmlFor="address">Address:</label>
            <input type="text" required value={address} onChange={(e) => setAddress(e.target.value)} />
            <br />
            <br />

            <button type="submit">Submit</button>
          </form>
        </Popup>

        {errorinfo && <div className='errormessage'>{errorinfo}</div>}
        {isloaded && <div>Please Wait .....</div>}
        {userdata && <UserTable userdata={userdata}></UserTable>}
      </header>
    </div >
  );
}

export default App;


