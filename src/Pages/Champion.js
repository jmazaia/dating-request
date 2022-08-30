import { Fade } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

function Champion() {
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
            Pode abrir seu presente <b>NAMORADA</b> ♥
          </Box>
        </Fade>
      </header>
    </div>
  );
}

export default Champion;
