import React from 'react';

function Card({ card, onCardClick }) {
    const { name, link, likes } = card;

    const imageOnError = (event) => {
        event.currentTarget.src = 'https://sanberg.ru/photos/ITC_PLAIN_1.jpg';
        event.currentTarget.alt = 'Изображение недоступно';
    };
    return (
        <article className="photo-grid__element">
            <img alt={name}
                src={link}
                className="photo-grid__photo"
                onClick={() => onCardClick(card)}
                onError={imageOnError} />
            <button className="photo-grid__delete" type="button"></button>
            <div className="photo-grid__text">
                <h2 className="photo-grid__place">{name}</h2>
                <div className="photo-grid__like-container">
                    <button className="photo-grid__like" type="button"></button>
                    <p className="photo-grid__like-counter">{likes.length}</p>
                </div>
            </div>
        </article>
    )
}

export default Card;