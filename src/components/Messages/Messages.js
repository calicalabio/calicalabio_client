import React, { useState, useEffect } from "react";
import { URL } from '../../api/api.js'
import './styles.css';

function Messages() {
    const [messageList, setmessageList] = useState([]);
    const [messageContent, setMessageContent] = useState("");
    const [isProcessingGet, setIsProcessingGet] = useState(false);
    const [isProcessingPost, setIsProcessingPost] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const displayError = error => {
        setErrorMessage(error.toString());
        console.log(error);
    }

    useEffect(() => { 
        if (!isProcessingGet) {
            setIsProcessingGet(true);

            fetch(URL + "/messages")
                .then(response => response.json())
                .then(data => {
                    setmessageList(data);
                    setIsProcessingGet(false);
                })
                .catch(error => displayError(error));
        }        
    }, []);

    const handleSubmit = async event => {
        event.preventDefault();
        
        if (!messageContent) {
            displayError("Your message cannot be empty.");
            return;
        } else if (messageContent.length > 400) {
            displayError("You message cannot exceed 400 characters.");
            return;
        }

        if (!isProcessingPost) {
            setIsProcessingPost(true);
            
            try {
                const res = await fetch(URL + "/messages", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ "content": messageContent })
                    });
                    
                const data = await res.json();

                if (!res.ok) {
                    displayError(data.error || res.statusText);
                } else {
                    setmessageList([data.newMessage, ...messageList]);
                    setMessageContent("");
                    setErrorMessage("");
                    setIsProcessingPost(false);
                }
            } catch (error) {
                displayError(error);
            }
        }        
    };

    return (
        <div>
            <div className="formContainer">
                <input
                type="text"
                className="formTextBox"
                value={messageContent}
                placeholder="Post a message to the message board!"
                onChange={event => setMessageContent(event.target.value)}
                />
                {isProcessingPost ? null : <button type="submit" className="formButton" onClick={handleSubmit}>Submit</button>}   
            </div>
            
            <div className="errorMessageContainer">{errorMessage}</div>
            
            <div className="messagesContainer">
                {messageList.map(item => (
                    <div className="messageContainer" key={item._id}>
                        <div className="messageItem messageDate">{new Date(item.createdAt).toUTCString()}</div>
                        <div className="messageItem messageContent">{item.content}</div>                        
                    </div>
                ))}            
            </div>        
        </div>
  );
}

export default Messages;