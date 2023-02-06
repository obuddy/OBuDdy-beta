import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/.netlify/functions/yourFunction`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  };

  return (
    <div className="App">
      <h1>OBuDdy beta</h1>
      <h1>By Motabachi</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          placeholder="year/make/model/obd/part"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {response && <div><b>OBuDdy:</b> {response}</div> }
    </div>
  );
}

export default App
