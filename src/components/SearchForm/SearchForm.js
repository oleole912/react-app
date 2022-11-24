import { useState } from 'react';
import { useDispatch } from 'react-redux';


import TextInput from '../TextInput/TextInput';
import styles from './SearchForm.module.scss';
import Button from '../Button/Button';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
    const [string, setString] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(string));
        setString('');
    }
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