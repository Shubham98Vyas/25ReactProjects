import React, { useState } from "react";
import data from "./accordionData";
import "./accordion.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelectionOption, setMultiSelectionOption] = useState(false);
  const [multipleItems, setMultipleItems] = useState([]);

  function handlemultiSelectionOption() {
    setMultiSelectionOption(!multiSelectionOption);
  }

  function handleSingleSelection(currentId) {
    setSelected(selected === currentId ? null : currentId);
  }

  function handleMultiSelection(currentId) {
    const copyMultipleItems = [...multipleItems];
    const indexOfcurrentId = copyMultipleItems.indexOf(currentId);
    console.log(indexOfcurrentId);
    indexOfcurrentId === -1
      ? copyMultipleItems.push(currentId)
      : copyMultipleItems.splice(indexOfcurrentId, 1);
    setMultipleItems(copyMultipleItems);
  }

  console.log(selected, multipleItems);
  return (
    <div className="wrapper">
      <button onClick={handlemultiSelectionOption}>
        Enable Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item" key={item.id}>
              <div
                onClick={
                  multiSelectionOption
                    ? () => {
                        handleMultiSelection(item.id);
                      }
                    : () => {
                        handleSingleSelection(item.id);
                      }
                }
                className="title"
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {selected === item.id || multipleItems.indexOf(item.id) !== -1 ? (
                <div className="content">{item.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No content found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
