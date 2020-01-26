import React, { useState } from "react";
import Grid from "../Grid/Grid";
import styled from "@emotion/styled";

const GalleryColumn = styled.div`
  width: 25%;
`;

const FittedImage = styled.div`
  img {
    object-fit: contain;
    display: block;
    width: 100%;
    max-height: 60vh;
  }
  position: relative;
`;

const GalleryImage = styled.img`
  object-fit: contain;
  display: block;
  width: 100%;
  max-height: 75px;
  border: ${props =>
    props.active ? `1px solid ${props.theme.mainColor};` : "1px solid black;"}
  cursor: pointer;
`;

export default function Gallery({ images, description }) {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <>
      <FittedImage>
        <img src={images[activeImage].original} alt={description} />
      </FittedImage>
      <Grid>
        {images.map((image, index) => (
          <GalleryColumn key={index} onClick={() => setActiveImage(index)}>
            <GalleryImage
              src={image.thumb}
              alt={description}
              active={activeImage === index}
            />
          </GalleryColumn>
        ))}
      </Grid>
    </>
  );
}
