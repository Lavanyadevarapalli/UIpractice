import React from 'react';
import './App.css';
import ImageData from './ImageData';


function App() {
  const imagesList = [
    {
      name: "fruit",
      thumbnail:
        "https://serpapi.com/searches/65ec079ea5ad6dfe9d1a4f50/images/3df1d9fef72b1853fcafd7225654d365443ae3801e78e0c79834d32ad6a93b2e.jpeg",
    },
    {
      name: "iphone",
      thumbnail:
        "https://serpapi.com/searches/65ec079ea5ad6dfe9d1a4f50/images/3df1d9fef72b1853fcafd7225654d36536c5cb72451cb825d03327ab1afc3925.jpeg",
    },
    {
      name: "logo",
      thumbnail:
        "https://serpapi.com/searches/65ec079ea5ad6dfe9d1a4f50/images/3df1d9fef72b1853fcafd7225654d3656f0df84497342ece5dfccae1a11217da.jpeg",
    },
    {
      name: "clipart",
      thumbnail:
        "https://serpapi.com/searches/65ec079ea5ad6dfe9d1a4f50/images/3df1d9fef72b1853fcafd7225654d3657bfd0a796ab8479065393f14b1bde572.png",
    },
    {
      name: "drawing",
      thumbnail:
        "https://serpapi.com/searches/65ec079ea5ad6dfe9d1a4f50/images/3df1d9fef72b1853fcafd7225654d3658792ae16f119a1742c576f719d0b3089.jpeg",
    },
    {
      name: "wallpaper",
      thumbnail:
        "https://serpapi.com/searches/65ec079ea5ad6dfe9d1a4f50/images/3df1d9fef72b1853fcafd7225654d36535022508a951eb7d3ff9c854a5aeca8a.jpeg",
    },
    {
      name: "green",
      thumbnail:
        "https://serpapi.com/searches/65ec079ea5ad6dfe9d1a4f50/images/3df1d9fef72b1853fcafd7225654d365c001a77b8eb7ac66e6d0e171240c2d37.jpeg",
    },
    {
      name: "ipad",
      thumbnail:
        "https://serpapi.com/searches/65ec079ea5ad6dfe9d1a4f50/images/3df1d9fef72b1853fcafd7225654d3655073ee8174c20ff9f8c8fd3ba99fe872.jpeg",
    },
  ];
  return (
    <>
      <ImageData images={imagesList} />
    </>
  );
}
export default App;