import './App.css';
import { useState } from 'react';
// Import the following components
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import { Routes, Route } from 'react-router-dom';


function App() {
  const [user, setUser] = useState({})
  return (
    < main className="App" >
      {user ?
        <Routes>
          <Route path="/orders/new" element={<NewOrderPage />} />
        </Routes>
        :
        <AuthPage />}
    </main >
  );
}

export default App;
