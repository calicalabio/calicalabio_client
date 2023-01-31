import React, { useState, useEffect } from "react";
import { URL } from '../../api/api.js'
import './styles.css';
import '../../common.css';

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
                    var updatedMessageArray = [data.newMessage, ...messageList];
                    updatedMessageArray.pop();
                    setmessageList(updatedMessageArray);
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
            
            {messageList.map(item => (
                <div key={item._id} className="caliFont caliFontSmall">
                    <div className="codeLine caliWide">
                        <span className="caliKeyBlue">const</span>
                        &nbsp;
                        <span className="caliKeyBlue">message_{item._id}</span>
                        &nbsp;
                        <span className="caliWhite">=</span>
                        &nbsp;
                        <span className="caliSymbol">{`{`}</span>                    
                    </div>
                    <div className="codeLine caliWide">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="caliVariable">content:</span>
                        &nbsp;
                        <span className="caliString">"{item.content}"</span>
                        <span className="caliWhite">,</span>
                    </div>
                    <div className="codeLine caliWide">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="caliVariable">date:</span>
                        &nbsp;
                        <span className="caliInt">{new Date(item.createdAt).getDate()}</span>
                        <span className="caliSymbolInner">{`/`}</span>
                        <span className="caliInt">{new Date(item.createdAt).getMonth() + 1}</span>
                        <span className="caliSymbolInner">{`/`}</span>
                        <span className="caliInt">{new Date(item.createdAt).getFullYear()}</span>                        
                    </div>
                    <div className="codeLine caliWide">
                    <span className="caliSymbol">{`}`}</span>
                    </div>
                    <div className="codeLineEmpty caliWide"></div>
                </div>
            ))}        
        </div>
  );
}

export default Messages;