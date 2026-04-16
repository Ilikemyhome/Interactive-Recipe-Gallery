import { useState } from "react";

// Example image list — replace with your own recipe images
export const images = [
  {
    id: 1,
    url: "https://www.mylatinatable.com/wp-content/uploads/2016/03/pozole-5-1024x681-1.jpg",
    description: "Traditional Mexican Pozole"
  },
  {
    id: 2,
    url: "https://www.onionringsandthings.com/wp-content/uploads/2016/09/asada-a.jpg",
    description: "Carne Asada Tacos"
  },
  {
    id: 3,
    url: "https://elmexicano.net/wp-content/uploads/2017/03/Red-Chicken-Enchiladas.jpg",
    description: "Red Enchiladas"
  }
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  const current = images[index];

  const goNext = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    }
  };

  const goPrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="gallery-container">
      <h2>Recipe Gallery</h2>

      <img
        src={current.url}
        alt={current.description}
        className="gallery-image"
      />

      <p>{current.description}</p>

      <div className="gallery-buttons">
        <button onClick={goPrev} disabled={index === 0}>
          Previous
        </button>

        <button onClick={goNext} disabled={index === images.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
}