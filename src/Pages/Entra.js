import { Fade } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useHistory } from "react-router-dom";
import { styles } from "./Dashboard/index";

function Entra() {
  const history = useHistory();

  function play() {
    new Audio(
      "https://github.com/jmazaia/dating-request/blob/master/public/X2Download.com%20-%20Home%20-%20Edith%20Whiskers%20(TikTok)%20(Tradu%C3%A7%C3%A3o_Legendado)%20(128%20kbps).mp3?raw=true"
    ).play();
  }

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
                play();
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
