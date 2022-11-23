import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = (props) => {
    const searcheString = useSelector(state => state.searcheString);

    const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id && card.title.toLowerCase().includes(searcheString.toLowerCase())));

    return (
        <article className={styles.column}>
            <h1 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h1>
            <ul className={styles.cards}>
                {cards.map(card => <Card title={card.title} key={card.id} />)}
            </ul>
            <CardForm columnId={props.id} />
        </article>
    )
}

export default Column;