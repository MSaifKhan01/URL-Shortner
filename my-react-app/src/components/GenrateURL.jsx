import React, { useState } from "react";

function GenerateUrl() {
  const [makeUrl, setMakeUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [shortID, setShortID] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  const handleURLChange = () => {
    if (makeUrl === "") {
      return;
    }

    fetch(`https://url-shortener-e83c.onrender.com/url/add`, {
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

  const CopyLinkFunc = () => {
    // Copy short URL to clipboard
    navigator.clipboard
      .writeText(`https://url-shortener-e83c.onrender.com/url/get/${shortID}`)
      .then(() => {
        // console.log("Link copied to clipboard");
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false);
        }, 5000); // Reset message after 3 seconds
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
        alert(err);
      });
  };

  const ShareLinkFunc = () => {
    // Share short URL using Web Share API
    if (navigator.share) {
      navigator
        .share({
          title: "Short URL",
          text: "Check out this short URL:",
          url: `https://url-shortener-e83c.onrender.com/url/get/${shortID}`,
        })
        .then(() => console.log("Link shared successfully"))
        .catch((error) => console.error("Error sharing link:", error));
    } else {
      console.log("Web Share API not supported");
    }
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
              href={`https://url-shortener-e83c.onrender.com/url/get/${shortID}`}
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Recommended for security
            >
              {`https://url-shortener-e83c.onrender.com/url/get/${shortID}`}
            </a>
          </p>
        )}

        {copySuccess && shortID && (
          <span
            style={{ color: "green", fontSize: "56px", fontWeight: "bold" }}
          >
            Link copied!
          </span>
        )}

        <div className="copy-share-btn">
          <button onClick={CopyLinkFunc}>Copy Link</button>
          <button onClick={ShareLinkFunc}>Share Link</button>
        </div>
      </div>
    </div>
  );
}

export default GenerateUrl;
