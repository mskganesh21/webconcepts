// MyComponent.js
import React, { useState, useEffect } from 'react';

/*
this is how we use web workers in reactjs 
we create a web worker using new Worker keyword and passing in the url of the file path 
const myWorker = new Worker(new URL('path to the worker file', import.meta.url));

we use useeffect to start the worker when the component loads
we write clean up function to terminate the worker if some other worker exists

create a state to store the worker 

set up event listeners to send and recieve data from the workers

postmessage to post data to the worker 
onmessage to get data from the worker


*/ 

const MyComponent = () => {
  const [result, setResult] = useState(null);
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    // Create a new web worker
    const myWorker = new Worker(new URL('./worker.js', import.meta.url));

    // Set up event listener for messages from the worker
    myWorker.onmessage = function (event) {
      console.log('Received result from worker:', event.data);
      setResult(event.data);
    };

    // Save the worker instance to state
    setWorker(myWorker);

    // Clean up the worker when the component unmounts
    return () => {
      myWorker.terminate();
    };
  }, []); // Run this effect only once when the component mounts

  const handleClick = () => {
    // Send a message to the worker
    if (worker) {
      worker.postMessage(5); // Send the number 5 to the worker
    }
  };

  return (
    <div>
      <p>Result from the worker: {result}</p>
      <button onClick={handleClick}>Calculate in Web Worker</button>
    </div>
  );
};

export default MyComponent;
