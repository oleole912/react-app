import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../../redux/store";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";


const CardForm = props => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCard({title, columnId: props.columnId}));
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextInput value={title} onChange={(e) => {setTitle(e.target.value)}} />
            <Button>Add card</Button>
        </form>
    );
}

export default CardForm;