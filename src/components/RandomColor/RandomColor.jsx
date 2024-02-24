import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const [colorOption, setColorOption] = useState("HEX");
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    if (colorOption === "HEX") {
      handleHexOption();
    } else {
      handleRgbOption();
    }
  }, [colorOption]);

  function randomNumberUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleHexOption() {
    const numbers = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexCode = "#";

    for (let i = 0; i < 6; i++) {
      hexCode += numbers[randomNumberUtility(numbers.length)];
    }
    setColor(hexCode);
  }

  function handleRgbOption() {
    const r = randomNumberUtility(256);
    const g = randomNumberUtility(256);
    const b = randomNumberUtility(256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  return (
    <div style={{ height: "100vh", width: "100vw", background: color }}>
      <button onClick={() => setColorOption("RGB")}>Create RGB Color</button>
      <button onClick={() => setColorOption("HEX")}>Create HEX Color</button>
      <button
        onClick={colorOption === "HEX" ? handleHexOption : handleRgbOption}
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "50px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h3>{colorOption}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
