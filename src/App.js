import "./App.css";
import Card from "./Card";
import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "21505753-eb7cd1ed9b49d9d1b1494a4e8";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    async function fetchData() {
      const request = await axios.get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo&pretty=true`
      );
      console.log(request);
      setImages(request.data.hits);
      setIsLoading(false);
      return request;
    }
    fetchData();
    console.log(images);
    setSearchTerm("");
  };

  return (
    <div className="app">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <button type="submit">Search</button>
      </form>
      <div className="images">
        {images.map((image, key) => {
          return (
            <Card
              key={image?.id}
              heading={`Photo by ${image?.user}`}
              views={image?.views}
              downloads={image?.downloads}
              likes={image?.likes}
              src={image?.previewURL}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
