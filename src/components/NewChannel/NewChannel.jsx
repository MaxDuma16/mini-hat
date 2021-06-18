import React, {useState, useContext} from 'react';
import c from "./NewChannel.module.css";
import { withRouter } from "react-router";
import MessagesContext from '../../context/MessagesContext';

const NewChannel = (props) => {
  const { addTitle, addDescription } = useContext(MessagesContext);
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [isError, setIsError] = useState(false);
  const onTitle = (event) => {
    setTitleValue(event.target.value);
  }
  const onDescription = (event) => {
    setDescriptionValue(event.target.value);
  }
  const createNewChannel = () => {
    if (titleValue && descriptionValue) {
      addTitle(titleValue);
      addDescription(descriptionValue);
      props.history.push(`/channel/${'1'}`);
    } else {
      //Error
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
    }
  }
  return (
    <div className={c.wrapper}>
      <div className={c.container}>
        <h2>NewChannel</h2>
        <input 
          placeholder="Channel title" 
          name="title"
          className={c.input}
          onChange={onTitle}
          value={titleValue}
          />
        <input 
          placeholder="Channel description" 
          name="description"
          className={c.input}
          onChange={onDescription}
          value={descriptionValue}
          />
        <div className={c.btnWrapper}>
          <button onClick={createNewChannel} className={c.btn}>Create</button>
        </div>
        { isError && <div className={c.error}>
            One or both fields are empty!
          </div>}
      </div>
    </div>
  )
}
export default withRouter(NewChannel);