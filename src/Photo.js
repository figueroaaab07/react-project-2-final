import React, { useEffect } from "react";

function Photo({ id, src, log, setLog }) {

  async function logData(newLog) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newLog)
    };
    const response = await fetch("https://backend-project-2-final.herokuapp.com/log", requestOptions);
    const json = await response.json();
    setLog([...log, json]);
  }
  
  useEffect(() => {
    logData({id, src})
  // eslint-disable-next-line
  }, [id]);

  return (
    <div className="column">
      <img id={id} alt="Mars" src={src} width="100%"/> 
    </div>
  )
}

export default Photo;
