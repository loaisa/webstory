import './App.css';
import {Route, Routes} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Story from "./Components/Story/Story";
import Header from "./Components/Header/Header";
import UsersContainer from "./Components/Users/UsersContainer";

function App() {
    return (
        <div className="App">
            <Header className />
            <NavBar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/story/*' element={<Story/>}/>

                    <Route path='/users/*' element={<UsersContainer/>}/>
                </Routes>

            </div>
        </div>

    );
}

export default App;
