import React from 'react';
import classes from './Header.module.css'

function Header(props) {
    return (
        <div className={classes.header}>
            <textarea placeholder='Поиск'></textarea>
        </div>
    );
}

export default Header;