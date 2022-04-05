import React, { useEffect, useState } from "react";
import { ImgCard } from "../ImgCard";

export const LadingScreen = () => {
  const [image, setImage] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3100/images")
      .then((response) => response.json())
      .then((data) => {
        return setImage(data);
      });
  }, []);

  return (
    <div className="lading-screen">
      <h1 className="lading-screen__title">Manejador de Imagenes</h1>
      <div className="lading-screen__grid">
        {image.map((value) => {
          return (
            <ImgCard
              key={value.id}
              id={value.id}
              author={value.author}
              liked={value.liked}
              title={value.title}
              img={value.main_attachment.big}
              price={value.price}
            />
          );
        })}
      </div>
    </div>
  );
};
