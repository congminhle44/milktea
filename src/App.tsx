import React from "react";
import "./App.css";
import Button, { ButtonVariants } from "./components/Button";

import Checkbox from "./components/Checkbox/checkbox";
import RadioButton from "./components/RadioButton/radiobutton";

function App() {
  return (
    <div className="App">
      <div>
        <Button disabled>This is a button</Button>
        <Button>This is a button</Button>
        <Button variant={ButtonVariants.Large}>This is a button</Button>
        <Button variant={ButtonVariants.Small}>This is a button</Button>
      </div>
      <div>
        <Button ghost>This is a button</Button>
        <Button ghost variant={ButtonVariants.Large}>
          This is a button
        </Button>
        <Button ghost variant={ButtonVariants.Small}>
          This is a button
        </Button>
      </div>
      <div>
        <Checkbox disable={false} />
      </div>
      <div>
        <RadioButton name="test" disable={false} />
      </div>
    </div>
  );
}

export default App;
