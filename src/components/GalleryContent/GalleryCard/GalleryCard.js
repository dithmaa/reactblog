import React from 'react';
import css from './GalleryCard.module.css';

const GalleryCard = (props) => {
    const likedStyle = props.liked
        ? " " + css.isActive
        : " "
    return (
        <div className={css.post}>
            <div className={css.postLeft}>
                <div className={css.postLike}>
                    <button className={css.likeButton + likedStyle} onClick={props.likePost}>
                        {
                            props.liked
                                ? "♥"
                                : "♡"
                        }

                        {/* <span>{props.likeAmount}</span> */}
                    </button>
                </div>
                <div className={css.postContent}>
                    <h2>{props.title}</h2>
                    <p>
                        {props.description}
                    </p>

                </div>

            </div>
            <div className={css.postButton}>
                <button className={css.closeBtn} onClick={props.deletePost}>
                    <img src="https://png.pngtree.com/png-vector/20190603/ourmid/pngtree-icon-close-button-png-image_1357955.jpg" alt="Иконка закрытия" />
                </button>
            </div>

        </div>
    )
}
export default GalleryCard;