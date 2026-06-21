import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";
import brandImg from "./assets/brand.png";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <div>
          <img src={brandImg} className="brand" alt="Brand logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="btn btn--primary"
          onClick={() => setCount((count) => count + 1)}
        >
          <FontAwesomeIcon icon={faArrowPointer} />
          Count is {count}
        </button>
      </section>
    </>
  );
}

export default App;
