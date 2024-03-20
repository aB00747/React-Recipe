import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Map() {
  const [arr, setArr] = useState([]);
  const [boolean, setBoolean] = useState(false);

  function display(e) {
    let data = e.target.value;
    let newArr = data.split(" ");
    setArr(newArr);
  }

  const handleClear = () => {
    // Clear the data
    setArr([]);
    setBoolean(false);
  };

  // Conver the array to string
  const arrayAsString = JSON.stringify(arr);

  return (
    <>
      <div className="col-md-6 mx-auto">
        <p>This is the map example </p>
        <form className="mb-3">
          <div className="input-group" style={{ maxWidth: "700px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="ball Cat Dog"
              aria-label="Recipient's username with two button addons"
              onChange={display}
            />

            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={display}
            >
              Map
            </button>
            <button className="btn btn-outline-secondary" type="button">
              Button
            </button>
          </div>
        </form>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Input
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={arrayAsString}
          />
        </div>

        <div className="card">
          <button
            className="btn btn-light position-absolute top-0 end-0"
            onClick={() => setBoolean(false)}
          >
            Clear
          </button>
          {/* <button className="btn btn-light position-absolute top-0 end-0 m-2" onClick={handleClear}>
          <FontAwesomeIcon icon={faCheck} />
        </button> */}
          <div className="card-header">Result (output)</div>
          <div className="card-body input-group mb-3">
            <h5 className="card-title input-group-text">Map</h5>
            <button
              className="btn btn-primary card-title"
              type="button"
              onClick={() => setBoolean(true)}
            >
              Click here !
            </button>
          </div>

          {boolean && (
            <div className="card-text">
              <ol>
                {arr.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </>
  );
}