// import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "react-spring";

export default function Map() {
  const MAP = 1;
  const FILTER = 2
  const [arr, setArr] = useState([]);
  const [loop, setLoop] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [divisor, Setdivisor] = useState("");
  const [filteredArray, SetfilteredArray] = useState([]);

  const springProps = useSpring({
    transform: isClicked ? "scale(1.4)" : "scale(1)",
    config: { tension: 300, friction: 20 }, // Animation configuration
    onRest: () => setIsClicked(false), // Reset isClicked state after animation ends
    from: { transform: "scale(1)" }, // Initial transform scale
    immediate: !isClicked,
  });

  function handleInput(e) {
    let data = e.target.value;
    let newArr = data.split(" ");
    setArr(newArr);
    setInputValue(data);
  }

  const handleClear = () => {
    setIsClicked(true);
    setArr([]);
    setLoop(0);
    SetfilteredArray(null);
    Setdivisor(0);
    // set Input value
    setInputValue("");
  };

  const handleFilter = () => {
    const filteredArray = arr.filter((value) => parseInt(value) % divisor === 0);
    SetfilteredArray(filteredArray);
  }

  // Conver the array to string
  const arrayAsString = JSON.stringify(arr);
  const filteredStrArray = JSON.stringify(filteredArray)

  return (
    <>
      <div className="col-md-6 mx-auto">
        <p>This is the map example </p>
        <form className="mb-3">
          <div className="input-group p-2" style={{ maxWidth: "700px" }}>
            <input
              type="text"
              pattern="[0-9 ]+"
              className="form-control"
              placeholder="ball Cat Dog ..."
              aria-label="Recipient's username with two button addons"
              onChange={handleInput}
              value={inputValue}
            />

            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => setLoop(MAP)}
            >
              Map
            </button>
            <button className="btn btn-outline-secondary" type="button" onClick={() => setLoop(FILTER)}>
              Filter
            </button>
          </div>
          {loop == FILTER && <div class="row g-3 align-items-center p-2">
            <div class="col-auto">
              <label for="inputPassword6" class="col-form-label">Divide by</label>
            </div>
            <div class="col-auto">
              <input type="number" placeholder="Number.." id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" onChange={e => Setdivisor(e.target.value)} />
            </div>
            <div class="col-auto">
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={handleFilter} >
                Filter Me
              </button>
            </div>
          </div>}

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Input
            </span>
            <input
              type="text"
              // className="form-control"
              className={`${loop == FILTER ? 'col-6' : 'form-control'}`}
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={arrayAsString == "[]" ? "[  ]" : arrayAsString}
              disabled
            />
            {loop == FILTER && (
              <>
                <h4 className="p-1">/</h4>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={divisor}
                  disabled
                />
              </>
            )}
          </div>
        </form>

        <div className="card">
          <div className="btn btn-light position-absolute top-0 end-0">
            <animated.div style={springProps} onClick={handleClear} className="trash-icon" >
              <FontAwesomeIcon title="Clear" icon={faTrash} />
            </animated.div>
          </div>
          <div className="card-header">Result (output)</div>
          {loop == MAP && (
            <div className="card-text">
              <ol>
                {arr.length != 0 ? arr.map((item, index) => (
                  <li key={index}>{item}</li>
                )) : <p className="error card-title textCenter"> Oops Not Data </p>
                }
              </ol>
            </div>
          )}
          {filteredArray ?
            <>
              <div className="p-2">
                <p>Divide by {divisor}</p>
                <div >{filteredStrArray}</div>
              </div>
            </>
            :
            null
          }
        </div >
      </div >
    </>
  );
}
