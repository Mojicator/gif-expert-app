import React from "react";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs();

  return (
    <div>
      <h3>{category}</h3>
      {loading && <p className="animate__animated animate__flash">Loading</p>}
      <div className="card-grid animate__animated animate__slideInRight animate__faster">
        {images.map(({ id, title, url }) => {
          return (
            <GifGridItem key={id} title={title} url={url}>
              {title}
            </GifGridItem>
          );
        })}
      </div>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
