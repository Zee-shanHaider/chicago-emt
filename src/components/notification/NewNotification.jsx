import React, { useState } from "react";
import { Send } from "react-feather";

const NewNotification = () => {
  const [title, setTitle] = useState("");
  const [recepients, setRecepients] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // Handle the send action
    console.log("Title:", title);
    console.log("Recepients:", recepients);
    console.log("Message:", message);
  };

  return (
    <div className="card mt-2">
      <div className="card-body">
        <h2 className="card-title mb-1">New Notification</h2>
        <form>
          <div className="mb-1">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <input
              type="email"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="recepients" className="form-label">
              Recepients:
            </label>
            <input
              type="text"
              className="form-control"
              id="recepients"
              value={recepients}
              onChange={(e) => setRecepients(e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="text-end py-1">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSend}
            >
              <Send size={16} />
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewNotification;
