import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { LimitContext } from "../../contextProviders/QuestionContext.js/index.js";
import classes from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  const { limit, setLimit } = useContext(LimitContext);

  const [limitInput, setLimitInput] = React.useState(limit);

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className={classes.box}>
        <div className={classes.math}>
          <div>M</div>
          <div>a</div>
          <div>t</div>
          <div>h</div>
        </div>
        <div className={classes.is}>is</div>
        <div className={classes.fun}>fun</div>
      </div>
      <div>
        <div>
          Upper limit For tables:{" "}
          <input
            type="number"
            value={limitInput}
            onChange={(e) => setLimitInput(e.target.value)}
          />
        </div>
        <Button
          onClick={() => {
            setLimit(parseInt(limitInput));
            navigate("/game");
          }}
          style={{ marginTop: "20px" }}
        >
          Go
        </Button>
      </div>
    </div>
  );
};

export default Home;
