
// import React from 'react'
// import Part1 from './Part1'

// function App() {
//   return (
//     <div>
    
// <Part1 name="RAJ"/>


//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect, useRef } from 'react';

function App() {
  // Using useState to handle the counter value
  const [count, setCount] = useState(0);
  
  // Using useRef to access the input DOM element
  const inputRef = useRef(null);

  // Using useEffect to perform a side effect when the count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Only runs when the count changes

  // Function to increase the counter
  const increaseCount = () => {
    setCount(count + 1);
  };

  // Function to reset the counter to a specific value using the input field
  const resetCounter = () => {
    const inputValue = inputRef.current.value;
    if (!isNaN(inputValue)) {
      setCount(parseInt(inputValue));
    }
  };

  return (
    <div style={styles.container}>
      <h1>React Counter with Hooks</h1>
      <p>Current Count: {count}</p>

      <button onClick={increaseCount} style={styles.button}>
        Increment
      </button>

      <br/><br/>

      <input ref={inputRef} type="number" placeholder="Set counter value" style={styles.input}/>
      <button onClick={resetCounter} style={styles.button}>
        Set Count
      </button>
    </div>
  );
}

// Styles for the components
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    margin: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '150px',
  }
};

export default App;
