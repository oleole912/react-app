import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { removeCard, toggleCardFavorite } from '../../redux/cardsRedux';


const Card = ({title, id, isFavorite}) => {

    const dispatch = useDispatch();

    const handleToggleFavorite = () => {
        dispatch(toggleCardFavorite(id, isFavorite));
    }

    const handleRemove = () => {
        dispatch(removeCard(id));
    }
    return (
        <li className={styles.card}>
            {title}
            <span>
            <button className={styles.btn} onClick={handleToggleFavorite}><i className={clsx("fa fa-solid fa-star-o", isFavorite && styles.isFavorite)}></i></button>
            <button className={styles.btn} onClick={handleRemove}><i className="fa fa-solid fa-trash"></i></button>
            </span>

        </li>
    )
}

export default Card;