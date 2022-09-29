import './App.css';
import { useState } from 'react';
// import 

function App() {
  const [user, setUser] = useState(null)
  return (
    < main className="App" >
      {user ? <NewOrderPage /> : <AuthPage />}
    </main >
  );
}

export default App;
