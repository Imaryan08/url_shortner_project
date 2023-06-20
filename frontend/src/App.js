import React, { useState } from "react";
import "./App.css";

function App() {
  const [url, seturl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      setShortUrl(data.shortUrl);
    } catch (error) {
      console.error(error);
    }
  };

  const redirectToBackend = () => {
    window.location.href = `http://localhost:8080/${encodeURIComponent(
      shortUrl
    )}`;
  };

  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => seturl(e.target.value)}
          placeholder="Enter a long URL"
        />
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && (
        <div>
          <p>Short URL:</p>
          <a href="" target="_blank" onClick={redirectToBackend}>
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
