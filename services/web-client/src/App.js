import React, { useState } from 'react';
import './App.css';
import { GreeterClient } from './grpc/greeting_grpc_web_pb';
import { HelloRequest } from './grpc/greeting_pb';

function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const client = new GreeterClient('http://localhost:8080');
    const request = new HelloRequest();
    request.setName(name);

    client.sayHello(request, {}, (err, response) => {
      if (err) {
        console.error(err.message);
        return;
      }
      setGreeting(response.getMessage());
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label>
            Enter your name:
            <input type="text" value={name} onChange={handleInputChange} />
          </label>
          <button type="submit">Greet Me</button>
        </form>
        {greeting && <p>{greeting}</p>}
      </header>
    </div>
  );
}

export default App;
