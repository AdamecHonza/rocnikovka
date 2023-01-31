import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Columns } from "react-bulma-components";
import { BASE_URL } from "../App";
import Concert from "../components/Concert";

const HomePage = () => {
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    console.log("UPDATE")
    axios
      .get(`${BASE_URL}/api/concert`)
      .then((res) => setConcerts(res.data.items));
  }, []);

  return (
    <Container>
      <Columns>
        <Columns.Column size={7}>
          <>
            {concerts?.map((concert, i) => (
              <Concert {...concert} key={i} />
            ))}
          </>
        </Columns.Column>
      </Columns>
    </Container>
  );
};

export default HomePage;
