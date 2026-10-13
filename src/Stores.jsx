import { Search } from 'lucide-react';

function Stores() {
  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1>Λίστα Καταστημάτων</h1>
        <p>Διαχειριστείτε και δείτε την κατάσταση όλων των σημείων του δικτύου σας.</p>
      </div>

      <div className="stores-container">
        {/* Μπάρα Αναζήτησης */}
        <div className="search-bar">
          <Search size={20} color="#6b778c" />
          <input type="text" placeholder="Αναζήτηση καταστήματος, πόλης ή κωδικού..." />
        </div>

        {/* Πίνακας Δεδομένων */}
        <table className="stores-table">
          <thead>
            <tr>
              <th>ΚΩΔΙΚΟΣ</th>
              <th>ΠΕΡΙΟΧΗ / ΚΑΤΑΣΤΗΜΑ</th>
              <th>ΚΑΤΑΣΤΑΣΗ</th>
              <th>ΤΕΛΕΥΤΑΙΑ ΕΠΙΣΚΕΨΗ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>#032</strong></td>
              <td>Αθήνα - Κέντρο</td>
              <td><span className="status-badge danger">🔴 Κρίσιμο</span></td>
              <td>Σήμερα</td>
            </tr>
            <tr>
              <td><strong>#087</strong></td>
              <td>Θεσσαλονίκη</td>
              <td><span className="status-badge success">🟢 Υγιές</span></td>
              <td>Πριν 3 ημέρες</td>
            </tr>
            <tr>
              <td><strong>#041</strong></td>
              <td>Πάτρα</td>
              <td><span className="status-badge warning">🟠 Προσοχή</span></td>
              <td>Πριν 1 εβδομάδα</td>
            </tr>
            <tr>
              <td><strong>#015</strong></td>
              <td>Λάρισα</td>
              <td><span className="status-badge warning">🟠 Προσοχή</span></td>
              <td>Πριν 2 εβδομάδες</td>
            </tr>
            <tr>
              <td><strong>#073</strong></td>
              <td>Ηράκλειο</td>
              <td><span className="status-badge success">🟢 Υγιές</span></td>
              <td>Πριν 1 μήνα</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Stores;