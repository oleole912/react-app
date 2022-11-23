import { useState } from "react";
import { useDispatch } from 'react-redux';
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import styles from "./ColumnForm.module.scss";

const ColumnForm = (props) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_COLUMN', payload: {title, icon}})
    setTitle("");
    setIcon("");
  };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <span className={styles.label}>Title:</span>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <span className={styles.label}>Icon:</span>
      <TextInput value={icon} onChange={(e) => setIcon(e.target.value)} />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
