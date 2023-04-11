import { useState } from 'react';
import './App.css'
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

export default function App() {

  const [user, setUser] = useState(null);

  return (
    <main className="App">
      
      { user ?
        <>
          <NavBar />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage/>} />
            <Route path="/orders" element={<OrderHistoryPage/>} />
          </Routes>
        </>
        :
        <AuthPage />
      }
    </main>
  )
}
