import {NavLink} from "react-router-dom";

function NavBar(props) {
    return (
        <div className='NavBar'>
            <nav >
                <div>
                    <NavLink to='/profile' className>Профиль</NavLink>
                </div>
                <div>
                    <NavLink to='/story-list' className>Истории</NavLink>
                </div>
                <div>
                    <NavLink to='/users' className>Пользователи</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default NavBar