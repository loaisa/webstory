import './App.css';
import {Route, Routes} from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import Main from "./Components/Main/Main";
import CreateStory from "./Components/Story/CreateStory";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import {StoryList} from "./Components/Story/StoryList";
import Story from "./Components/Story/Story";
import About from "./Components/Main/About";
import Test from "./Components/test/Test";



function App() {
    return (
        <div className="App" >
            <Header/>
            <NavBar />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='' element={<Main/>} />
                    <Route path='/users/*' element={<UsersContainer/>}/>
                    <Route path='/about/*' element={<About/>}/>
                    <Route path='/create-story/*' element={<CreateStory/>}/>
                    <Route path='story/:id' element={<Story/>}/>
                    <Route path='/story-list/*' element={<StoryList/>}/>
                    <Route path='/test/*' element={<Test/>}/>
                </Routes>

            </div>
        </div>

    );
}

export default App;
