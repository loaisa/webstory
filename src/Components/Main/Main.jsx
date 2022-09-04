import React, {useState} from 'react';

import classes from './Main.module.css'




function Main(props) {

    return (

        <div className={classes.main}>
            <div className={classes.main__content}>
                <div>
                    <h1 className={classes.main__h1}>
                        Хорошая Фантазия?
                    </h1>
                    <p className={classes.main__p1}>
                        Создай свою историю и дай о себе знать
                    </p>
                    <button className={classes.main__btn}>
                        <a href="">Регистрация</a>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Main;