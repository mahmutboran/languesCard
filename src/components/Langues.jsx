import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";

const Langues = ({ name, img, options }) => {
  console.log(name, img, options);
  const [showDesc, setShowDesc] = useState(false);
  return (
    <Container
    style={{ background: "peachpuff" }}
    className="p-4 rounded-2 h-100 lang-card"
    onClick={() => setShowDesc(!showDesc)}
    type="button"
    >
      {!showDesc && (
        <Container>
          <Image className="lang-logo" src={img} width="70%"></Image>
          <h3 className="display-6">{name}</h3>
        </Container>
      )}

      {showDesc && (
        <ol className="h-100 d-flex flex-column justify-content-center " >
          {options.map((item) => {
            return <li className="h6 text-start">{item}</li>;
          })}
        </ol>
      )}
    </Container>
  );
};

export default Langues;
