import './App.css';
import {Route, Routes} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Story from "./Components/Story/Story";
import Header from "./Components/Header/Header";
import UsersContainer from "./Components/Users/UsersContainer";
import Main from "./Components/Main/Main";

function App() {
    return (
        <div className="App">
            {/*<NavBar/>*/}
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='' element={<Main/>} />
                    <Route path='/story/*' element={<Story/>}/>
                    <Route path='/users/*' element={<UsersContainer/>}/>
                </Routes>

            </div>
        </div>

    );
}

export default App;
