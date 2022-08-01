import './App.css';
import {Route, Routes} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Story from "./Components/Story/Story";
import Users from "./Components/Users/Users";
import Header from "./Components/Header/Header";

function App() {
    return (
        <div className="App">
            <Header className />
            <NavBar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/story/*' element={<Story/>}/>

                    <Route path='/users/*' element={<Users/>}/>
                </Routes>

            </div>
        </div>

    );
}

export default App;
