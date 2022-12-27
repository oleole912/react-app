import styles from "./Column.module.scss";
import Card from "../Card/Card";
import CardForm from "../CardForm/CardForm";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredCards } from "../../redux/cardsRedux";
import { removeColumn } from "../../redux/columnsRedux";

const Column = (props) => {
    const dispatch = useDispatch();
  const cards = useSelector((state) => getFilteredCards(state, props.id));

  return (
    <article className={styles.column}>
      <span>
        <button className={styles.btn} onClick={() => dispatch(removeColumn(props.id))}>
          <i className="fa fa-solid fa-trash"></i>
        </button>
      </span>
      <h1 className={styles.title}>
        <span className={styles.icon + " fa fa-" + props.icon}></span>
        {props.title}
      </h1>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  );
};

export default Column;
