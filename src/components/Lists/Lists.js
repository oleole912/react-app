import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllLists } from "../../redux/listsRedux";
import styles from "./Lists.module.scss";
import { Link } from "react-router-dom";
import ListForm from "../ListForm/ListForm";
import {removeList} from '../../redux/listsRedux'

const Lists = () => {
  const dispatch = useDispatch();

  const lists = useSelector(getAllLists);
  return (
    <section className={styles.lists}>
      <h2 className={styles.heading}>Browse lists</h2>
      {lists.map((list) => ( <div className={styles.listWrapper}>
        <Link key={list.id} to={"/list/" + list.id} className={styles.listLink}>
          <h3>{list.title}</h3>
          <p>{list.description}</p>
        </Link>

        <button key={list.id + list.id} className={styles.btn} onClick={() => dispatch(removeList(list.id))}>
          <i className="fa fa-solid fa-trash"></i>
        </button>

      </div>

      ))}
      <ListForm />
    </section>
  );
};

export default Lists;
