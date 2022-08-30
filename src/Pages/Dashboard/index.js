import { Fade } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./../../App.css";
import "./index.scss";

export const styles = {
  border: "1px",
  padding: "10px",
  boxShadow: "5px 10px black",
  backgroundColor: "white",
  borderRadius: "5px",
};

export default function Dashboard() {
  const history = useHistory();
  const [isActive, setIsActive] = useState(false);
  const img =
    "https://raw.githubusercontent.com/jmazaia/dating-request/master/public/assets/";

  return (
    <div
      className="App"
      style={{ backgroundImage: isActive ? `url('${img}')` : null }}
    >
      <header className="App-header">
        <div className="container-d">
          <div className="titule-crush">
            <Fade in={true} timeout={6000}>
              {isActive ? (
                <Box sx={styles}>NÃO ME AMA MAIS?</Box>
              ) : (
                <Box sx={styles}>QUER NAMORAR COMIGO?</Box>
              )}
            </Fade>
            <br />
            <div className="dual-buttons">
              {isActive ? (
                <>
                  <Fade in={true} timeout={6000}>
                    <button
                      onClick={() => {
                        setIsActive((current) => !current);
                      }}
                      className="button"
                    >
                      AMO
                    </button>
                  </Fade>
                  <Fade in={true} timeout={6000}>
                    <button
                      onClick={() => {
                        setIsActive((current) => !current);
                      }}
                      className="button"
                    >
                      AMO
                    </button>
                  </Fade>
                </>
              ) : (
                <>
                  <Fade in={true} timeout={6000}>
                    <button
                      onClick={() => {
                        history.push("/Champion");
                      }}
                      className="button"
                    >
                      SIM
                    </button>
                  </Fade>
                  <Fade in={true} timeout={6000}>
                    <button
                      onClick={() => {
                        setIsActive((current) => !current);
                      }}
                      className="button no-button"
                    >
                      Não
                    </button>
                  </Fade>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
