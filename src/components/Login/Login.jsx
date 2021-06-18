import React, {useContext, useState} from 'react';
import c from "./Login.module.css";
import { withRouter } from "react-router";
import MessagesContext from '../../context/MessagesContext';

const Login = (props) => {
  const { addName } = useContext(MessagesContext);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isError, setIsError] = useState(false);
  const handleSubmit= (event) => {
    event.preventDefault();
    if (nameValue && emailValue && passwordValue) {
      addName(nameValue);
      const reset = "";
      setNameValue(reset);
      setEmailValue(reset);
      setPasswordValue(reset);
      props.history.push('/main');
    } else {
      //Error
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
    }
  }
  const onChangeName = (event) => {
    setNameValue(event.target.value);
  }
  const onChangeEmail = (event) => {
    setEmailValue(event.target.value);
  }
  const onChangePassword = (event) => {
    setPasswordValue(event.target.value);
  }
  return (
    <div className={c.wrapper}>
      <div className={c.container}>
      <label className={c.labelInput} for="name">Name</label>
        <input
          placeholder="Enter your name"
          type="name"
          name="name"
          id="name"
          onChange={onChangeName}
          value={nameValue}
          className={c.input}
          />
        <label className={c.labelInput} for="email">Email</label>
        <input
          placeholder="Enter your email"
          type="email"
          name="email"
          id="email"
          onChange={onChangeEmail}
          value={emailValue}
          className={c.input}
          />
        <label className={c.labelInput} for="password">Password</label>
        <input
          placeholder="Enter your password"
          type="password"
          name="password"
          id="password"
          onChange={onChangePassword}
          value={passwordValue}
          className={c.input}
          />
          <div className={c.btnWrapper}>
            <button className={c.btn} type="submit" onClick={handleSubmit}>Login</button>
          </div>
          { isError && <div className={c.error}>
            One or more fields are empty!
            </div>}
      </div>
    </div>
  );
};
export default withRouter(Login);