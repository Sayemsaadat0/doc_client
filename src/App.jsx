import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Fetch the visit count from the server when the app loads.
    axios.get('/api/visitCount')
      .then(response => {
        setVisitCount(response.data.count);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // Function to increment the visit count.
  const incrementVisitCount = () => {
    axios.post('/api/incrementVisitCount')
      .then(response => {
        setVisitCount(response.data.count);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Welcome to My Website</h1>
      <p>This website has been visited {visitCount} times.</p>
      <button onClick={incrementVisitCount}>Increment Visit Count</button>
    </div>
  );
}

export default App;
