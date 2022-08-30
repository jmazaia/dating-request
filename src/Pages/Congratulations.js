import { Fade } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useHistory } from "react-router-dom";
function Congratulations() {
  const history = useHistory();

  return (
    <div className="App">
      <header className="App-header">
        <Fade in={true} timeout={4000}>
          <Box
            sx={{
              minWidth: 275,
              border: "1px solid",
              padding: "10px",
              boxShadow: "5px 10px black",
              backgroundColor: "white",
            }}
          >
            Depois que você entrou na minha vida
            <br />
            Me fez pensar
            <br />
            Como eu consegui sem você
            <br />
            Tanto tempo aguentar
            <br />
            Quero os nossos rolês gourmets durante a vida
            <br />
            Ao seu lado topar qualquer rolê ou comida.
            <br />
            <br />
            Se tu tiver junto
            <br />
            Topo até ir pro everest
            <br />
            Lá não passarei frio
            <br />
            Pois seu abraço me aquece
            <br />
            Te amo ♥
          </Box>
        </Fade>
        <br />

        <button
          className="button"
          onClick={() => {
            history.push("/Dashboard");
          }}
        >
          <span>PROXIMO</span>
        </button>
      </header>
    </div>
  );
}

export default Congratulations;
