import React, { useState } from "react";

const NewGmailMessage = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // Handle the send action
    console.log("To:", to);
    console.log("Subject:", subject);
    console.log("Message:", message);
  };

  return (
    <div className="container mt-2">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-1">New Message</h2>
          <form>
            <div className="mb-1">
              <label htmlFor="to" className="form-label">
                To:
              </label>
              <input
                type="email"
                className="form-control"
                id="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
            <div className="mb-1">
              <label htmlFor="subject" className="form-label">
                Subject:
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
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
            <div className="text-end">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSend}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewGmailMessage;
