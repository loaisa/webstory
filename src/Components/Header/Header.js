import React, {useState} from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

// const Modal = ({flag, setFlag, children})=>(
//     <div className={`overlay animated ${flag ? 'show' : ''}`}>
//         <div className="modal">
//             <svg onClick={()=>setFlag(false)} height="200" viewBox="0 0 200 200" width="200">
//                 <title />
//                 <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
//             </svg>
//             {children}
//         </div>
//     </div>
// )


function Header(props) {

    const [flag, setFlag] = useState(false)

    return (
        <header className={classes.header}>
            <div className={classes.headerItem}>
                <div className="logo">
                    <p>My Story</p>
                </div>
                <ul className={classes.headerItemUl}>
                    <NavLink className={classes.headerItemA} to='/about'>О нас</NavLink>
                    <NavLink className={classes.headerItemA} to='/profile'>Профиль</NavLink>
                </ul>

                <div className={classes.Feedback}>
                    <NavLink className={classes.headerItemA} to='/profile'>Обратная связь</NavLink>
                </div>
                <div className={classes.auth}>
                    <NavLink className={classes.headerItemA}  to='/login' >Войти</NavLink>
                    <NavLink className={classes.headerItemA}  to='/register' >Регистрация</NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;