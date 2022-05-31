import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import "./write.css";

export default function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [password, setPassword] = useState("");

  const [allRecord, setAllRecord] = useState([]);


  const submitForm = (e) => {
    e.preventDefault();
    const newRecord = { title: title, content: content };
    setAllRecord([...allRecord, newRecord]);
    console.log(allRecord);

  }

  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm" onSubmit={submitForm}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }}
          />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            value={content}
            onChange={(e) => setContent(e.target.value)}

          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
      <div>
        {
          allRecord.map((curr) => {
            return (
              <div className="container">
              <Card>
                <Card.Header>{curr.title}</Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      {' '}
                      {curr.content}{' '}
                    </p>
                    <footer className="blockquote-footer">
                      Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
