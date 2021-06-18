import React from 'react';
import c from "./Main.module.css";
import { withRouter } from "react-router";

const Main = (props) => {
  const createChannel = () => {
    props.history.push('/newChannel');
  }
  return (
    <div className={c.wrapper}>
      <div className={c.btnWrapper}>
        <button onClick={createChannel} className={c.btn}>Create a channel</button>
      </div>
      <h1 className={c.title}>Welcome to awesome chat!</h1>
    </div>
  )
}
export default withRouter(Main);