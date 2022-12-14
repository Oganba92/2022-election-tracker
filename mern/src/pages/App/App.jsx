import './App.css';
import {useState} from 'react';
// Import the following components
import AuthPage from '../AuthPage/AuthPage';
import NewElectionsPage from '../NewElectionPage/NewElectionPage';
import ElectionsPage from '../ElectionsPage/ElectionsPage';
import {Routes, Route} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import {getUser} from '../../utilities/users-service';

function App() {
    // set the user by calling getUser function
    const [user, setUser] = useState(getUser());

    return (
        < main className="App">
            {user ?
                <>
                    <NavBar user={user} setUser={setUser}/>
                    <Routes>
                        <Route path="/elections/new" element={<NewElectionsPage/>}/>
                        <Route path="/elections" element={<ElectionsPage/>}/>
                    </Routes>
                </>
                :
                <AuthPage setUser={setUser}/>}

        </main>
    );
}

export default App;