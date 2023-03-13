import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import ImageList from "./imageList/imageList";
import RandomizeButton from "./randomizeButton/randomizeButton";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?_start=${
        page * 20
      }&_limit=50`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(images);
        console.log(json);
        const temp = [];
        json.forEach((image) => {
          temp.push({ title: image?.title, href: image?.url });
        });
        setImages([...images, ...temp]);
        setLoading(false);
      });
  }, [page]);

  const handleOnDragEnd = (result) => {
    // Dragged outside
    if (!result.destination) {
      return;
    }
    const newImages = Array.from(images);
    const [reOrdered] = newImages.splice(result.source.index, 1);
    newImages.splice(result.destination.index, 0, reOrdered);
    setImages(newImages);
  };

  const handleClick = () => {
    let imagesRandom = images
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setImages(imagesRandom);
  };

  const handleScroll = (e) => {
    const list = e.target;
    if (list.scrollWidth - list.scrollLeft < list.scrollWidth / 2 && !loading) {
      setLoading(true);
      setPage(page + 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Convergence Concepts Image Gallery</h1>
        <p>
          This app uses react-beautiful-dnd and lazy loading to reduce load.
          Drag and drop any image to change its order, or press randomize order
          for a surprise
        </p>
        <div className="list-container">
          <DragDropContext onDragEnd={(result) => handleOnDragEnd(result)}>
            <ImageList images={images} handleScroll={handleScroll} />
          </DragDropContext>
        </div>
        <RandomizeButton handleClick={handleClick} />
        <span className="footer">Created By Dennis Li</span>
      </header>
    </div>
  );
};

export default App;
