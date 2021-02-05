import React, {useState} from 'react';
import ButtonAddList from './../ButtonAddList/ButtonAddList.jsx';
import FormAddList from './../FormAddList/FormAddList.jsx';


const AddList = (props) => {
    const [buttonPushed, setButtonPushed] = useState(false);

    function onButtonChange() {
        setButtonPushed(!buttonPushed);
    }

    const onFormChange = (newList) => {
        props.onAddListClick(newList);
        setButtonPushed(!buttonPushed);
    }

    const onFormReset = () => {
        setButtonPushed(!buttonPushed);
    }

    return(
        <div>{buttonPushed ? 
            <FormAddList 
                onFormChange ={onFormChange}
                onFormReset = {onFormReset}/>
            : <ButtonAddList onButtonChange = {onButtonChange}/>}</div>
    )
}

export default AddList;