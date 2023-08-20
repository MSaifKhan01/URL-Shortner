import React, { useState } from "react";


function GenerateUrl() {
  const [makeUrl, setMakeUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [shortID, setShortID] = useState("");

  const handleURLChange = () => {
    if (makeUrl === "") {
      return;
    }

    fetch(`http://localhost:3400/url/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: makeUrl }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMakeUrl("");
        if (data.msg === "url already created") {
          setShortUrl(data.urlPresent.shortid);
          setShortID(data.urlPresent.shortid);
        } else {
          setShortUrl(data.url);
          setShortID(data.url);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="form-title">URL Shortener</h1>
        <div className="input-container">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Long Url"
            value={makeUrl}
            onChange={(e) => setMakeUrl(e.target.value)}
          />
        </div>
        <button className="submit-button" onClick={handleURLChange}>
          Submit
        </button>
      </div>
      <div className="short-url-container">
        {shortID && (
          <p className="short-url">
            Short URL:{" "}
            <a
              className="short-url-link"
              href={`http://localhost:3400/url/get/${shortID}`}
            >
              {`http://localhost:3400/url/get/${shortID}`}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

export default GenerateUrl;
