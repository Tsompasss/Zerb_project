import { ShieldCheck } from 'lucide-react';

function Login({ onLogin }) {
  // Αυτή η συνάρτηση τρέχει όταν ο χρήστης πατάει "Σύνδεση"
  const handleSubmit = (e) => {
    e.preventDefault(); // Σταματάει τη σελίδα από το να κάνει refresh
    onLogin(); // Ενημερώνει το App.jsx ότι ο χρήστης μπήκε επιτυχώς
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo">
          <ShieldCheck size={48} color="#007a7a" />
          <h2>ALFAZER</h2>
          <p>Portal Πελατών</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="pelatis@etaireia.gr" required />
          </div>
          
          <div className="input-group">
            <label>Κωδικός Πρόσβασης</label>
            <input type="password" placeholder="••••••••" required />
          </div>
          
          <button type="submit" className="login-button">
            Ασφαλής Σύνδεση
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;