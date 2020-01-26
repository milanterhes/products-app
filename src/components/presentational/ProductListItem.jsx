import React from "react";
import { Card, Thumbnail, CardBody } from "./Card/Card";
import { Link } from "react-router-dom";
import {
  LearnMoreButton,
  ProductTitle,
  ProductDetails,
  ArrowRight
} from "./Product/Product";

export default function ProductOverview({ id, title, price, thumb }) {
  return (
    <Card>
      <Thumbnail src={thumb} alt="Thumbnail of a toy gun" />
      <CardBody>
        <ProductTitle>{title}</ProductTitle>
        <ProductDetails>
          <b>€{price}</b>
          <Link
            to={{
              pathname: "/" + id
            }}
          >
            <LearnMoreButton>
              Learn more <ArrowRight />
            </LearnMoreButton>
          </Link>
        </ProductDetails>
      </CardBody>
    </Card>
  );
}
