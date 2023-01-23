import React, { useState, useEffect } from "react";

function Messages() {
  const [messageList, setmessageList] = useState([]);
  const [messageContent, setMessageContent] = useState("");

  useEffect(() => {
    fetch("https://calicalabio-api.up.railway.app/messages")
      .then(response => response.json())
      .then(data => setmessageList(data))
      .catch(error => console.log(error));
  }, []);

  const handleSubmit = event => {
    event.preventDefault();

    fetch("https://calicalabio-api.up.railway.app/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "content": messageContent })
    })
      .then(res => res.json())
      .then(data => setmessageList([...messageList, data.newMessage]))      
      .catch(error => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={messageContent}
          onChange={event => setMessageContent(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {messageList.map(item => (
          <li key={item._id}>MESSAGE: {item.content} DATE: {new Date(item.createdAt).toUTCString()}</li>
        ))}
      </ul>
    </div>
  );
}

export default Messages;