import React from "react";
import { Box, Content, Heading, Level } from "react-bulma-components";

const Concert = ({
  name,
  interpret,
  description,
  capacity,
  address,
  datetime,
  picture,
}) => {
  return (
    <Box>
      <Heading size={5} renderAs={"h5"}>
        <Level>
          <span>{name}</span>
          <span>{interpret}</span>
        </Level>
      </Heading>
      <Heading subtitle size={5} renderAs={"h5"}>
        {new Intl.DateTimeFormat("en-GB", {
          dateStyle: "full",
          timeStyle: "short",
        }).format(new Date(datetime))}
      </Heading>
      <Level>
        <Content>{description}</Content>
        <span>{capacity}</span>
      </Level>
      <address>
        <p>{address.street}</p>
        <p>
          {address.city} {address.postal_code}
        </p>
        <p>{address.state}</p>
      </address>
    </Box>
  );
};

export default Concert;
