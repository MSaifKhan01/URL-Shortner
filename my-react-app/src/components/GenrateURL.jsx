import React, { useState, useEffect } from "react";

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
          setShortID(data.urlPresent.shortid); // Set short ID in both cases
        } else {
          setShortUrl(data.url); // Store the short URL in state
          setShortID(data.url); // Set short ID for newly created URLs
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   fetchShortUrlData(); // Fetch data when shortUrl changes
  // }, [shortUrl]);

  const fetchShortUrlData = () => {
    if (!shortUrl) {
      return;
    }

    fetch(`http://localhost:3400/url/get/${shortUrl}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShortUrl(data);
        if (data.msg === "url already created") {
          setShortID(data.urlPresent.shortid);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div className="cont">
        <input
          className="inputTag"
          type="text"
          placeholder="Enter Long Url"
          value={makeUrl}
          onChange={(e) => setMakeUrl(e.target.value)}
        />
        <button onClick={handleURLChange}>Submit</button>
      </div>
      {/* <div className="get">
        {shortID && <p>Short URL: {shortID}</p>}
        {shortID && <div>{`http://localhost:3400/url/get/${shortID}`}</div>}

       
      </div> */}
      <div className="get">
        {shortID && (
          <p>
            Short URL: <a href={`http://localhost:3400/url/get/${shortID}`}>{`http://localhost:3400/url/get/${shortID}`}</a>
          </p>
        )}
      </div>
    </div>
  );
}



export default GenerateUrl;
