import React from 'react';
import styles from './ListForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { addList } from '../../redux/store';

const ListForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const submithandler = e => {
        e.preventDefault();
        dispatch(addList({title, description}));
        setTitle('');
        setDescription('');
    }
    return (
        <form className={styles.listForm} onSubmit={submithandler}>
            <span className={styles.label}>Title:</span>
            <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
            <span className={styles.label}>Description:</span>
            <TextInput value={description} onChange={(e) => setDescription(e.target.value)} />
            <Button>Add list</Button>
        </form>
    )
}

export default ListForm
