import axios from "axios";
import React, {useEffect, useState} from "react";
import { Box, Content, Heading, Level } from "react-bulma-components";
import { BASE_URL } from "../App";

const Concert = ({
  name,
  interpret,
  description,
  capacity,
  address,
  datetime,
  picture,
  id
}) => {
  const [data, setData] = useState(0);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/concert/availabletickets/${id}`)
      .then((res) => setData(res.data));
  }, []);

  return (
    <Box>
      <Heading size={5} renderAs={"h5"}>
        <Level>
          <span>{id}</span>
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
        <span>{data?.available} / {capacity}</span>
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
