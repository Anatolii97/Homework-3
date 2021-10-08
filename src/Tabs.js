import { useState } from "react";
import "./theme/App.css";
import {LoginForm} from './components/Forms/LoginForm';
import {SignUpForm} from './components/Forms/SignUpForm';

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Log in
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Sign up
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Login on w3iscool</h2>
          <LoginForm/>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Sign up on w3iscool</h2>
          <SignUpForm/>
        </div>
      </div>
    </div>
  );
}

export default Tabs;