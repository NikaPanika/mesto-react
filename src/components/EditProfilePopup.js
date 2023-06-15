import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            title={"Редактировать профиль"}
            name={"edit"}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}>
            <input
                type="text"
                className="popup__input popup__input_type_name"
                name="name"
                placeholder="Жак-Ив Кусто"
                required
                minLength='2'
                maxLength='40'
                id="name-input"
                onChange={handleChangeName} />
            <span className="popup__input-error name-input-error"></span>
            <input type="text"
                className="popup__input popup__input_type_description"
                name="about"
                placeholder="Исследователь океана"
                required
                minLength='2'
                maxLength='200'
                id="description-input"
                onChange={handleChangeDescription} />
            <span className="popup__input-error description-input-error"></span>
        </PopupWithForm>
    );
}

export default EditProfilePopup;