import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main({
    onEditProfile,
    onAddPlace,
    onEditAvatar,
    onCardClick }) {

    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUser()
            .then((userData) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
            })
            .catch((err) => {
                console.log(`Ошибка profile: ${err}`)
            });

        api.getInitialCards()
            .then((initialCards) => {

                setCards(initialCards);

            }).catch((err) => {
                console.log(`Ошибка cards: ${err}`)
            });
    }, []);

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__about">
                    <div className="profile__avatar-container">
                        <button className="profile__overlay" onClick={onEditAvatar}></button>
                        <img src={userAvatar} alt="Фотография" className="profile__avatar" />
                    </div>
                    <div className="profile__info">
                        <div className="profile__string">
                            <h1 className="profile__name">{userName}</h1>
                            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                        </div>
                        <p className="profile__description">{userDescription}</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
            </section>
            <section className="photo-grid">
                {
                    cards.map((item) => {
                        return (
                            <Card
                                card={item}
                                onCardClick={onCardClick}
                            />
                        )
                    })}
            </section>
        </main>
    );
};

export default Main;