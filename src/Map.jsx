import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Αυτό φέρνει τον όμορφο σχεδιασμό του χάρτη
import L from 'leaflet';

// --- Διόρθωση για να εμφανίζονται σωστά οι πινέζες στο React ---
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});
// ---------------------------------------------------------------

function Map() {
  // Οι συντεταγμένες για το κέντρο της Ελλάδας
  const centerOfGreece = [39.0742, 21.8243];

  return (
    <div className="dashboard-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="dashboard-header">
        <h1>Χάρτης Καταστημάτων</h1>
        <p>Διαδραστικός χάρτης με την κατάσταση του δικτύου σε πραγματικό χρόνο.</p>
      </div>

      {/* Το "κουτί" που θα κρατάει τον χάρτη */}
      <div style={{ flex: 1, minHeight: '500px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #ddd' }}>
        <MapContainer center={centerOfGreece} zoom={6} style={{ height: '100%', width: '100%' }}>
          
          {/* Ο σχεδιασμός του χάρτη (οδοί, θάλασσες κλπ) */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />

          {/* Παράδειγμα 1ης Πινέζας - Αθήνα */}
          <Marker position={[37.9838, 23.7275]}>
            <Popup>
              <strong>Κατάστημα #032</strong> <br /> 
              Αθήνα - Κέντρο <br />
              <span style={{ color: '#d93025' }}>🔴 Κρίσιμο</span>
            </Popup>
          </Marker>

          {/* Παράδειγμα 2ης Πινέζας - Θεσσαλονίκη */}
          <Marker position={[40.6401, 22.9444]}>
            <Popup>
              <strong>Κατάστημα #087</strong> <br /> 
              Θεσσαλονίκη <br />
              <span style={{ color: '#188038' }}>🟢 Υγιές</span>
            </Popup>
          </Marker>

        </MapContainer>
      </div>
    </div>
  );
}

export default Map;