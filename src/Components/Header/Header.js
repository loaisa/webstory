import React from 'react';
import classes from './Header.module.css'
import logo from '../../assets/clipart4742447.png'
function Header(props) {
    return (
        <header className={classes.header}>
            <div className={classes.headerItem}>
                <div className="logo">
                    <p>My Story</p>
                </div>
                <ul  className={classes.headerItemUl}>
                    <a className={classes.headerItemA} href="#">О нас</a>
                    <a className={classes.headerItemA} href="#">О нас</a>
                    <a className={classes.headerItemA} href="#">О нас</a>
                    <a className={classes.headerItemA} href="#">О нас</a>
                </ul>

                <div className={classes.Feedback}>
                    <a href="">Обратная связь</a>
                </div>
            </div>
        </header>
    );
}

export default Header;