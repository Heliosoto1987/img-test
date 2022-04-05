import { useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export const ImgCard = ({ author, liked, title, img, price, id }) => {
  useEffect(() => {
    fetch(`http://localhost:3100/images/${id}/likes`, {
      method: "POST",
      body: "",
    }).then((data) => {
      return console.log(data);
    });
  }, []);

  return (
    <div className="img-card">
      <div>Titulo: {title}</div>
      <div> Autor: {author}</div>
      <div className="img-card__img-controller">
        <img
          className="img-card__img-controller--img"
          src={img}
          alt="Error al cargar"
        />
      </div>
      {liked ? (
        <div>
          <AiFillHeart />
        </div>
      ) : (
        <div>
          <AiOutlineHeart />
        </div>
      )}
      <div>Precio: {price}$</div>
    </div>
  );
};
