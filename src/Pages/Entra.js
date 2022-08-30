import { Fade } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useHistory } from "react-router-dom";
import { styles } from "./Dashboard/index";

function Entra() {
  const history = useHistory();
  return (
    <div className="App">
      <header className="App-header">
        <Fade in={true} timeout={4000}>
          <Box sx={styles}>
            Antes de abrir o presente, quero que leia um poema
          </Box>
        </Fade>
        <br />
        <br />
        <Fade in={true} timeout={2000}>
          <div className="heart_beating">
            <div className="heart">
              <span className="glow"></span>
            </div>

            <span className="shadow-header"></span>
          </div>
        </Fade>

        <div className="clique-entre">
          <span>
            <button
              className="button"
              onClick={() => {
                history.push("/Congratulations");
              }}
            >
              <span>Entre</span>
            </button>
          </span>
        </div>
      </header>
    </div>
  );
}

export default Entra;
