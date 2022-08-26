import {NavLink} from "react-router-dom";

function NavBar(props) {
    return (
        <div>
            <nav >
                <div>
                    <NavLink to='/profile' className>Профиль</NavLink>
                </div>
                <div>
                    <NavLink to='/StoryList' className>Истории</NavLink>
                </div>
                <div>
                    <NavLink to='/users' className>Пользователи</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default NavBar