import { useState } from "react";
import Button from "./button";
import { EXAMPLES } from "./data"

const Wrapper = () => {
  const [selectedData, setselectedData] = useState(null)

  const handleClick = (action) => {
    setselectedData(action)

  }


  return (<>
    <ul style={{ display: "flex", gap: "20px" }}>
      <Button id="nitin" isSelected={selectedData == "components"} action={() => handleClick("components")}>Components</Button>
      <Button isSelected={selectedData == "jsx"} action={() => handleClick("jsx")}>JSX</Button>
      <Button isSelected={selectedData == "props"} action={() => handleClick("props")}>Props</Button>
      <Button isSelected={selectedData == "state"} action={() => handleClick("state")}>State</Button>
    </ul>
    <div>
      {selectedData ? <>
        <h3>{EXAMPLES[selectedData].title}</h3>
        <p>{EXAMPLES[selectedData].description}</p>
        <pre>
          <code>{EXAMPLES[selectedData].code}</code>
          section
        </pre>
      </> : <p>Select tab to display data</p>}


    </div>
  </>)
}
export default Wrapper;