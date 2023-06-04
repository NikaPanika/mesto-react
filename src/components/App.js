import '../index.css';
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';



function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] =
    React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  };

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }
  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm
        title={"Редактировать профиль"}
        name={"edit"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <input type="text" className="popup__input popup__input_type_name" name="name" placeholder="Жак-Ив Кусто"
          required minLength='2' maxLength='40' id="name-input" />
        <span className="popup__input-error name-input-error"></span>
        <input type="text" className="popup__input popup__input_type_description" name="about"
          placeholder="Исследователь океана" required minLength='2' maxLength='200' id="description-input" />
        <span className="popup__input-error description-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        title={"Новое место"}
        name={"new-place"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <input type="text" className="popup__input popup__input_type_place" name="name" placeholder="Название"
          required minLength='2' maxLength='30' id="place-input" />
        <span className="popup__input-error place-input-error"></span>
        <input type="url" className="popup__input popup__input_type_link" name="link"
          placeholder="Ссылка на картинку" required id="link-input" />
        <span className="popup__input-error link-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        title={"Обновить аватар"}
        name={"avatar"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <input type="url" className="popup__input popup__input_type_link" name="link"
          placeholder="Ссылка на картинку" required id="link-avatar" />
        <span className="popup__input-error link-avatar-error"></span>
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups} />
      <div className="popup popup-delete">
        <div className="popup__container">
          <form className="popup__form popup__form_popup-delete">
            <button className="popup__close-button" type="button"></button>
            <h2 className="popup__header popup-delete__header">Вы уверены?</h2>
            <button className="popup__save-button popup-delete__save-button" type="submit">Да</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
