import React from 'react';
import './App.css';
import Button, {ButtonVariants} from './components/Button';

import Checkbox from './components/Checkbox';
import Input from './components/Input/input';
import RadioButton from './components/RadioButton';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Button</h1>
        <div>
          <Button>This is a button</Button>
          <Button variant={ButtonVariants.Large}>This is a button</Button>
          <Button variant={ButtonVariants.Small}>This is a button</Button>
          <Button disabled>This is a button</Button>
        </div>
        <div>
          <Button ghost>This is a button</Button>
          <Button ghost variant={ButtonVariants.Large}>
            This is a button
          </Button>
          <Button ghost variant={ButtonVariants.Small}>
            This is a button
          </Button>
          <Button ghost disabled>
            This is a button
          </Button>
        </div>
      </div>
      <div>
        <h1>Checkbox</h1>
        <Checkbox />
      </div>
      <div>
        <h1>Radio button</h1>
        <RadioButton />
      </div>
      <div>
        <h1>Checkbox</h1>
        <Input label="Label" placeholder="Input" />
        <Input label="Label" placeholder="Input" disabled />
        <Input label="Label" placeholder="Input" id="input" error />
        <Input label="Label" placeholder="Input" success />
        <Input label="Label" placeholder="Input" border={false} />
        <Input type="password" label="Label" password placeholder="Input" />
        <Input
          label="Label"
          message="This is a message"
          multiline
          placeholder="Input"
        />
      </div>
    </div>
  );
}

export default App;
