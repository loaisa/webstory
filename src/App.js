import './App.css';
import {Route, Routes} from "react-router-dom";
import StoryList from "./Components/Story/StoryList.jsx";
import UsersContainer from "./Components/Users/UsersContainer";
import Main from "./Components/Main/Main";
import CreateStory from "./Components/Story/CreateStory";
import Header from "./Components/Header/Header";

function App() {
    return (
        <div className="App" >
            {/*<NavBar/>*/}
            <Header/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='' element={<Main/>} />
                    <Route path='/story/*' element={<StoryList/>}/>
                    <Route path='/users/*' element={<UsersContainer/>}/>
                    <Route path='/create-story/*' element={<CreateStory/>}/>
                </Routes>

            </div>
        </div>

    );
}

export default App;
