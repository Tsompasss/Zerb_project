function Dashboard() {
  return (
    <div className="dashboard-content">
      {/* Επικεφαλίδα */}
      <div className="dashboard-header">
        <div>
          <h1>Επισκόπηση Δικτύου</h1>
          <p>Παρακολουθήστε όλα τα καταστήματά σας σε πραγματικό χρόνο.</p>
        </div>
      </div>

      {/* 4 Κουτάκια (KPIs) */}
      <div className="kpi-grid">
        <div className="kpi-card">
          <span>Σύνολο Καταστημάτων</span>
          <h2>128</h2>
          <small>σε 7 περιφέρειες</small>
        </div>
        <div className="kpi-card danger">
          <span>Καταστήματα με Θέμα</span>
          <h2>14</h2>
          <small>10,9% του συνόλου</small>
        </div>
        <div className="kpi-card warning">
          <span>Επόμενες Επισκέψεις</span>
          <h2>23</h2>
          <small>τις επόμενες 7 ημέρες</small>
        </div>
        <div className="kpi-card success">
          <span>Ποσοστό Συμμόρφωσης</span>
          <h2>93,6%</h2>
          <small>+2,4% από την προηγ. εβδομάδα</small>
        </div>
      </div>

      {/* Κυρίως Χώρος (Διπλή Στήλη) */}
      <div className="content-grid">
        <div className="left-column">
          <div className="placeholder-box map-box">Εδώ θα μπει ο διαδραστικός χάρτης</div>
          <div className="placeholder-box chart-box">Εδώ θα μπει το γράφημα</div>
        </div>

        <div className="right-column">
          <div className="list-box">
            <h3>Καταστήματα με Θέμα</h3>
            <ul>
              <li>#032 Αθήνα - Κέντρο <span>🔴 Κρίσιμο</span></li>
              <li>#087 Θεσσαλονίκη <span>🟠 Προσοχή</span></li>
            </ul>
          </div>
          <div className="list-box">
            <h3>Πρόσφατα Συμβάντα</h3>
            <ul>
              <li>Αυξημένη δραστηριότητα εντόμων (#032)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;