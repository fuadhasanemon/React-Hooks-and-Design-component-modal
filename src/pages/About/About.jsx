import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Modal from "../../components/Modal/Modal";
import "./about.scss";

const About = () => {
  const [bg, setBg] = useState("red");

  const [counter, setCounter] = useState(0);

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div style={{ backgroundColor: bg }} className="main-body">
        <div className="flex">
          <div className="counter">
            <h2>{counter}</h2>
            <div className="button-group">
              <button onClick={() => setCounter(counter + 1)}>++</button>
              <button
                onClick={() => setCounter(counter <= 0 ? 0 : counter - 1)}
              >
                --
              </button>
            </div>
          </div>

          <div className="button-group">
            <button onClick={() => setBg("red")}>Red</button>
            <button onClick={() => setBg("green")}>Green</button>
            <button onClick={() => setBg("blue")}>Blue</button>
            <button onClick={() => setBg("purple")}>Purple</button>
            <button onClick={() => setBg("black")}>Black</button>
          </div>
          <br />

          {showModal && (
            <Modal title="Hi modal" hide={setShowModal}>
              <>
                <h1>This is my modal</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis nostrum sint distinctio voluptatibus inventore
                  placeat, dolore nihil maxime earum assumenda.
                </p>
              </>
            </Modal>
          )}
          <div className="button-group">
            <button
              onClick={() => setShowModal(true)}
              className="btn btn-primary align-items-center"
            >
              Modal
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
