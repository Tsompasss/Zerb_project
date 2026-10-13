import { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { LayoutDashboard, Map as MapIcon, Store, ShieldAlert } from 'lucide-react';
import './App.css';
import Dashboard from './Dashboard';
import Map from './Map';
import Stores from './Stores';
import Login from './Login'; // <--- Εισάγουμε τη νέα μας σελίδα

function App() {
  // Εδώ φτιάχνουμε τον "διακόπτη". Ξεκινάει από false (ΜΗ συνδεδεμένος)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Αν ΔΕΝ είναι συνδεδεμένος, του δείχνουμε ΜΟΝΟ το Login
  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  // Αν ΕΙΝΑΙ συνδεδεμένος, του δείχνουμε το Portal κανονικά!
  return (
    <BrowserRouter>
      <div className="layout-container">
        
        <aside className="sidebar">
          <h2>ALFAZER</h2>
          <nav>
            <ul>
              <li>
                <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>
                  <LayoutDashboard size={20} /> Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/map" className={({isActive}) => isActive ? "active" : ""}>
                  <MapIcon size={20} /> Χάρτης Καταστημάτων
                </NavLink>
              </li>
              <li>
                <NavLink to="/stores" className={({isActive}) => isActive ? "active" : ""}>
                  <Store size={20} /> Καταστήματα
                </NavLink>
              </li>
              <li>
                <NavLink to="/risk" className={({isActive}) => isActive ? "active" : ""}>
                  <ShieldAlert size={20} /> Ανάλυση Κινδύνου
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/map" element={<Map />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/risk" element={<h2>Ανάλυση Κινδύνου (Σύντομα)</h2>} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;