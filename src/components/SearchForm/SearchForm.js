import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getSearchString } from '../../redux/searchStringRedux';
import TextInput from '../TextInput/TextInput';
import styles from './SearchForm.module.scss';
import Button from '../Button/Button';
import { updateSearchString } from '../../redux/searchStringRedux';

const SearchForm = () => {
    const searchString = useSelector(getSearchString);
    const [string, setString] = useState(searchString); // ('')

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(string));
       // setString('');
    }
    useEffect(() => {
        dispatch(updateSearchString(''))
    }, []);

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit} >
            <TextInput placeholder="Search..." value={string} onChange={(e) => setString(e.target.value)} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    )
}

export default SearchForm;