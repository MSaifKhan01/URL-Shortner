import React, { useState } from "react";

function GenerateUrl() {
  const [makeUrl, setMakeUrl] = useState("");

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
      <div className="get"></div>
    </div>
  );
}

export default GenerateUrl;
